import styled from "styled-components";
import { Icon, iconsType } from "../icon";

interface IButtonIconProps {
    /**
     * Визуальный вес компонента.
     */
    appearance?: "primary" | "secondary";
    /**
     * Размер компонента.
     */
    size?: "large" | "medium";
    /**
     * Заблокированное состояние.
     */
    disabled?: boolean;
    /**
     * Состояние загрузки.
     */
    loading?: boolean;
    /**
     * Иконка.
     */
    icon?: iconsType;
}

const StyledButtonIcon = styled.button<IButtonIconProps>`
	border: 1px solid transparent;
    border-radius:  ${(props) => props.theme.borderRadius.componentBase};
	display: inline-flex;
	flex-direction: row;
	gap: ${(props) => props.theme.spacing.inner.close};
	justify-content: center;
	align-items: center;
	padding: unset;
	transition: ${(props) => props.theme.animation.base};
	&:focus {
		box-shadow: ${(props) => props.theme.focus};
	}

	// APPERANCE PROP
	${(props) =>
        props.appearance === "primary" &&
        `
        &:enabled {
        color: ${props.theme.colors.button.icon.primary.icon.enabled};
        background-color: ${props.theme.colors.button.icon.primary.background.enabled};
        }
        &:hover {
        background-color: ${props.theme.colors.button.icon.primary.background.hover};
        }
        &:active {
        background-color: ${props.theme.colors.button.icon.primary.background.active};
        }
        `}

	${(props) =>
        props.appearance === "secondary" &&
        `
            &:enabled {
            color: ${props.theme.colors.button.icon.secondary.icon.enabled};
              background-color: ${props.theme.colors.bg.global.calm};
            }

            &:hover {
              background-color: ${props.theme.colors.button.icon.secondary.background.hover};
            }

            &:active {
            background-color: ${props.theme.colors.button.icon.secondary.background.active};
            }
            `} 

            ${(props) =>
        props.disabled &&
        `   
            &:disabled {
            background-color: ${props.theme.colors.bg.body.calm};
            color: ${props.theme.colors.button.icon.primary.icon.disabled};
            cursor: not-allowed;
            }`}
            
            
    // SIZE
    ${(props) =>
        props.size === "large" &&
        `
        height: ${props.theme.spacing.height.xLarge};
        width: ${props.theme.spacing.height.xLarge};
        `}

        ${(props) =>
        props.size === "medium" &&
        `
            height: ${props.theme.spacing.height.large};
            width: ${props.theme.spacing.height.large}; 
            `}
`;

/**
 * Кнопка, состоящая только из значка, позволяет людям совершать простые и узнаваемые действия в условиях ограниченного пространства.
 */
export const ButtonIcon: React.FC<IButtonIconProps> = ({
    appearance = "primary",
    size = "large",
    disabled,
    loading,
    icon,
 }) => {
    return (
        <StyledButtonIcon
            appearance={appearance}
            size={size}
            disabled={disabled}
            loading={loading}
            icon={icon}
        >
            {icon && <Icon size={size === "large" ? 24 : 20} iconName={icon} />}
        </StyledButtonIcon>
    );
};