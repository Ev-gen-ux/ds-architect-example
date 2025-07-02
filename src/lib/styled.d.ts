import "styled-components";

declare module "styled-components" {
        export interface DefaultTheme {
            colors: {
                bg:{
                   global: {
                      calm: string,
                   },
                },

                text: {
                    base: string;
                },
            },
            //typography: {},
            //spacing: {},
            //borderRadius: {},
        }
}