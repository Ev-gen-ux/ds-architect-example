import { Label } from "./label";


export default {
    title: "Компоненты/Label",
    component: Label,
    layout: "centered",
    parameters: {
        status: {
            // 'beta' | 'stable' | 'deprecated' | 'releaseCandidate'
            type: "stable"
        },
       
    },
     tags: ['autodocs']
}

export const Successe = {
    args: {
        appearance: "successe",
        size: "medium",
        text: "Hello Label",
    }
}

export const Information = {
    args: {
        appearance: "information",
        size: "medium",
        text: "Hello Label",
    }
}

export const Alert = {
    args: {
        appearance: "alert",
        size: "medium",
        text: "Hello Label",
    }
}

export const Wait = {
    args: {
        appearance: "wait",
        size: "medium",
        text: "Hello Label",
    }
}

export const Error = {
    args: {
        appearance: "Error",
        size: "medium",
        text: "Hello Label",
    }
}