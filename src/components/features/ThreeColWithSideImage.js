import React from "react";
import styled from "styled-components";
import tw from "twin.macro";
//eslint-disable-next-line
import { css } from "styled-components/macro";
import { SectionHeading, Subheading as SubheadingBase } from "components/misc/Headings.js";
import { SectionDescription } from "components/misc/Typography.js";

import defaultCardImage from "images/shield-icon.svg";

import { ReactComponent as SvgDecoratorBlob3 } from "images/svg-decorator-blob-3.svg";
import FeatureIconImage from "feather-icons/dist/icons/check-circle.svg";
import SupportIconImage from "images/support-icon.svg";
import ShieldIconImage from "images/shield-icon.svg";
import CustomizeIconImage from "images/customize-icon.svg";
import FastIconImage from "images/fast-icon.svg";
import ReliableIconImage from "images/reliable-icon.svg";
import SimpleIconImage from "images/simple-icon.svg";

const Container = tw.div`relative`;

const ThreeColumnContainer = styled.div`
  ${tw`flex flex-col items-center md:items-stretch md:flex-row flex-wrap md:justify-center max-w-screen-lg mx-auto py-20 md:py-24`}
`;
const Subheading = tw(SubheadingBase)`mb-4`;
const Heading = tw(SectionHeading)`w-full`;
const Description = tw(SectionDescription)`w-full text-left`;
const VerticalSpacer = tw.div`mt-10 w-full`

const Column = styled.div`
  ${tw`md:w-1/2 lg:w-1/3 max-w-sm`}
`;

const Card = styled.div`
  ${tw`flex flex-col sm:flex-row items-center sm:items-start text-center sm:text-left h-full mx-4 px-2 py-8`}
  .imageContainer {
    ${tw`border text-center rounded-full p-5 flex-shrink-0`}
    img {
      ${tw`w-6 h-6`}
    }
  }

  .textContainer {
    ${tw`sm:ml-4 mt-4 sm:mt-2`}
  }

  .title {
    ${tw`mt-4 tracking-wide font-bold text-2xl leading-none`}
  }

  .description {
    ${tw`mt-1 sm:mt-4 font-medium text-secondary-100 leading-loose`}
  }
`;

const DecoratorBlob = styled(SvgDecoratorBlob3)`
  ${tw`pointer-events-none absolute right-0 bottom-0 w-64 opacity-25 transform translate-x-32 translate-y-48 `}
`;

export default ({ 
  cards = null, 
  heading = "Soberania", 
  subheading = "Basamento Legal", 
  description = "Poder Supremo e ilimitado, tradicionalmente atribuido a la nación, al pueblo…para establecer su constitución y adoptar las decisiones políticas fundamentales tanto en el ámbito interno como en el plano internacional.",
  enlace = "(Diccionario panhispánico del español jurídico).",
  url = "https://dpej.rae.es/lema/soberan%C3%ADa" 
  }) => {
  /*
   * This componets has an array of object denoting the cards defined below. Each object in the cards array can have the key (Change it according to your need, you can also add more objects to have more cards in this feature component) or you can directly pass this using the cards prop:
   *  1) imageSrc - the image shown at the top of the card
   *  2) title - the title of the card
   *  3) description - the description of the card
   *  If a key for a particular card is not provided, a default value is used
   */

  const defaultCards = [
    {
      imageSrc: FeatureIconImage,
      title: "",
      description: "La soberanía reside intransferiblemente en el pueblo, quien la ejerce directamente... Art. 5 Constitucion de Venezuela"
    },
    { imageSrc: FeatureIconImage, 
      title: "",   
      description: "Todos los ciudadanos y ciudadanas tienen el derecho de participar libremente en los asuntos públicos, directamente… Art. 62 Constitucion de Venezuela"
    },
    { imageSrc: FeatureIconImage, 
      title: "",
      description: "Toda persona, legalmente capacitada, tiene el derecho de tomar parte en el gobierno de su país, directamente… Art. 20 Declaración Americana de los Derechos y Deberes del Hombre"
    },
    { imageSrc: FeatureIconImage, 
      title: "",
      description: "Todos los ciudadanos deben gozar de los siguientes derechos y oportunidades: de participar en la dirección de los asuntos públicos, directamente… Art. 23 Convencion Americana sobre derechos Humanos - pacto de san Jose de Costa Rica."
    },
    { imageSrc: FeatureIconImage, 
      title: "",
      description: "Toda persona tiene derecho a participar en el gobierno de su país, directamente… Art. 21 Declaración Universal de Derechos Humanos"
    },
    { imageSrc: FeatureIconImage, 
      title: "",
      description: "Todos los ciudadanos gozarán, sin ninguna de la distinciones mencionadas en el artículo 2, y sin restricciones indebidas, de los siguientes derechos y oportunidades: Participar en la dirección de los asuntos públicos, directamente…  Art. 25 Pacto Internacional de derechos civiles y politicos."
    }

  ];

  if (!cards) cards = defaultCards;

  return (
    <Container>
      <ThreeColumnContainer>
        {subheading && <Subheading>{subheading}</Subheading>}
        <Heading>{heading}</Heading>
        {description && <Description>{description} <br /> <a href={url}> {enlace}</a></Description>}        
        
        <VerticalSpacer />
        {cards.map((card, i) => (
          <Column key={i}>
            <Card>
              <span className="imageContainer">
                <img src={card.imageSrc || defaultCardImage} alt="" />
              </span>
              <span className="textContainer">            
                <p className="description">
                  {card.description || "Lorem ipsum donor amet siti ceali ut enim ad minim veniam, quis nostrud."}
                </p>
              </span>
            </Card>
          </Column>
        ))}
      </ThreeColumnContainer>
      <DecoratorBlob />
    </Container>
  );
};
