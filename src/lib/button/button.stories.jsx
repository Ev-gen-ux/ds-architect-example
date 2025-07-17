import { Button } from "./button";


export default {
    title: "Компоненты/Button",
    component: Button,
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
        size: "medium",
        text: "Hello Primart",
    }
}

export const Outline = {
    args: {
        appearance: "outline",
        size: "medium",
        text: "Hello Outline",
    }
}

export const Flat = {
    args: {
        appearance: "flat",
        size: "medium",
        text: "Hello Flat",
    }
}

export const ButtonLink = {
    args: {
        appearance: "primary",
        size: "medium",
        text: "Hello Button-Link",
    }
}

export const ButtonLIcon = {
    args: {
        appearance: "primary",
        size: "medium",
    }
}


