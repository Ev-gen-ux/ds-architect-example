import { DefaultTheme } from "styled-components";
import { colors } from "./tokens";


export const lightTheme: DefaultTheme = {
    colors: {
        bg: {
            global: {
                calm: colors.white,
            },

            body: {
                calm: colors.white,
            },
            section: {
                calm: colors.neutral[100],
                calmest: colors.white,
            },
            subSection: {
                calm: colors.white,
            },
            container: {
                calmest: colors.neutral[25],
            },
            benefitCard: {
                calm: colors.white,
            },
            sideBar: {
                calmest: colors.white,
            },
            footer: {
                calm: colors.blue[50],
            },
        },
        border: {
            subSection: {
                calm: colors.neutral[100],
            }
        },
        text: {
            base: colors.neutral[800],
            secondary: colors.neutral[400],
        },
        icon: {
            base: {
                calmest: colors.neutral[50],
            },
            secondary: {
                calm: colors.neutral[300],
                loud: colors.neutral[400],
            },

        },
    },

};

    export const darkTheme: DefaultTheme = {
        ...lightTheme,
        colors: {
            bg: {
                global: {
                    calm: colors.black[900],
                },

                body: {
                    calm: colors.blue[800],
                },
                section: {
                    calm: colors.blue[900],
                    calmest: colors.blue[800],
                },
                subSection: {
                    calm: colors.blue[800],
                },
                container: {
                    calmest: colors.blue[900],
                },
                benefitCard: {
                    calm: colors.blue[800],
                },
                sideBar: {
                    calmest: colors.blue[800],
                },
                footer: {
                    calm: colors.blue[800],
                },
            },

            border: {
                subSection: {
                    calm: colors.neutral[100],
                },
            },
            text: {
                base: colors.neutral[50],
                secondary: colors.neutral[200],
            },
            icon: {
                base: {
                    calmest: colors.neutral[50],
                },
                secondary: {
                    calm: colors.neutral[300],
                    loud: colors.neutral[300],
                },
            },
        },
    };