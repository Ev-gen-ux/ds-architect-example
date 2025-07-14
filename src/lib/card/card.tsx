import styled from "styled-components";
import { iconsType } from "../icon";
import { Button } from "../button";
import { label } from "../label";


interface ICardProps {
    appearance?: "primary" | "secondary";
    iconBefore?: iconsType;
    label?: string;
    textHeadind?: string;
    textDiscription?: string;
    children?: React.ReactNode;
    textButtonPrimary?: string;
    textButtonOutline?: string;
}

const StyledCard = styled.div<ICardProps>`
   padding: ${props => props.theme.spacing.paddings.relaxed}
   gap: ${props => props.theme.spacing.inner.grouped}




`;

export const Card: React.FC<ICardProps> = ({
    appearance,
    iconBefore,
    label,
    textHeadind,
    textDiscription,
    children,
    textButtonPrimary,
    textButtonOutline,
}) => {
    return (
        <StyledCard
            appearance={appearance}
            iconBefore={iconBefore}
            label={label}
            textHeadind={textHeadind}
            textDiscription={textDiscription}
            textButtonPrimary={textButtonPrimary}
            textButtonOutline={textButtonOutline}
        >
           
                <div className="container-top">container-top</div>
                <div className="text-container">text-container</div>
                {children}
                <Button appearance="primary" text="Button Label" iconBefore="tag" size="medium" />
                <Button appearance="outline" text="Button Label" iconBefore="info" size="medium" />
           
        </StyledCard>
    );
};