import { Icon } from "../icon";
import { colors } from "./tokens";

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

		Icon: {
				base: {
					calm: colors.neutral[50],
				},
				secondary: {
					calm: colors.neutral[300],
					loud: colors.neutral[400],
				},
			},
	},

	spacing: {},

	shadows: {},

	typography: {},

	cornerRadius: {},

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
