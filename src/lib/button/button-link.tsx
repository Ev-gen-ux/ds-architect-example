import Styled from "styled-components";
import { Icon, iconsType } from "../icon";

interface IButtonLinkProps {
    appearance?: "primary" | "secondary";
    size?: "large" | "medium";
    disabled?: boolean;
    loading?: boolean;
    iconBefore?: iconsType;
    iconAfter?: iconsType;
    text?: string;
}

const StyledButtonLink = Styled.button<IButtonLinkProps>`
    background:none;
    border: none;
    display: inline-flex;
    flex-direction: row;
    gap: ${(props) => props.theme.spacing.inner.grouped};
    justify-content: center;
    align-items: center;
    pudding: 0;
    transition: ${(props) => props.theme.animation.base};
     &:focus {
    box-shadow: ${(props) => props.theme.focus};
    }


 ${(props) => props.appearance === "primary" && `
    &:enabled {
    color: ${props.theme.colors.linkButton.primary.label.enabled};
    }
    &:hover {
    color: ${props.theme.colors.linkButton.primary.label.hover};
    }
     &:active {
    color: ${props.theme.colors.linkButton.primary.label.active};
    }
    ` }

     ${(props) => props.appearance === "secondary" && `
    &:enabled {
    color: ${props.theme.colors.linkButton.secondary.label.enabled};
    }
    &:hover {
    color: ${props.theme.colors.linkButton.secondary.label.hover};
    }
     &:active {
    color: ${props.theme.colors.linkButton.secondary.label.active};
    }
    ` }

    ${props => props.disabled && `
        
     &:disabled {
       color: ${props.theme.colors.linkButton.primary.label.disabled};
       cursor: not-allowed;
      }

    `}

  ${(props) => props.size === "medium" && `
    
    font-size: ${props.theme.typography.fontSize.component.base};
    line-height: ${props.theme.typography.lineHeight.component.base};
    font-weight: ${props.theme.typography.fontWeight.semiBold};
    `}

     ${(props) => props.size === "large" && `
   
    font-size: ${props.theme.typography.fontSize.component.base};
    line-height: ${props.theme.typography.lineHeight.component.base};
    font-weight: ${props.theme.typography.fontWeight.semiBold};
    `}

`;

export const ButtonLink: React.FC<IButtonLinkProps> = ({ appearance = "primary", size = "medium", disabled, loading, iconBefore, iconAfter, text = "Button Label" }) => {
    return <StyledButtonLink
        appearance={appearance}
        size={size}
        disabled={disabled}
        loading={loading}
        iconBefore={iconBefore}
        iconAfter={iconAfter} >

        {iconBefore && <Icon size={size === "large" ? 24 : 20} iconName={iconBefore} />}
        {text}
        {iconAfter && <Icon size={size === "large" ? 24 : 20} iconName={iconAfter} />}

    </StyledButtonLink>
}