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
				calme: colors.white,
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
				calm: colors.neutral[50],
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
			large: spacers[40],
			xLarge: spacers[56],
		},

		grid: {
			columnGap: spacers[16],
			rowGap: spacers[16],
			columnCount: spacers[12],
		},

	},

	shadows: {},

	typography: {

		heading: {
			h1: {
				fontFamily: typography.fontFamily.heading,
				fontSize: typography.fontSize.h1,
				lineHeight: typography.lineHeight.h1,
				fontWeight: typography.fontWeight.semiBold,
			},
			h2: {
				fontFamily: typography.fontFamily.heading,
				fontSize: typography.fontSize.h2,
				lineHeight: typography.lineHeight.h2,
				fontWeight: typography.fontWeight.semiBold,
			},
			h3: {
				fontFamily: typography.fontFamily.heading,
				fontSize: typography.fontSize.h3,
				lineHeight: typography.lineHeight.h3,
				fontWeight: typography.fontWeight.semiBold,
			},
			h4: {
				fontFamily: typography.fontFamily.heading,
				fontSize: typography.fontSize.h4,
				lineHeight: typography.lineHeight.h4,
				fontWeight: typography.fontWeight.semiBold,
			},
			h5: {
				fontFamily: typography.fontFamily.heading,
				fontSize: typography.fontSize.h5,
				lineHeight: typography.lineHeight.h5,
				fontWeight: typography.fontWeight.semiBold,
			},
			h6: {
				fontFamily: typography.fontFamily.heading,
				fontSize: typography.fontSize.h6,
				lineHeight: typography.lineHeight.h6,
				fontWeight: typography.fontWeight.semiBold,
			},
		},



		text: {

			base: {
				medium: {
					fontFamily: typography.fontFamily.base,
					fontSize: typography.fontSize.base,
					lineHeight: typography.lineHeight.base,
					fontWeight: typography.fontWeight.medium,
				},

				regular: {
					fontFamily: typography.fontFamily.base,
					fontSize: typography.fontSize.base,
					lineHeight: typography.lineHeight.base,
					fontWeight: typography.fontWeight.regular,
				},
			},

			small: {
				medium: {
					fontFamily: typography.fontFamily.base,
					fontSize: typography.fontSize.small,
					lineHeight: typography.lineHeight.base,
					fontWeight: typography.fontWeight.medium,
				},

				regular: {
					fontFamily: typography.fontFamily.base,
					fontSize: typography.fontSize.small,
					lineHeight: typography.lineHeight.base,
					fontWeight: typography.fontWeight.regular,
				},
			},

			extraSmall: {
				medium: {
					fontFamily: typography.fontFamily.base,
					fontSize: typography.fontSize.extraSmall,
					lineHeight: typography.lineHeight.extraSmall,
					fontWeight: typography.fontWeight.medium,
				},

				regular: {
					fontFamily: typography.fontFamily.base,
					fontSize: typography.fontSize.extraSmall,
					lineHeight: typography.lineHeight.extraSmall,
					fontWeight: typography.fontWeight.regular,
				},
			},

		},

		component: {

			base: {
				semiBold: {
					fontFamily: typography.fontFamily.base,
					fontSize: typography.fontSize.base,
					lineHeight: typography.lineHeight.base,
					fontWeight: typography.fontWeight.semiBold,
				},

				medium: {
					fontFamily: typography.fontFamily.base,
					fontSize: typography.fontSize.base,
					lineHeight: typography.lineHeight.base,
					fontWeight: typography.fontWeight.medium,
				},
			},
		},



		small: {
			semiBold: {
				fontFamily: typography.fontFamily.base,
				fontSize: typography.fontSize.small,
				lineHeight: typography.lineHeight.small,
				fontWeight: typography.fontWeight.semiBold,
			},

			medium: {
				fontFamily: typography.fontFamily.base,
				fontSize: typography.fontSize.small,
				lineHeight: typography.lineHeight.small,
				fontWeight: typography.fontWeight.medium,
			},
		},

		extraSmall: {
			semiBold: {
				fontFamily: typography.fontFamily.base,
				fontSize: typography.fontSize.extraSmall,
				lineHeight: typography.lineHeight.extraSmall,
				fontWeight: typography.fontWeight.semiBold,
			},

			medium: {
				fontFamily: typography.fontFamily.base,
				fontSize: typography.fontSize.extraSmall,
				lineHeight: typography.lineHeight.extraSmall,
				fontWeight: typography.fontWeight.medium,
			},
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
				calme: colors.blue[800],
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
