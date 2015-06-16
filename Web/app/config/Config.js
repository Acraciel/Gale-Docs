angular.module("gale.services.configuration")

.constant("GLOBAL_CONFIGURATION", {

	application: {
		version: "2.0.1",
		author: "David Antonio Muñoz Gaete",
		environment: "qas",
		language: "es",
		name: "Gale Docs"
	},
	
    //CLEAN STEP WHEN A NEW VERSION IS UPDATE!
    on_build_new_version: function(new_version, old_version){
    }
    
});