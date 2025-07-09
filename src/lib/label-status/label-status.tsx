import styled from "styled-components";
import { iconsType } from "../icon";

interface ILabelStatusProps {
    appearance?: "secondary";
    size?: "medium";
    iconBefore?: iconsType;
    text?: string;
}

const StyledLabelStatus = Styled.label<StyledLabelStatus>`
    border: 1px solid;
    display: inline-flex;
    flex-direction: row;
    border-radius: ${(props) => props.theme.borderRadius.componentBase};
    gap: ${(props) => props.theme.spacing.spacing.inner.related};
    justify-content: center;
    align-items: center;
    pudding: unset;


 ${(props) => props.appearance === "secondary" && `
    &:successe {
    background-color: ${props.theme.colors.labelStatus.secondary.background.wait};
    color: ${props.theme.colors.labelStatus.secondary.label.wait};
    ` }

`;

export const labelStatus: React.FC<ILabeStatusProps> = ({
    appearance = "secondary",
    size = "medium",
    icon,
 }) => {
    return (
        <StyledLabelStatus
            appearance={appearance}
            size={size}
            icon={icon}
        >
            {icon && <Icon size={size === "large" ? 24 : 20} iconName={icon} />}
        </StyledLabelStatus>
    );
};