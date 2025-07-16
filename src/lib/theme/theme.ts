import { DefaultTheme } from "styled-components";
import { colors, spacers, typography, zIndices } from "./tokens";


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
                calmest: colors.neutral[25],
            },
            container: {
                calmest: colors.neutral[25],
            },
            benefitCard: {
                calmest: colors.white,
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
            },
        },

        text: {
            base: colors.neutral[700],
            secondary: colors.neutral[400],
            default: colors.neutral[400],
            successe: colors.green[500],
            error: colors.red[500],
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

        avatar: {
            backgroun: {
                enabled: colors.white,
                hover: colors.neutral[25],
                active: colors.neutral[50],
            },
            border: {
                default: colors.neutral[200],
            },

            label: {
                default: colors.neutral[700],
                hover: colors.neutral[700],
                active: colors.neutral[700],
            },
            statusMark: {
                background: {
                    online: colors.green[300],
                },
                border: {
                    calm: colors.white,
                }
            },
        },

        button: {
            primary: {
                background: {
                    enabled: colors.blue[500],
                    hover: colors.blue[600],
                    active: colors.blue[700],
                    disabled: colors.neutral[100],
                },

                label: {
                    enabled: colors.neutral[50],
                    disabled: colors.neutral[300],
                },

                border: {
                    focus: colors.blue[200],
                    disabled: colors.neutral[100],
                },

                icon: {
                    enabled: colors.neutral[50],
                    disabled: colors.neutral[300],
                },
            },

            outline: {
                background: {
                    hover: colors.neutral[50],
                    active: colors.neutral[100],
                },
                label: {
                    enabled: colors.neutral[700],
                    disabled: colors.neutral[300],
                },
                border: {
                    enabled: colors.neutral[400],
                    focus: colors.blue[200],
                    disabled: colors.neutral[100],
                },
                icon: {
                    enabled: colors.neutral[400],
                    disabled: colors.neutral[300],
                },
            },

            flat: {
                background: {
                    hover: colors.neutral[50],
                    active: colors.neutral[100],
                },
                label: {
                    enabled: colors.neutral[700],
                    disabled: colors.neutral[300],
                },
                border: {
                    focus: colors.blue[200],
                },
                icon: {
                    enabled: colors.neutral[400],
                    disabled: colors.neutral[300],
                },
            },

            icon: {
                primary: {
                    background: {
                        enabled: colors.blue[50],
                        hover: colors.blue[100],
                        active: colors.blue[200],
                    },
                    border: {
                        focus: colors.blue[200],
                    },
                    icon: {
                        enabled: colors.blue[500],
                        disabled: colors.neutral[300],
                    },
                },
                secondary: {
                    background: {
                        hover: colors.neutral[50],
                        active: colors.neutral[100],
                    },
                    border: {
                        focus: colors.blue[200],
                    },
                    icon: {
                        enabled: colors.neutral[400],
                        disabled: colors.neutral[300],
                    },
                },
            },

        },



        linkButton: {

            primary: {
                label: {
                    enabled: colors.blue[500],
                    hover: colors.blue[600],
                    active: colors.blue[700],
                    focus: colors.blue[500],
                    disabled: colors.neutral[300],
                },
                icon: {
                    enabled: colors.blue[500],
                    hover: colors.blue[600],
                    active: colors.blue[700],
                    focus: colors.blue[500],
                    disabled: colors.neutral[300],
                },
            },

            inverted: {
                label: {
                    enabled: colors.blue[300],
                    hover: colors.blue[200],
                    active: colors.blue[100],
                    focus: colors.blue[300],
                    disabled: colors.neutral[300],
                },
                icon: {
                    enabled: colors.blue[300],
                    hover: colors.blue[200],
                    active: colors.blue[100],
                    focus: colors.blue[300],
                    disabled: colors.neutral[300],
                },
            },
        },

        toggleButton: {
            primary: {
                background: {
                    enabled: colors.white,
                    hover: colors.neutral[25],
                    active: colors.neutral[50],
                    disabled: colors.neutral[100],
                },
                border: {
                    enabled: colors.neutral[200],
                    disabled: colors.neutral[100],
                },
                label: {
                    enabled: colors.neutral[700],
                    disabled: colors.neutral[300],
                },
                icon: {
                    disabled: colors.neutral[300],
                },
            },
            secondary: {
                background: {
                    enabled: colors.white,
                    hover: colors.neutral[25],
                    active: colors.neutral[25],
                    disabled: colors.neutral[100],
                },
                border: {
                    enabled: colors.neutral[200],
                    disabled: colors.neutral[100],
                },

                icon: {
                    disabled: colors.neutral[300],
                },
            },
        },

        splitButton: {
            primary: {
                button: {
                    background: {
                        enabled: colors.blue[500],
                        hover: colors.blue[600],
                        active: colors.blue[700],
                    },
                    label: {
                        enabled: colors.neutral[50],
                        disabled: colors.neutral[300],
                    },
                    border: {
                        disabled: colors.neutral[100],
                    },
                    icon: {
                        enabled: colors.neutral[50],
                        disabled: colors.neutral[300],
                    },
                },
                split: {
                    background: {
                        enabled: colors.blue[500],
                        hover: colors.blue[600],
                        active: colors.blue[700],
                    },
                    label: {
                        enabled: colors.neutral[50],
                        disabled: colors.neutral[300],
                    },
                    border: {
                        enabled: colors.neutral[100],
                        disabled: colors.neutral[300],
                    },
                    icon: {
                        enabled: colors.neutral[50],
                        disabled: colors.neutral[300],
                    },
                },
            },


            secondary: {
                button: {
                    background: {
                        enabled: colors.white,
                        hover: colors.neutral[25],
                        active: colors.neutral[50],
                    },
                    label: {
                        enabled: colors.neutral[700],
                        disabled: colors.neutral[300],
                    },
                    border: {
                        enabled: colors.neutral[200],
                        disabled: colors.neutral[100],
                    },
                    icon: {
                        enabled: colors.neutral[700],
                        disabled: colors.neutral[300],
                    },
                },
                split: {
                    background: {
                        enabled: colors.white,
                        hover: colors.neutral[25],
                        active: colors.neutral[50],
                    },
                    label: {
                        enabled: colors.neutral[50],
                        disabled: colors.neutral[300],
                    },
                    border: {
                        enabled: colors.neutral[200],
                        disabled: colors.neutral[100],
                    },
                    icon: {
                        enabled: colors.neutral[700],
                        disabled: colors.neutral[300],
                    },
                },
            },

        },

        input: {
            background: {
                enabled: colors.neutral[25],
                disabled: colors.white,
            },
            label: {
                enabled: colors.neutral[700],
                disabled: colors.neutral[300],
                readOnly: colors.neutral[400],
            },
            required: {
                enabled: colors.red[500],
            },

            border: {
                enabled: colors.neutral[300],
                hover: colors.blue[400],
                focus: colors.blue[500],
                success: colors.green[500],
                error: colors.red[500],
                disabled: colors.neutral[100],
            },
            icon: {
                enabled: colors.neutral[300],
            },
            textPlaceholder: {
                enabled: colors.neutral[300],
                disabled: colors.neutral[200],
            },
            textPlaceholderValue: {
                enabled: colors.neutral[800],
            },

            inlineMessage: {
                default: colors.neutral[400],
                error: colors.red[500],
            },

            cursor: {
                enabled: colors.neutral[400],
            },
        },

        checkbox: {
            background: {
                enabled: colors.white,
                checked: colors.blue[500],
                error: colors.red[500],
                disabled: colors.neutral[100],
            },
            border: {
                enabled: colors.neutral[300],
                error: colors.red[500],
            },
            controlMark: {
                enabled: colors.neutral[50],
                disabled: colors.neutral[300],
            },
        },

        radioButton: {
            background: {
                enabled: colors.white,
                checked: colors.blue[500],
                error: colors.red[500],
                disabled: colors.neutral[100],
            },
            border: {
                enabled: colors.neutral[300],
                error: colors.red[500],
            },
            controlMark: {
                enabled: colors.neutral[50],
                disabled: colors.neutral[300],
            },
        },

        link: {
            bakcground: {
                calm: {
                    enabled: colors.blue[50],
                },
            },
            label: {
                loud: {
                    enabled: colors.blue[400],
                    hover: colors.blue[500],
                    active: colors.blue[600],
                },
            },
        },

        label: {

            successe: {
                background: {
                    successe: colors.green[50],
                },
                border: {
                    successe: colors.green[500],
                },
                label: {
                    successe: colors.green[500],
                },
                icon: {
                    successe: colors.green[500],
                },
            },

            information: {
                background: {
                    information: colors.blue[50],
                },
                border: {
                    information: colors.blue[500],
                },
                label: {
                    information: colors.blue[500],
                },
                icon: {
                    information: colors.blue[500],
                },
            },

            alert: {
                background: {
                    alert: colors.yellow[50],
                },
                border: {
                    alert: colors.yellow[500],
                },
                label: {
                    alert: colors.yellow[500],

                },

                icon: {
                    alert: colors.yellow[500],
                },

            },

            wait: {
                background: {
                    wait: colors.neutral[50],
                },
                border: {
                    wait: colors.neutral[500],
                },
                label: {
                    wait: colors.neutral[500],
                },
                icon: {
                    wait: colors.neutral[500],
                },


            },

            error: {
                background: {
                    error: colors.red[50],
                },
                border: {
                    error: colors.red[500],
                },
                label: {
                    error: colors.red[500],
                },
                icon: {
                    error: colors.red[500],
                },
            },

        },
        spinner: {
            border: {
                primary: colors.black,
            },
        },

        inlineMessage: {
            status: {
                default: colors.neutral[400],
                successe: colors.green[400],
                error: colors.red[400],
            },
        },
    },



    spacing: {

        inner: {
            noGap: spacers[0],
            xsClosest: spacers[1],
            closest: spacers[2],
            close: spacers[4],
            related: spacers[8],
            grouped: spacers[16],
        },

        outer: {
            close: spacers[8],
            related: spacers[16],
            grouped: spacers[24],
            subSection: spacers[48],
            section: spacers[56],
        },

        paddings: {
            xxsCompact: spacers[2],
            xsCompact: spacers[6],
            compact: spacers[8],
            compactMedium: spacers[12],
            default: spacers[16],
            medium: spacers[20],
            relaxed: spacers[24],
            large: spacers[32],
            section: spacers[48],
        },



        height: {
            xSmall: spacers[4],
            small: spacers[32],
            base: spacers[40],
            large: spacers[48],
            xLarge: spacers[56],
            xxLarge: spacers[64],
        },

        grid: {
            columnGap: spacers[16],
            rowGap: spacers[16],
            columnCount: spacers[12],
        },

    },

    shadows: {

        soft: {
            medium: `0px 4px 16px rgba(18, 20, 22, 0.08)`,
        },

        overlay: {
            medium: `0px 4px 16px rgba(18, 20, 22, 0.25)`,
            elevated: `0px 2px 6px rgba(18, 20, 22, 0.12)`,
            content: ` 0px 2px 4px rgba(18, 20, 22, 0.16)`,
            tooltip: ` 0px 2px 8px rgba(18, 20, 22, 0.12)`,
            drawer: `0px 4px 16px rgba(18, 20, 22, 0.25)`,
            modal: `0px 2px 24px rgba(18, 20, 22, 0.16)`,
            notifications: `0px 2px 24px rgba(18, 20, 22, 0.2)`,
        },
    },

    typography: {

        fontFamily: {
            base: `"Inter", -apple-system, BlinkMacSystemFont, 'Segoe UI', Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol'`,
            heading: `"Inter", -apple-system, BlinkMacSystemFont, 'Segoe UI', Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol'`,
            monospace: `'SFMono-Medium', 'SF Mono', 'Segoe UI Mono', 'Roboto Mono', 'Ubuntu Mono', Menlo, Consolas, Courier, monospace`,
            component: `'SFMono-Medium', 'SF Mono', 'Segoe UI Mono', 'Roboto Mono', 'Ubuntu Mono', Menlo, Consolas, Courier, monospace`,
            text: `'SFMono-Medium', 'SF Mono', 'Segoe UI Mono', 'Roboto Mono', 'Ubuntu Mono', Menlo, Consolas, Courier, monospace`,
        },

        fontSize: {
            heading: {
                h1: typography.fontSize.h1,
                h2: typography.fontSize.h2,
                h3: typography.fontSize.h3,
                h4: typography.fontSize.h4,
                h5: typography.fontSize.h5,
                h6: typography.fontSize.h6,
            },

            text: {
                base: typography.fontSize.base,
                small: typography.fontSize.small,
                extraSmall: typography.fontSize.extraSmall,
            },

            component: {
                base: typography.fontSize.base,
                small: typography.fontSize.small,
                extraSmall: typography.fontSize.extraSmall,
            },

            monospace: {
                base: typography.fontSize.base,
            },

        },

        fontWeight: {
            regular: typography.fontWeight.regular,
            medium: typography.fontWeight.medium,
            semiBold: typography.fontWeight.semiBold,
        },


        lineHeight: {
            heading: {
                h1: typography.lineHeight.h1,
                h2: typography.lineHeight.h2,
                h3: typography.lineHeight.h3,
                h4: typography.lineHeight.h4,
                h5: typography.lineHeight.h5,
                h6: typography.lineHeight.h6,
            },

            text: {
                base: typography.lineHeight.base,
                small: typography.lineHeight.small,
                extraSmall: typography.lineHeight.extraSmall,
            },

            component: {
                base: typography.lineHeight.base,
                small: typography.lineHeight.small,
                extraSmall: typography.lineHeight.extraSmall,
            },

            monospace: {
                base: typography.lineHeight.base,
            }

        },

    },


    borderRadius: {
        componentInner: spacers[4],
        componentBase: spacers[8],
        sectionInner: spacers[12],
        containerBase: spacers[16],
        sectionBase: spacers[24],
        rounded: spacers[999],
    },

    zIndex: {
        softMedium: zIndices.softMedium,
        surfaceElevated: zIndices.surfaceElevated,
        overlayContent: zIndices.overlayContent,
        overlayTooltip: zIndices.overlayTooltip,
        overlayDragged: zIndices.surfaceDragged,
        overlayModal: zIndices.overlayModal,
        overlayNotifications: zIndices.overlayNotification,

    },


    focus: `0px 0px 0px 2px rgba(157, 195, 234, 1)`,


    animation: {
        base: `0.2s ease-in-out`,
    },


};

export const darkTheme: DefaultTheme = {
    ...lightTheme,
    colors: {
        bg: {
            global: {
                calm: colors.blue[900],
            },
            body: {
                calm: colors.blue[800],
            },
            section: {
                calm: colors.blue[900],
                calmest: colors.blue[800],
            },
            subSection: {
                calmest: colors.blue[800],
            },
            container: {
                calmest: colors.blue[900],
            },
            benefitCard: {
                calmest: colors.blue[800],
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
                calm: colors.neutral[600],
            },
        },

        text: {
            base: colors.neutral[50],
            secondary: colors.neutral[200],
            default: colors.neutral[300],
            successe: colors.green[300],
            error: colors.red[300],
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

        avatar: {
            backgroun: {
                enabled: colors.neutral[800],
                hover: colors.neutral[700],
                active: colors.neutral[600],
            },
            border: {
                default: colors.blue[500],
            },

            label: {
                default: colors.blue[300],
                hover: colors.blue[300],
                active: colors.blue[300],
            },
            statusMark: {
                background: {
                    online: colors.blue[300],
                },
                border: {
                    calm: colors.blue[800],
                }
            },
        },

        button: {
            primary: {
                background: {
                    enabled: colors.blue[500],
                    hover: colors.blue[600],
                    active: colors.blue[700],
                    disabled: colors.neutral[100],
                },

                label: {
                    enabled: colors.neutral[50],
                    disabled: colors.neutral[300],
                },

                border: {
                    focus: colors.blue[200],
                    disabled: colors.neutral[300],
                },

                icon: {
                    enabled: colors.neutral[50],
                    disabled: colors.neutral[300],
                },
            },

            outline: {
                background: {
                    hover: colors.neutral[600],
                    active: colors.neutral[700],
                },
                label: {
                    enabled: colors.neutral[50],
                    disabled: colors.neutral[300],
                },
                border: {
                    enabled: colors.neutral[400],
                    focus: colors.blue[200],
                    disabled: colors.neutral[100],
                },
                icon: {
                    enabled: colors.neutral[200],
                    disabled: colors.neutral[400],
                },
            },

            flat: {
                background: {
                    hover: colors.neutral[500],
                    active: colors.neutral[700],
                },
                label: {
                    enabled: colors.neutral[50],
                    disabled: colors.neutral[300],
                },
                border: {
                    focus: colors.blue[200],
                },
                icon: {
                    enabled: colors.neutral[200],
                    disabled: colors.neutral[400],
                },
            },

            icon: {
                primary: {
                    background: {
                        enabled: colors.blue[500],
                        hover: colors.blue[600],
                        active: colors.blue[700],
                    },
                    border: {
                        focus: colors.blue[200],
                    },
                    icon: {
                        enabled: colors.neutral[50],
                        disabled: colors.neutral[400],
                    },
                },
                secondary: {
                    background: {
                        hover: colors.neutral[600],
                        active: colors.neutral[700],
                    },
                    border: {
                        focus: colors.blue[200],
                    },
                    icon: {
                        enabled: colors.neutral[200],
                        disabled: colors.neutral[400],
                    },
                },
            },

        },



        linkButton: {

            primary: {
                label: {
                    enabled: colors.blue[300],
                    hover: colors.blue[400],
                    active: colors.blue[500],
                    focus: colors.blue[300],
                    disabled: colors.neutral[300],
                },
                icon: {
                    enabled: colors.blue[300],
                    hover: colors.blue[400],
                    active: colors.blue[500],
                    focus: colors.blue[300],
                    disabled: colors.neutral[300],
                },
            },

            inverted: {
                label: {
                    enabled: colors.neutral[100],
                    hover: colors.neutral[200],
                    active: colors.neutral[300],
                    focus: colors.neutral[100],
                    disabled: colors.neutral[300],
                },
                icon: {
                    enabled: colors.neutral[100],
                    hover: colors.neutral[200],
                    active: colors.neutral[300],
                    focus: colors.neutral[100],
                    disabled: colors.neutral[300],
                },
            },
        },

        toggleButton: {
            primary: {
                background: {
                    enabled: colors.neutral[800],
                    hover: colors.neutral[700],
                    active: colors.neutral[600],
                    disabled: colors.neutral[800],
                },
                border: {
                    enabled: colors.neutral[400],
                    disabled: colors.neutral[500],
                },
                label: {
                    enabled: colors.neutral[100],
                    disabled: colors.neutral[300],
                },
                icon: {
                    disabled: colors.neutral[300],
                },
            },
            secondary: {
                background: {
                    enabled: colors.neutral[800],
                    hover: colors.neutral[700],
                    active: colors.neutral[600],
                    disabled: colors.neutral[800],
                },
                border: {
                    enabled: colors.neutral[400],
                    disabled: colors.neutral[500],
                },

                icon: {
                    disabled: colors.neutral[300],
                },
            },
        },

        splitButton: {
            primary: {
                button: {
                    background: {
                        enabled: colors.blue[500],
                        hover: colors.blue[600],
                        active: colors.blue[700],
                    },
                    label: {
                        enabled: colors.neutral[50],
                        disabled: colors.neutral[300],
                    },
                    border: {
                        disabled: colors.neutral[500],
                    },
                    icon: {
                        enabled: colors.neutral[50],
                        disabled: colors.neutral[300],
                    },
                },
                split: {
                    background: {
                        enabled: colors.blue[500],
                        hover: colors.blue[600],
                        active: colors.blue[700],
                    },
                    label: {
                        enabled: colors.neutral[50],
                        disabled: colors.neutral[300],
                    },
                    border: {
                        enabled: colors.neutral[400],
                        disabled: colors.neutral[500],
                    },
                    icon: {
                        enabled: colors.neutral[50],
                        disabled: colors.neutral[300],
                    },
                },
            },


            secondary: {
                button: {
                    background: {
                        enabled: colors.neutral[800],
                        hover: colors.neutral[700],
                        active: colors.neutral[600],
                    },
                    label: {
                        enabled: colors.neutral[100],
                        disabled: colors.neutral[300],
                    },
                    border: {
                        enabled: colors.neutral[400],
                        disabled: colors.neutral[500],
                    },
                    icon: {
                        enabled: colors.neutral[700],
                        disabled: colors.neutral[300],
                    },
                },
                split: {
                    background: {
                        enabled: colors.neutral[800],
                        hover: colors.neutral[700],
                        active: colors.neutral[600],
                    },
                    label: {
                        enabled: colors.neutral[50],
                        disabled: colors.neutral[300],
                    },
                    border: {
                        enabled: colors.neutral[400],
                        disabled: colors.neutral[500],
                    },
                    icon: {
                        enabled: colors.neutral[100],
                        disabled: colors.neutral[300],
                    },
                },
            },

        },

        input: {
            background: {
                enabled: colors.neutral[800],
                disabled: colors.neutral[800],
            },
            label: {
                enabled: colors.neutral[300],
                disabled: colors.neutral[400],
                readOnly: colors.neutral[200],
            },
            required: {
                enabled: colors.red[300],
            },

            border: {
                enabled: colors.neutral[400],
                hover: colors.blue[400],
                focus: colors.blue[300],
                success: colors.green[300],
                error: colors.red[300],
                disabled: colors.neutral[600],
            },
            icon: {
                enabled: colors.neutral[300],
            },
            textPlaceholder: {
                enabled: colors.neutral[400],
                disabled: colors.neutral[400],
            },
            textPlaceholderValue: {
                enabled: colors.neutral[100],
            },

            inlineMessage: {
                default: colors.neutral[300],
                error: colors.red[300],
            },

            cursor: {
                enabled: colors.neutral[400],
            },
        },

        checkbox: {
            background: {
                enabled: colors.neutral[700],
                checked: colors.blue[500],
                error: colors.red[500],
                disabled: colors.neutral[700],
            },
            border: {
                enabled: colors.blue[500],
                error: colors.red[500],
            },
            controlMark: {
                enabled: colors.neutral[50],
                disabled: colors.neutral[400],
            },
        },

        radioButton: {
            background: {
                enabled: colors.neutral[700],
                checked: colors.blue[500],
                error: colors.red[500],
                disabled: colors.neutral[700],
            },
            border: {
                enabled: colors.blue[500],
                error: colors.red[500],
            },
            controlMark: {
                enabled: colors.neutral[50],
                disabled: colors.neutral[400],
            },
        },


        link: {
            bakcground: {
                calm: {
                    enabled: colors.blue[50],
                },
            },
            label: {
                loud: {
                    enabled: colors.blue[200],
                    hover: colors.blue[100],
                    active: colors.blue[50],
                },
            },
        },

        label: {

            successe: {
                background: {
                    successe: colors.green[800],
                },
                border: {
                    successe: colors.green[500],
                },
                label: {
                    successe: colors.neutral[50],
                },
                icon: {
                    successe: colors.neutral[200],
                },
            },

            information: {
                background: {
                    information: colors.blue[800],
                },
                border: {
                    information: colors.blue[500],
                },
                label: {
                    information: colors.neutral[50],
                },
                icon: {
                    information: colors.neutral[200],
                },
            },

            alert: {
                background: {
                    alert: colors.yellow[800],
                },
                border: {
                    alert: colors.yellow[500],
                },
                label: {
                    alert: colors.neutral[50],

                },

                icon: {
                    alert: colors.neutral[200],
                },

            },

            wait: {
                background: {
                    wait: colors.neutral[800],
                },
                border: {
                    wait: colors.neutral[500],
                },
                label: {
                    wait: colors.neutral[50],
                },
                icon: {
                    wait: colors.neutral[200],
                },


            },

            error: {
                background: {
                    error: colors.red[800],
                },
                border: {
                    error: colors.red[500],
                },
                label: {
                    error: colors.neutral[50],
                },
                icon: {
                    error: colors.neutral[200],
                },
            },

        },

        spinner: {
            border: {
                primary: colors.black,
            },
        },

        inlineMessage: {
            status: {
                default: colors.neutral[300],
                successe: colors.green[300],
                error: colors.red[300],
            },
        },

    },



};