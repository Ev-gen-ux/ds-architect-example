import { error } from "console";
import { Icon } from "../icon";
import { Base } from "../placeholder/placeholder.stories";
import { colors, spacers, typography, zIndices } from "./tokens";

export const lightTheme = {
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

    shadows: {},

    typography: {

        fontFamily: {
            heading: typography.fontFamily.base,
            text: typography.fontFamily.base,
            component: typography.fontFamily.base,
            monospace: typography.fontFamily.monospace
        },

        fontSize: {
            heading: {
                h1: spacers[48],
                h2: spacers[40],
                h3: spacers[32],
                h4: spacers[24],
                h5: spacers[20],
                h6: spacers[16],
            },

            text: {
                base: spacers[16],
                small: spacers[14],
                extraSmall: spacers[12],
            },

            component: {
                base: spacers[16],
                small: spacers[14],
                extraSmall: spacers[12],
            },

            monospace: {
                base: spacers[14],
            },

        },

        fontWeight: {
            regular: typography.fontWeight.regular,
            medium: typography.fontWeight.medium,
            semiBold: typography.fontWeight.semiBold,
        },


        lineHeight: {
            heading: {
                h1: spacers[56],
                h2: spacers[48],
                h3: spacers[40],
                h4: spacers[32],
                h5: spacers[32],
                h6: spacers[24],
            },

            text: {
                base: spacers[24],
                smass: spacers[20],
                extraSmall: spacers[16],
            },

            component: {
                base: spacers[24],
                smass: spacers[20],
                extraSmall: spacers[16],
            },

            monospace: {
                base: spacers[20],
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

        secondary: {
            label: {
                enabled: colors.neutral[700],
                hover: colors.neutral[600],
                active: colors.neutral[500],
                focus: colors.neutral[700],
                disabled: colors.neutral[300],
            },
            icon: {
                enabled: colors.neutral[700],
                hover: colors.neutral[600],
                active: colors.neutral[500],
                focus: colors.neutral[700],
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
                enabled: colors.neutral[700],
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

    animation: {
        base: `0.2s ease-in-out`,
    },


};

export const darkTheme = {
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
        },

        Icon: {
            base: {
                calm: colors.neutral[50],
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

            secondary: {
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
    },

};