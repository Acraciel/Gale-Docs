angular.module("config", [])
    .constant("GLOBAL_CONFIGURATION", {

        //Application data
        application: {
            version: "2.1.1",
            author: "David Antonio Muñoz Gaete",
            environment: "development",
            language: "es",
            name: "Gale Doc's",
            home: "/demo/api/models/example"
        },

        //CLEAN STEP WHEN A NEW VERSION IS UPDATE!
        on_build_new_version: function(new_version, old_version) {},

        menu: [

            //Gettting Started
            {
                label: "Primeros Pasos",
                name: "gettingStarted",
                open: true,
                items: [
                    {
                        label: "Introducción",
                        name: "introduction"
                    },

                    {
                        label: "Instalación",
                        name: "installation"
                    }
                ]
            },

            //UX References
            {
                label: "Interfaz Gráfica",
                name: "UX",
                items: [
                    {
                        label: "Servicios",
                        name: "services",
                        items: [

                            { name: "$Configuration" },
                            { name: "$Localization" },
                            { name: "$Api" },
                            { name: "$LocalStorage" },
                            { name: "$Timer" },
                            { name: "KQLBuilder" }

                        ]
                    }, 

                    {
                        label: "Componentes",
                        name: "components",
                        items: [

                            { name: "gale-finder" },
                            { name: "gale-loading" },
                            { name: "gale-page" },
                            { name: "gale-table" }

                        ]
                    }, 

                    {
                        label: "Filtros",
                        name: "filters",
                        items: [

                            { name: "capitalize" },
                            { name: "localize" },
                            { name: "template" }

                        ]
                    }, 

                    {
                        label: "Directivas",
                        name: "directives",
                        items: [

                            { name: "ngRange" },
                            { name: "ngRut" },
                            { name: "ngEmail" },
                            { name: "selectTextOnClick" },
                            { name: "toNumbeOnBlur" }

                        ]
                    }   
                ]
            },

            //Server References
            {
                label: "API",
                name: "api",
                items: [
                    {
                        label: "Controladores",
                        name: "controllers",
                        items: [
                            { name: "RestController" },
                            { name: "QueryableController" }
                        ]
                    },

                    {
                        label: "Modelos",
                        name: "models",
                        items: [
                            { name: "definition", label:"Definición" },
                            { name: "example", label:"Ejemplo de Creación" }
                        ]
                    },

                    {
                        label: "Servicios",
                        name: "services",
                        items: [
                            { name: "Definición" },
                            { name: "Utilización" }
                        ]
                    },

                    {
                        label: "Respuestas HTTP",
                        name: "services",
                        items: [
                            { name: "HttpActionResult" },
                            { name: "HttpCreationActionResult" },
                            { name: "HttpUpdateActionResult" },
                            { name: "HttpReadActionResult" },
                            { name: "HttpDeleteActionResult" },
                            { name: "HttpQueryableActionResult" }
                        ]
                    },

                    {
                        label: "Seguridad",
                        name: "security",
                        items: [
                            { name: "Autorización JWT" },
                            { name: "OAuth 2.0" }
                        ]
                    },

                    {
                        label: "Base de Datos",
                        name: "database",
                        items: [
                            { name: "Modelos" },
                            { name: "Esquemas" }
                        ]
                    },

                    {
                        label: "Ambientes",
                        name: "staging",
                        items: [
                            { name: "Introduction" },
                            { name: "Deployment" },
                            { name: "Production" }
                        ]
                    }
                ]
            }
        ]
    });
