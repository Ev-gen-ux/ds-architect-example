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



        typography: {

            fontFamily: {
                heading: string;
                text: string;
                component: string;
                monospace: string;
            },

            fontSize: {
                heading: {
                    h1: string;
                    h2: string;
                    h3: string;
                    h4: string;
                    h5: string;
                    h6: string;
                },
                text: {
                    base: string;
                    small: string;
                    extraSmall: string;
                },
                component: {
                    base: string;
                    small: string;
                    extraSmall: string;
                },
            },

            lineHeight: {
                heading: {
                    h1: string;
                    h2: string;
                    h3: string;
                    h4: string;
                    h5: string;
                    h6: string;
                },

                text: {
                    base: string;
                    smass: string;
                    extraSmall: string;
                },

                component: {
                    base: string;
                    smass: string;
                    extraSmall: string;
                },
            },

            fontWeight: {
                regular: string;
                medium: string;
                semiBold: string;
            },

        },

        spacing: {

            inner: {
                noGap: string;
                xsClosest: string;
                closest: string;
                close: string;
                related: string;
                grouped: string;
            },

            outer: {
                close: string;
                related: string;
                grouped: string;
                subSection: string;
                section: string;
            },

            paddings: {
                xxsCompact: string;
                xsCompact: string;
                compact: string;
                compactMedium: string;
                default: string;
                medium: string;
                relaxed: string;
                large: string;
                section: string;
            },

            height: {
                xSmall: string;
                small: string;
                base: string;
                large: string;
                xLarge: string;
                xxLarge: string;
            },

            grid: {
                columnGap: string;
                rowGap: string;
                columnCount: string;
            },

        },

        borderRadius: {
            componentInner: string;
            componentBase: string;
            sectionInner: string;
            containerBase: string;
            sectionBase: string;
            rounded: string;
        },




    },
},