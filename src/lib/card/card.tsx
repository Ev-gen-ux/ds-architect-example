import styled from "styled-components";
import { iconsType } from "../icon";
import { Button } from "../button";

interface ICardProps {
    appearance?: "base" | "inverted";
    contentBefore?: React.ReactNode;
    iconBefore?: iconsType;
    badgeText?: string;
    contentAfter?: React.ReactNode;
    textHeadind?: string;
    textDiscription?: string;
    children?: React.ReactNode;
    textButtonPrimary?: string;
    textButtonOutline?: string;
}

const StyledCard = styled.div<ICardProps>``;

export const Card: React.FC<ICardProps> = ({
    appearance,
    contentBefore,
    iconBefore,
    badgeText,
    contentAfter,
    textHeadind,
    textDiscription,
    children,
    textButtonPrimary,
    textButtonOutline,
}) => {
    return (
        <StyledCard
            appearance={appearance}
            contentBefore={contentBefore}
            iconBefore={iconBefore}
            badgeText={badgeText}
            contentAfter={contentAfter}
            textHeadind={textHeadind}
            textDiscription={textDiscription}
            textButtonPrimary={textButtonPrimary}
            textButtonOutline={textButtonOutline}
        >
            <div className="card-footer">header</div>
            <div className="card-body">body</div>
            {children}
            <Button appearance="primary" text="Оформить" iconBefore="tag" size="medium" />
            <Button appearance="outline" text="Подробнее" iconBefore="info" size="medium" />
        </StyledCard>
    );
};