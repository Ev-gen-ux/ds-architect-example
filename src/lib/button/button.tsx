import Styled from "styled-components";
import { Icon, iconsType } from "../icon";

interface IButtonProps {
  /**
   * Визуальный вес компонента
   */
    appearance?: "primary" | "outline" | "flat";
    /**
     * Размер компонента
     */
    size?: "large" | "medium";
    /**
     * Заблокированное состоние
     */
    disabled?: boolean;
    /**
     * состояние загрузки
     */
    loading?: boolean;
    /**Включает иконку слева */
    iconBefore?: iconsType;
    /**
     * Включает иконку справа
     */
    iconAfter?: iconsType;
    /**
     * Текст в кнопке
     */
    text?: string;
}

const StyledButton = Styled.button<IButtonProps>`
    
    display: inline-flex;
    flex-direction: row;
    border-radius: ${(props) => props.theme.borderRadius.componentBase};
    gap: ${(props) => props.theme.spacing.inner.grouped};
    justify-content: center;
    align-items: center;
    pudding: unset;
    transition: ${(props) => props.theme.animation.base};
     &:focus {
    box-shadow: ${(props) => props.theme.focus};
    }


 ${(props) => props.appearance === "primary" && `
    &:enabled {
    border: none;
    background-color: ${props.theme.colors.button.primary.background.enabled};
    color: ${props.theme.colors.button.primary.label.enabled};
    }
    &:hover {
    background-color: ${props.theme.colors.button.primary.background.hover};
    }
     &:active {
    background-color: ${props.theme.colors.button.primary.background.active};
    }
    ` }

    ${(props) => props.appearance === "outline" && `
    &:enabled {
    background-color: ${props.theme.colors.bg.global.calm};
    border-color: ${props.theme.colors.button.outline.border.enabled};
    color: ${props.theme.colors.button.outline.label.enabled};
    }
    &:hover {
    background-color: ${props.theme.colors.button.outline.background.hover};
    }
    &:active {
    background-color: ${props.theme.colors.button.outline.background.active};
    }
    ` }

    ${(props) => props.appearance === "flat" && `
    &:enabled {
    border-color: transparent;
    background-color: ${props.theme.colors.bg.global.calm};
    color: ${props.theme.colors.button.flat.label.enabled};
    }
    &:hover {
    background-color: ${props.theme.colors.button.flat.background.hover};
    }
     &:active {
    background-color: ${props.theme.colors.button.flat.background.active};
    }
    ` }

    ${props => props.disabled && `
        
     &:disabled {
       background-color: ${props.theme.colors.bg.global.calm};
       color: ${props.theme.colors.button.primary.label.disabled};
       border: ${props.theme.colors.button.primary.border.disabled};
       cursor: not-allowed;
      }

    `}

  ${(props) => props.size === "medium" && `
    height: ${props.theme.spacing.height.large};
    padding: 0 ${props.theme.spacing.paddings.default};
    gap: ${props.theme.spacing.inner.related};
    font-size: ${props.theme.typography.fontSize.component.base};
    line-height: ${props.theme.typography.lineHeight.component.base};
    font-weight: ${props.theme.typography.fontWeight.semiBold};
    `}

     ${(props) => props.size === "large" && `
    height: ${props.theme.spacing.height.xLarge};
    padding: 0 ${props.theme.spacing.paddings.relaxed};
    font-size: ${props.theme.typography.fontSize.component.base};
    line-height: ${props.theme.typography.lineHeight.component.base};
    font-weight: ${props.theme.typography.fontWeight.semiBold};
    `}

`;
/**
 * Самая заметная кнопка для ключевого действия на экране. 
 */
export const Button: React.FC<IButtonProps> = ({ appearance = "primary", size = "medium", disabled, loading, iconBefore, iconAfter, text = "Button Label" }) => {
    return <StyledButton
        appearance={appearance}
        size={size}
        disabled={disabled}
        loading={loading}
        iconBefore={iconBefore}
        iconAfter={iconAfter} >

        {iconBefore && <Icon size={size === "large" ? 24 : 20} iconName={iconBefore} />}
        {text}
        {iconAfter && <Icon size={size === "large" ? 24 : 20} iconName={iconAfter} /> }
        
    </StyledButton>
}