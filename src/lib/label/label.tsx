import styled from "styled-components";
import { iconsType } from "../icon";


interface ILabelProps {
	/**
	 * Наполнение текстом.
	 */
	text: string;
	/**
	 * Размер компонента.
	 */
	size?: "medium";
	/**
	 * Визуальный вес компонента.
	 */
	appearance?: "successe" | "information" | "alert" | "wait" | "error";
	/**
	 * Иконка слева.
	 */
	iconBefore?: iconsType;
}

const StyledLabel = styled.div<ILabelProps>`
	display: inline-flex;
	flex-direction: row;
	align-items: center;
	justify-content: center;
	border: 1px solid;
	border-radius: ${(props) => props.theme.borderRadius.componentInner};
	font-family: ${(props) => props.theme.typography.fontFamily.component};

	${(props) =>
		props.size === "medium" &&
		`
        font-size: ${props.theme.typography.fontSize.component.small};
        line-height: ${props.theme.typography.lineHeight.component.small};
        font-weight: ${props.theme.typography.fontWeight.regular};
       
        padding: ${props.theme.spacing.paddings.xsCompact};

        `}

       ${(props) => props.appearance === "successe" && `
            background: ${props.theme.colors.label.successe.background.successe};
            color: ${props.theme.colors.label.successe.label.successe};
            border-color: ${props.theme.colors.label.successe.border.successe};
            `}

         ${(props) => props.appearance === "information" && `
            background: ${props.theme.colors.label.information.background.information};
            color: ${props.theme.colors.label.information.label.information};
            border-color: ${props.theme.colors.label.information.border.information};
            `}

          ${(props) => props.appearance === "alert" && `
            background: ${props.theme.colors.label.alert.background.alert};
            color: ${props.theme.colors.label.alert.label.alert};
            border-color: ${props.theme.colors.label.alert.border.alert};
            `}

        ${(props) => props.appearance === "wait" && `
            background: ${props.theme.colors.label.wait.background.wait};
            color: ${props.theme.colors.label.wait.label.wait};
            border-color: ${props.theme.colors.label.wait.border.wait};
            `}

	      ${(props) => props.appearance === "error" && `
            background: ${props.theme.colors.label.error.background.error};
            color: ${props.theme.colors.label.error.label.error};
            border-color: ${props.theme.colors.label.error.border.error};
            `}

      
`;
/**
 * Элемент визуальной маркировки отображающий статус.
 */
export const Label: React.FC<ILabelProps> = ({
	text = "Label",
	size = "medium",
	appearance = "wait",
	iconBefore = "tag"
}) => {
	return (
		<StyledLabel
			appearance={appearance}
			size={size}
			text={text}
			iconBefore={iconBefore}
		>
			
			{text}
		</StyledLabel>
	);
};
