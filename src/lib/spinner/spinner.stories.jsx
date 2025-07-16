import { Spinner } from "./spinner";


export default {
    title: "Компоненты/Spinner",
    component: Spinner,
    layout: "centered",
    parameters: {
        status: {
            // 'beta' | 'stable' | 'deprecated' | 'releaseCandidate'
            type: "stable"
        },
       
    },
     tags: ['autodocs']
}

export const Primary = {
    args: {
        appearance: "primary",
        size: "base",
    }
}