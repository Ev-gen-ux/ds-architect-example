import { InputLabel} from "./input-heading";


export default {
    title: "Компоненты/InputLabel",
    component: InputLabel,
    layout: "centered",
    parameters: {
        status: {
            // 'beta' | 'stable' | 'deprecated' | 'releaseCandidate'
            type: "stable"
        },
       
    },
     tags: ['autodocs']
}

export const Enabled = {
    args: {
        appearance: "enabled",
        text: "Hello InputLabel",
    }
}

export const Disabled = {
    args: {
        appearance: "disabled",
        text: "Hello InputLabel",
    }
}

export const ReadOnly = {
    args: {
        appearance: "readOnly",
        text: "Hello InputLabel",
    }
}