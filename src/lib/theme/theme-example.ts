import { Icon } from "../icon";
import { colors, spacers } from "./tokens";

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

	typography: {},

	cornerRadius: {
		componentInner: spacers[4],
		componentBase: spacers[8],
		sectionInner: spacers[12],
		containerBase: spacers[16],
		sectionBase: spacers[24],
		rounded: spacers[999],
	},

	zIndices: {},

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
	},

};
