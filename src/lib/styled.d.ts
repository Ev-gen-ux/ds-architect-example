import "styled-components";

declare module "styled-components" {
    export interface DefaultTheme {
        colors: {
            bg: {

                global: {
                    calm: string;
                },
                body: {
                    calm: string;
                },
                section: {
                    calm: string;
                    calmest: string;
                },
                subSection: {
                    calm: string;
                },
                container: {
                    calmest: string;
                },
                benefitCard: {
                    calm: string;
                },
                sideBar: {
                    calmest: string;
                },
                footer: {
                    calm: string;
                },
            },

            border: {
                subSection: {
                    calm: string;
                },
            },

            text: {
                base: string;
                secondary: string;
            },

            icon: {
                base: {
                    calmest: string;
                },
                secondary: {
                    calm: string;
                    loud: string;
                },
            },

            link: {
                bakcground: {
                    calm: {
                        enabled: string;
                    },
                },
                label: {
                    loud: {
                        enabled: string;
                        hover: string;
                        active: string;
                    },
                },
            },

        },



        //typography: {}
        //spacing: {},
        //borderRadius: {},




    },
},