import { ButtonLink } from "./button-link";


export default {
    title: "Компоненты/ButtonLink",
    component: ButtonLink,
    layout: "centered",
    parameters: {
        status: {
            // 'beta' | 'stable' | 'deprecated' | 'releaseCandidate'
            type: "stable"
        },
       
    },
     tags: ['autodocs']
}



export const ButtonLink = {
    args: {
        appearance: "primary",
        size: "medium",
        text: "Hello Button-Link",
    }
}


