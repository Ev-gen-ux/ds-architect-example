import { InputHeading} from "./input-heading";


export default {
    title: "Компоненты/InputHeading",
    component: InputHeading,
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
        text: "Hello InputHeading",
    }
}

export const Disabled = {
    args: {
        appearance: "disabled",
        text: "Hello InputHeading",
    }
}

export const ReadOnly = {
    args: {
        appearance: "readOnly",
        text: "Hello InputHeading",
    }
}