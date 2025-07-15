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
                    calmest: string;
                },
                container: {
                    calmest: string;
                },
                benefitCard: {
                    calmest: string;
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

            avatar: {
                backgroun: {
                    enabled: string;
                    hover: string;
                    active: string;
                },
                border: {
                    default: string;
                },

                label: {
                    default: string;
                    hover: string;
                    active: string;
                },
                statusMark: {
                    background: {
                        online: string;
                    },
                    border: {
                        calm: string;
                    }
                },
            },

            button: {
                primary: {
                    background: {
                        enabled: string;
                        hover: string;
                        active: string;
                        disabled: string;
                    },

                    label: {
                        enabled: string;
                        disabled: string;
                    },

                    border: {
                        focus: string;
                        disabled: string;
                    },

                    icon: {
                        enabled: string;
                        disabled: string;
                    },
                },

                outline: {
                    background: {
                        hover: string;
                        active: string;
                    },
                    label: {
                        enabled: string;
                        disabled: string;
                    },
                    border: {
                        enabled: string;
                        focus: string;
                        disabled: string;
                    },
                    icon: {
                        enabled: string;
                        disabled: string;
                    },
                },

                flat: {
                    background: {
                        hover: string;
                        active: string;
                    },
                    label: {
                        enabled: string;
                        disabled: string;
                    },
                    border: {
                        focus: string;
                    },
                    icon: {
                        enabled: string;
                        disabled: string;
                    },
                },

                icon: {
                    primary: {
                        background: {
                            enabled: string;
                            hover: string;
                            active: string;
                        },
                        border: {
                            focus: string;
                        },
                        icon: {
                            enabled: string;
                            disabled: string;
                        },
                    },
                    secondary: {
                        background: {
                            hover: string;
                            active: string;
                        },
                        border: {
                            focus: string;
                        },
                        icon: {
                            enabled: string;
                            disabled: string;
                        },
                    },
                },

            },



            linkButton: {

                primary: {
                    label: {
                        enabled: string;
                        hover: string;
                        active: string;
                        focus: string;
                        disabled: string;
                    },
                    icon: {
                        enabled: string;
                        hover: string;
                        active: string;
                        focus: string;
                        disabled: string;
                    },
                },

                inverted: {
                    label: {
                        enabled: string;
                        hover: string;
                        active: string;
                        focus: string;
                        disabled: string;
                    },
                    icon: {
                        enabled: string;
                        hover: string;
                        active: string;
                        focus: string;
                        disabled: string;
                    },
                },
            },

            toggleButton: {
                primary: {
                    background: {
                        enabled: string;
                        hover: string;
                        active: string;
                        disabled: string;
                    },
                    border: {
                        enabled: string;
                        disabled: string;
                    },
                    label: {
                        enabled: string;
                        disabled: string;
                    },
                    icon: {
                        disabled: string;
                    },
                },
                secondary: {
                    background: {
                        enabled: string;
                        hover: string;
                        active: string;
                        disabled: string;
                    },
                    border: {
                        enabled: string;
                        disabled: string;
                    },

                    icon: {
                        disabled: string;
                    },
                },
            },

            splitButton: {
                primary: {
                    button: {
                        background: {
                            enabled: string;
                            hover: string;
                            active: string;
                        },
                        label: {
                            enabled: string;
                            disabled: string;
                        },
                        border: {
                            disabled: string;
                        },
                        icon: {
                            enabled: string;
                            disabled: string;
                        },
                    },
                    split: {
                        background: {
                            enabled: string;
                            hover: string;
                            active: string;
                        },
                        label: {
                            enabled: string;
                            disabled: string;
                        },
                        border: {
                            enabled: string;
                            disabled: string;
                        },
                        icon: {
                            enabled: string;
                            disabled: string;
                        },
                    },
                },


                secondary: {
                    button: {
                        background: {
                            enabled: string;
                            hover: string;
                            active: string;

                        },
                        label: {
                            enabled: string;
                            disabled: string;
                        },
                        border: {
                            enabled: string;
                            disabled: string;
                        },
                        icon: {
                            enabled: string;
                            disabled: string;
                        },
                    },
                    split: {
                        background: {
                            enabled: string;
                            hover: string;
                            active: string;
                        },
                        label: {
                            enabled: string;
                            disabled: string;
                        },
                        border: {
                            enabled: string;
                            disabled: string;
                        },
                        icon: {
                            enabled: string;
                            disabled: string;
                        },
                    },
                },

            },

            input: {
                background: {
                    enabled: string;
                    disabled: string;
                },
                label: {
                    enabled: string;
                    disabled: string;
                    readOnly: string;
                },
                required: {
                    enabled: string;
                },

                border: {
                    enabled: string;
                    hover: string;
                    focus: string;
                    success: string;
                    error: string;
                    disabled: string;
                },
                icon: {
                    enabled: string;
                },
                textPlaceholder: {
                    enabled: string;
                    disabled: string;
                },
                textPlaceholderValue: {
                    enabled: string;
                },

                inlineMessage: {
                    default: string;
                    error: string;
                },

                cursor: {
                    enabled: string;
                },
            },

            checkbox: {
                background: {
                    enabled: string;
                    checked: string;
                    error: string;
                    disabled: string;
                },
                border: {
                    enabled: string;
                    error: string;
                },
                controlMark: {
                    enabled: string;
                    disabled: string;
                },
            },

            radioButton: {
                background: {
                    enabled: string;
                    checked: string;
                    error: string;
                    disabled: string;
                },
                border: {
                    enabled: string;
                    error: string;
                },
                controlMark: {
                    enabled: string;
                    disabled: string;
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

            label: {

                successe: {
                    background: {
                        successe: string,
                    },
                    border: {
                        successe: string,
                    },
                    label: {
                        successe: string,
                    },
                    icon: {
                        successe: string,
                    },
                },

                information: {
                    background: {
                        information: string,
                    },
                    border: {
                        information: string,
                    },
                    label: {
                        information: string,
                    },
                    icon: {
                        information: string,
                    },
                },

                alert: {
                    background: {
                        alert: string,
                    },
                    border: {
                        alert: string,
                    },
                    label: {
                        alert: string,

                    },

                    icon: {
                        alert: string,
                    },

                },

                wait: {
                    background: {
                        wait: string,
                    },
                    border: {
                        wait: string,
                    },
                    label: {
                        wait: string,
                    },
                    icon: {
                        wait: string,
                    },


                },

                error: {
                    background: {
                        error: string,
                    },
                    border: {
                        error: string,
                    },
                    label: {
                        error: string,
                    },
                    icon: {
                        error: string,
                    },
                },

            },
        }

        shadows: {

            soft: {
                medium: string,
            },

            overlay: {
                medium: string,
                elevated: string,
                content: string,
                tooltip: string,
                drawer: string,
                modal: string,
                notifications: string,
            },
        },

        typography: {

            fontFamily: {
                heading: string;
                text: string;
                component: string;
                monospace: string;
                base: string;
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
                    small: string
                    extraSmall: string;
                },

                component: {
                    base: string;
                    small: string
                    extraSmall: string;
                },

                monospace: {
                    base: string;
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
                    small: string;
                    extraSmall: string;
                },

                component: {
                    base: string;
                    small: string;
                    extraSmall: string;
                },

                monospace: {
                    base: string;
                }

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


        zIndex: {
            softMedium: string;
            surfaceElevated: string;
            overlayContent: string;
            overlayTooltip: string;
            overlayDragged: string;
            overlayModal: string;
            overlayNotifications: string;

        },

        focus: string;

        animation: {
            base: string;
        },
    }

}