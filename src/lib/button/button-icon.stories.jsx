import { ButtonIcon } from "./button-icon";


export default {
    title: "Компоненты/ButtonIcon",
    component: ButtonIcon,
    layout: "centered",
    parameters: {
        status: {
            // 'beta' | 'stable' | 'deprecated' | 'releaseCandidate'
            type: "stable"
        },
       
    },
     tags: ['autodocs']
}



export const ButtonIcon = {
    args: {
        appearance: "primary",
        size: "medium",
    }
}
