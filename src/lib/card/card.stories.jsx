import { Card } from "./card";


export default {
    title: "Компоненты/Card",
    component: Card,
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
       
    }
}

export const Secondary = {
    args: {
        appearance: "secondary",
       
    }
}