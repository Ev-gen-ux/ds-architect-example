import { DefaultTheme } from "styled-components";
import { colors } from "./tokens";


export const lightTheme: DefaultTheme = {
      colors: {
        bg:{
            global: {
               calm: colors.white,
            },
         },
        text: {
            base: colors.neutral[800],
        },
      },
};


export const darkTheme: DefaultTheme = {
    ...lightTheme,
    colors: {
        bg:{
            global: {
               calm: colors.blue[900],
            },
         },
       text: {
           base: colors.neutral[50],
       },
    },
};