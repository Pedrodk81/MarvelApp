import { ReactElement } from "react";
import ReactModal from 'react-modal';

import { ICharacters, IHqs, IMovies } from "../../types/DataContext";

import Container from "../../shared/Container";
import Section from "../../shared/Section";

import starFullIcon from "../../assets/star-full.svg";
import starEmptyIcon from "../../assets/star-empty.svg";
import closeIcon from "../../assets/close.svg";

import { 
    DetailsCharacters, DetailsMoviesAndHqs, Title, Description, Info, Apparitions, Movies, RateText, Rate, Close, 
    AvaibleOn, AvaiblesStreaming, CloseMovies
} from "./styles";

const assetsPath = "/MarvelApp/images/"

export default function DetailsCard({data, isCharacterData, onClose }: {data: ICharacters | IMovies | IHqs, isCharacterData?: boolean, onClose: VoidFunction } ): ReactElement {
    const customStyles = {
        content: {
          
        },
      };
    ReactModal.setAppElement('body');
      console.log(isCharacterData)
    return (
        <ReactModal
            isOpen={true}
            onRequestClose={onClose}
            style={customStyles}
            contentLabel="Example Modal"
            className="Modal"
            overlayClassName="Overlay"
            >
            <Section detailsCard={true}>
                <Container>
                    { isCharacterData 
                    ? <CharactersInfo  data={data} onClose={onClose} />
                    : <MoviesAndHqsInfo  data={data} onClose={onClose} /> }
                </Container>
            </Section>
        </ReactModal>
    )
}

function CharactersInfo({data, onClose}: {data: ICharacters | IMovies | IHqs, onClose: VoidFunction }): ReactElement {
    const positiveRate = Array.from(Array(data.rate).keys());
    const negativeRate =Array.from(Array(5 - data.rate).keys());

    return (
        <DetailsCharacters float={data.position == "right"}>
            {data.position == "left" && <img src={`${assetsPath}${data.image}.png`} alt={data.title} />}
            <Info>
                <Title>
                    {data.title}
                </Title>
                <Apparitions>
                    Aparições:
                </Apparitions>
                <Movies>
                    {data.apparitions.map( (apparition, index, array) =>  (
                        <>
                            {apparition}
                            {array.length - 1 < index && <br />}
                        </>
                    ))}
                </Movies>
                <RateText>
                    Avaliações dos Fãs
                </RateText>
                <Rate>
                    {positiveRate.map( (rate, index) => (
                        <img key={index+starFullIcon} src={starFullIcon} alt={data.rate.toString()} />
                    ))}
                    {negativeRate.map( (rate, index) => (
                        <img key={index+starEmptyIcon} src={starEmptyIcon} alt={data.rate.toString()} />
                    ))}
                </Rate>
                <Close src={closeIcon} alt="Fechar" onClick={onClose} characters={true} />
            </Info>
            {data.position == "right" && <img src={`${assetsPath}${data.image}.png`} alt={data.title} />}
        </DetailsCharacters>
    )
}


function MoviesAndHqsInfo({data, onClose}: {data: ICharacters | IMovies | IHqs, onClose: VoidFunction }): ReactElement {
    const positiveRate = Array.from(Array(data.rate).keys());
    const negativeRate =Array.from(Array(5 - data.rate).keys());
    
    return (
        <DetailsMoviesAndHqs float={data.position == "right"}>
            {data.position == "left" && <img src={`${assetsPath}${data.image}.png`} alt={data.title} />}
            <Info>
                <Title>
                    {data.title}
                </Title>
                <Description>
                    {data.description}
                </Description>
                <AvaibleOn>
                    Disponível para compra:
                </AvaibleOn>
                {data.avaibleOn.map((streaming, key) => (
                    <AvaiblesStreaming key={key} src={`${assetsPath}${streaming}.svg`} alt={streaming} />
                ))}
                <RateText>
                    Critica: 
                </RateText>
                <Rate>
                    {positiveRate.map( (rate, index) => (
                        <img key={index+starFullIcon} src={starFullIcon} alt={data.rate.toString()} />
                    ))}
                    {negativeRate.map( (rate, index) => (
                        <img key={index+starEmptyIcon} src={starEmptyIcon} alt={data.rate.toString()} />
                    ))}
                </Rate>
                <Close src={closeIcon} alt="Fechar" onClick={onClose} />
            </Info>
            {data.position == "right" && <img src={`${assetsPath}${data.image}.png`} alt={data.title} />}
        </DetailsMoviesAndHqs>
    )
}