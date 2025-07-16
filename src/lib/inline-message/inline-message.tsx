import styled from "styled-components";

interface IInlineMessage {
	status?: "default" | "successe" | "error";
	text?: string;
}

const StyledInlineMessage = styled.span<IInlineMessage>`
	font-family: ${(props) => props.theme.typography.fontFamily.base};
	font-size: ${(props) => props.theme.typography.fontSize.component.base};
	line-height: ${(props) => props.theme.typography.lineHeight.component.base};
	font-weight: ${(props) => props.theme.typography.fontWeight.regular};

	${(props) =>
		props.status === "default" &&
		`
        color: ${props.theme.colors.text.default};
        `}

	${(props) =>
		props.status === "successe" &&
		`
        color: ${props.theme.colors.text.successe};
        `}

        ${(props) =>
		props.status === "error" &&
		`
        color: ${props.theme.colors.text.error};
        `}
`;

export const InlineMessage: React.FC<IInlineMessage> = ({ status, text }) => {
	return (
		<StyledInlineMessage text={text} status={status}>
			{text}
		</StyledInlineMessage>
	);
};