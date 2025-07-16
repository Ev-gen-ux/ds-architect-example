import { InlineMessage } from "./inline-message";


export default {
    title: "Компоненты/InlineMessage ",
    component: InlineMessage ,
    layout: "centered",
    parameters: {
        status: {
            // 'beta' | 'stable' | 'deprecated' | 'releaseCandidate'
            type: "stable"
        },
       
    },
     tags: ['autodocs']
}

export const Default = {
    args: {
        appearance: "default",
        text: "Hello InlineMessage",
    }
}

export const Successe = {
    args: {
        appearance: "successe",
        text: "Hello InlineMessage",
    }
}

export const Error = {
    args: {
        appearance: "error",
        text: "Hello InlineMessage",
    }
}