import styled from "styled-components";
import { Icon, iconsType } from "../icon";
import { Button } from "../button";
import { Label } from "../label";


interface ICardProps {
    appearance?: "primary" | "secondary";
    labelText?: string;
    textHeadind?: string;
    textDiscription?: string;
    children?: React.ReactNode;
    textButtonPrimary?: string;
    textButtonOutline?: string;
    iconBefore?: "tag";
}

const StyledCard = styled.div<ICardProps>`
   padding: ${props => props.theme.spacing.paddings.relaxed};
   display: inline-flex;
   flex-direction: column;
   gap: ${props => props.theme.spacing.paddings.relaxed};
   min-width: 352px;
   max-width: 1304px;
   border: 1px solid;
   border-color: ${props => props.theme.colors.border.subSection.calm};
   border-radius: ${props => props.theme.borderRadius.sectionInner};
   box-shadow: ${props => props.theme.shadows.overlay.elevated};
   display: relative;

.container-top {
 color: ${props => props.theme.colors.icon.secondary.calm};
 display: flex;
 align-items: center;
 justify-content: space-between;
};


.text-container {
   display: inline-flex;
   flex-direction: column;
gap: ${props => props.theme.spacing.inner.close};
};

.card-discription {
  color: ${props => props.theme.colors.text.secondary};
   font-size: ${props => props.theme.typography.fontSize.component.base};
   font-weight: ${props => props.theme.typography.fontWeight.medium};
   line-heght: ${props => props.theme.typography.lineHeight.component.base};
};

.card-heading {
   color: ${props => props.theme.colors.text.base};
   font-size: ${props => props.theme.typography.fontSize.heading.h5};
   font-weight: ${props => props.theme.typography.fontWeight.semiBold};
   line-heght: ${props => props.theme.typography.lineHeight.heading.h5};
};


 .button-container {
    display: inline-flex;
    flex-direction: column;
    gap: ${props => props.theme.spacing.inner.related};
 };

`;



export const Card: React.FC<ICardProps> = ({
    appearance,
    iconBefore,
    labelText,
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
            labelText={labelText}
            textHeadind={textHeadind}
            textDiscription={textDiscription}
            textButtonPrimary={textButtonPrimary}
            textButtonOutline={textButtonOutline}
        >

            <div className="container-top">

                {iconBefore && (
                    <Icon
                        iconName={iconBefore}
                        size={32}
                    />
                )}
                <Label
                    text="Label"
                    size="medium"
                    appearance={"secondary"}
                />

            </div>



            <div className="text-container">
                <p className="card-heading">
                    Card Heading
                </p>
                <span className="card-discription">
                    Card Discriptipn
                </span>
            </div>


            {children}

            <div className="button-container">
                <Button appearance="primary" text="Button Label" iconBefore="tag" size="medium" />
                <Button appearance="outline" text="Button Label" iconBefore="info" size="medium" />

            </div>


        </StyledCard >
    );
};