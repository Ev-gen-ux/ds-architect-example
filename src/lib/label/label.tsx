import styled from "styled-components";
import { iconsType } from "../icon";


interface ILabelProps {
	text: string;
	size?: "medium";
	appearance?: "secondary";
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


        ${(props) =>
		props.appearance &&
		`
            background: ${props.theme.colors.labelStatus.secondary.background.wait};
            color: ${props.theme.colors.labelStatus.secondary.label.wait};
            border-color: ${
				props.theme.colors.labelStatus.secondary.border.wait
			};
            `}


      
`;

export const Label: React.FC<ILabelProps> = ({
	text = "Label",
	size = "medium",
	appearance = "secondary",
}) => {
	return (
		<StyledLabel
			appearance={appearance}
			size={size}
			text={text}
		>
			{text}
		</StyledLabel>
	);
};
