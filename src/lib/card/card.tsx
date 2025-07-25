import styled from "styled-components";
import { Icon, iconsType } from "../icon";
import { Button } from "../button";
import { Label } from "../label";


interface ICardProps {
    /**
     * Визуальный вес компонента.
     */
    appearance?: "primary" | "secondary";
    /**
     * Текст в лейбле.
     */
    labelText?: string;
    /**
     * Наполнение заголовка.
     */
    textHeadindg?: string;
    /**
     * Наполнение описания.
     */
    textDiscription?: string;
    /**
     * React.ReactNode
     */
    children?: React.ReactNode;
    /**
     * Текст в основной кнопке.
     */
    textButtonPrimary?: string;
     /**
     * Текст во вторичной кнопке.
     */
    textButtonOutline?: string;
    /**
     * Отображает икнку лева.
     */
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
   backgroun-color: ${props => props.theme.colors.bg.section.calmest};
 

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

${props => props.appearance === "primary" && `
    background: ${props.theme.colors.bg.section.calmest};
 `}

 ${props => props.appearance === "secondary" && `
    background: ${props.theme.colors.bg.section.calm};
 `}

`;


/**
 * Универсальный компонент, позволяет отображать линейку продуктов.
 */
export const Card: React.FC<ICardProps> = ({
    appearance,
    iconBefore,
    labelText = "Status Label",
    textHeadindg = "Card Heading",
    textDiscription = "Card Discription",
    children,
    textButtonPrimary = "Add to cart",
    textButtonOutline = "More details",
}) => {
    return (
        <StyledCard
            appearance={appearance}
            iconBefore={iconBefore}
            labelText={labelText}
            textHeadindg={textHeadindg}
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
                    text={labelText}
                    size="medium"
                    appearance="successe"

                />

            </div>



            <div className="text-container">
                <p className="card-heading">
                    {textHeadindg}
                </p>
                <span className="card-discription">
                    {textDiscription}
                </span>
            </div>


            {children}

            <div className="button-container">
                <Button appearance={appearance ? "primary" : "outline"} text={textButtonPrimary} iconBefore="tag" size="medium" />
                <Button appearance={appearance ? "flat" : "outline"} text={textButtonOutline} iconBefore="info" size="medium" />

            </div>


        </StyledCard >
    );
};