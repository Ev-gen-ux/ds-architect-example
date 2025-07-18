import styled from "styled-components";
import { ButtonLink } from "../button";
import { Label } from "../label";


interface INewsProps {
	appearance?: "base";
	text: string;
	textSize?: "base" | "large";
	newsData?: string;
	labelText?: string;
	buttonText?: string;
	children?: React.ReactNode;
}

const StyledNews = styled.div<INewsProps>`
	padding: ${(props) => props.theme.spacing.paddings.default};
	display: inline-flex;
	flex-direction: column;
	gap: ${(props) => props.theme.spacing.inner.grouped};
	min-width: 320px;
	max-width: 560px;
	border: 1px solid;
	border-color: ${(props) => props.theme.colors.border.subSection.calm};

	.card-header {
		display: flex;
		align-items: center;
		justify-content: space-between;

		& > .card-header-date {
			font-family: ${(props) => props.theme.typography.fontFamily.text};
			font-size: ${(props) =>
				props.theme.typography.fontSize.component.small};
			font-weight: ${(props) => props.theme.typography.fontWeight.medium};
			line-height: ${(props) =>
				props.theme.typography.lineHeight.component.small};
			color: ${(props) => props.theme.colors.text.base};
		}
	}

	${(props) =>
		props.textSize === "base" &&
		`
        .card-body {
		& > .card-body-text {
			font-family: ${props.theme.typography.fontFamily.text};
			font-size: ${props.theme.typography.fontSize.text.base};
			line-height: ${props.theme.typography.lineHeight.text.base};
			font-weight: ${props.theme.typography.fontWeight.regular};
			color: ${props.theme.colors.text.base};
		}
	}
        `}

	${(props) =>
		props.textSize === "large" &&
		`
        .card-body {
		& > .card-body-text {
			font-family: ${props.theme.typography.fontFamily.heading};
			font-size: ${props.theme.typography.fontSize.heading.h3};
			line-height: ${props.theme.typography.lineHeight.heading.h3};
			font-weight: ${props.theme.typography.fontWeight.semiBold};
			color: ${props.theme.colors.text.base};
		}
	}
        `}
`;

export const Card: React.FC<INewsProps> = ({
	appearance,
	text = "Текст заглушка",
	textSize = "base",
	newsData = "01.01.2001",
	labelText = "Важное",
	buttonText = "Перейти",
	children,
}) => {
	return (
		<StyledNews
			appearance={appearance}
			textSize={textSize}
			newsData={newsData}
			labelText={labelText}
			buttonText={buttonText}
			text={text}
		>
			<div className="card-header">
				<span className="card-header-date">{newsData}</span>
				<Label
					text={labelText}
					size="medium"
					
				/>
			</div>
			<div className="card-body">
				<p className="card-body-text">{text}</p>
			</div>
			<div>{children}</div>
			<div className="card-footer">
				<ButtonLink
					appearance={appearance ? "inverted" : "primary"}
					text={buttonText}
					iconBefore="link"
					size="medium"
				/>
			</div>
		</StyledNews>
	);
};