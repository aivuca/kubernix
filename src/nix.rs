use crate::{system::System, Config};
use anyhow::Result;
use log::{debug, info};
use std::{
    env::{current_exe, var},
    fs::{self, create_dir_all},
    process::Command,
};

pub struct Nix;

impl Nix {
    pub const DIR: &'static str = "nix";
    const NIX_ENV: &'static str = "IN_NIX";

    /// Bootstrap the nix environment
    pub fn bootstrap(config: Config) -> Result<()> {
        // Prepare the nix dir
        debug!("Nix environment not found, bootstrapping one");
        let dir = config.root().join(Self::DIR);

        // Write the configuration if not existing
        if !dir.exists() {
            create_dir_all(&dir)?;

            fs::write(
                dir.join("nixpkgs.json"),
                include_str!("../nix/nixpkgs.json"),
            )?;
            fs::write(dir.join("nixpkgs.nix"), include_str!("../nix/nixpkgs.nix"))?;

            let packages = &config.packages().join(" ");
            debug!("Adding additional packages: {:?}", config.packages());
            fs::write(
                dir.join("default.nix"),
                include_str!("../nix/default.nix").replace("/* PACKAGES */", packages),
            )?;

            // Apply the overlay if existing
            let target_overlay = dir.join("overlay.nix");
            match config.overlay() {
                // User defined overlay
                Some(overlay) => {
                    info!("Using custom overlay '{}'", overlay.display());
                    fs::copy(overlay, target_overlay)?;
                }

                // The default overlay
                None => {
                    debug!("Using default overlay");
                    fs::write(target_overlay, include_str!("../nix/overlay.nix"))?;
                }
            }
        }

        // Run the shell
        Self::run(
            &config,
            &[
                &format!("{}", current_exe()?.display()),
                "--root",
                &format!("{}", config.root().display()),
            ],
        )
    }

    /// Run a pure nix command
    pub fn run(config: &Config, args: &[&str]) -> Result<()> {
        Command::new(System::find_executable("nix")?)
            .env(Self::NIX_ENV, "true")
            .arg("run")
            .arg("-f")
            .arg(config.root().join(Self::DIR))
            .arg("-c")
            .args(args)
            .status()?;
        Ok(())
    }

    /// Returns true if running in nix environment
    pub fn is_active() -> bool {
        var(Nix::NIX_ENV).is_ok()
    }
}
