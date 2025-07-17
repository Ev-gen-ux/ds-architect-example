import styled from "styled-components";

interface IInputHeading{
	/**
	 * Визуальный вес компонента.
	 */
	appearance?: "enabled" | "disabled" | "readOnly";
	/**
	 * Будевая операция (true/false).
	 */
	required?: boolean;
	/**
	 * Наполнение текстом.
	 */
	text: string;
}

const StyledIInputHeading= styled.span<IInputHeading>`
	font-family: ${(props) => props.theme.typography.fontFamily.component};
	font-size: ${(props) => props.theme.typography.fontSize.component.base};
	line-height: ${(props) => props.theme.typography.lineHeight.component.base};
	font-weight: ${(props) => props.theme.typography.fontWeight.medium};
	color: ${(props) => props.theme.colors.text.base};
	display: inline-flex;
	gap: ${(props) => props.theme.spacing.inner.closest};

	 ${(props) => props.appearance === "enabled" && `
            color: ${props.theme.colors.inputHeading.enabled};
            `}

	${(props) => props.appearance === "disabled" && `
            color: ${props.theme.colors.inputHeading.disabled};
            `}

    ${(props) => props.appearance === "readOnly" && `
            color: ${props.theme.colors.inputHeading.readOnly};
            `}

	.inputLabel-required {
		color: ${(props) => props.theme.colors.inputHeading.required};
	};

`;

/**
 * Компонент используется в качестве заголовка для полей ввода. 
 */
export const Label: React.FC<IInputHeading> = ({ required, text }) => {
	return (
		<StyledIInputHeading text={text} required={required}>
			{text}
			{required && <span className="label-required">*</span>}
		</StyledIInputHeading>
	);
};