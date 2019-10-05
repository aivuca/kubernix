var N=null,E="",T="t",U="u",searchIndex={};
var R=["kubernix","ipnetwork","option","fallible","config","result","try_from","try_into","borrow_mut","borrow","argmatches","Kubernix"];
searchIndex["kubernix"]={"doc":R[0],"i":[[3,"Config",R[0],"The global configuration",N,N],[3,R[11],E,"The main entry point for the application",N,N],[11,"subcommand",E,"All available subcommands",0,[[["self"]],[R[2]]]],[11,"root",E,"The root path during runtime",0,[[["self"]],["pathbuf"]]],[11,"log_level",E,"The logging level of the application",0,[[["self"]],["levelfilter"]]],[11,"crio_cidr",E,"The CIDR used for the CRI-O CNI network",0,[[["self"]],[R[1]]]],[11,"cluster_cidr",E,"The CIDR used for the whole cluster network",0,[[["self"]],[R[1]]]],[11,"service_cidr",E,"The CIDR used for the service network",0,[[["self"]],[R[1]]]],[11,"overlay",E,"The Nix package overlay to be used",0,[[["self"]],[R[2]]]],[11,"impure",E,"Do not clear the current env during bootstrap",0,[[["self"]],["bool"]]],[11,"packages",E,"Additional dependencies to be added to the environment",0,[[["self"]],["vec"]]],[11,"canonicalize_root",E,"Make the configs root path absolute",0,[[["self"]],[R[3]]]],[11,"to_file",E,"Write the current configuration to the internal set root…",0,[[["self"]],[R[3]]]],[11,"update_from_file",E,"Read the configuration from the internal set root path",0,[[["self"]],[R[3]]]],[11,"start",E,"Start kubernix by consuming the provided configuration",1,[[[R[4]]],[R[3]]]],[11,"new_shell",E,"Spawn a new shell into the provided configuration…",1,[[[R[4]]],[R[3]]]],[11,"from",E,E,0,[[[T]],[T]]],[11,"to_owned",E,E,0,[[["self"]],[T]]],[11,"clone_into",E,E,0,[[["self"],[T]]]],[11,"into",E,E,0,[[],[U]]],[11,R[6],E,E,0,[[[U]],[R[5]]]],[11,R[7],E,E,0,[[],[R[5]]]],[11,R[8],E,E,0,[[["self"]],[T]]],[11,R[9],E,E,0,[[["self"]],[T]]],[11,"type_id",E,E,0,[[["self"]],["typeid"]]],[11,"vzip",E,E,0,[[],["v"]]],[11,"from",E,E,1,[[[T]],[T]]],[11,"into",E,E,1,[[],[U]]],[11,R[6],E,E,1,[[[U]],[R[5]]]],[11,R[7],E,E,1,[[],[R[5]]]],[11,R[8],E,E,1,[[["self"]],[T]]],[11,R[9],E,E,1,[[["self"]],[T]]],[11,"type_id",E,E,1,[[["self"]],["typeid"]]],[11,"vzip",E,E,1,[[],["v"]]],[11,"from",E,E,0,[[[R[10]]],["self"]]],[11,"default",E,E,0,[[],["self"]]],[11,"drop",E,E,1,[[["self"]]]],[11,"into",E,E,0,[[],["app"]]],[11,"clone",E,E,0,[[["self"]],[R[4]]]],[11,"fmt",E,E,0,[[["self"],["formatter"]],[R[5]]]],[11,"deserialize",E,E,0,[[["__d"]],[R[5]]]],[11,"serialize",E,E,0,[[["self"],["__s"]],[R[5]]]],[11,"from_argmatches",E,E,0,[[[R[10]]],["self"]]],[11,"into_app",E,E,0,[[],["app"]]]],"p":[[3,"Config"],[3,R[11]]]};
initSearch(searchIndex);addSearchOptions(searchIndex);