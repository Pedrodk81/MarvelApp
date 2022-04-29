import { ReactElement } from "react";

import { ICharacters, IHqs, IMovies } from "../../types/DataContext";

import { Title } from "../FormLogin/style";
import Container from "../../shared/Container";
import Section from "../../shared/Section";

import starFullIcon from "../../assets/star-full.svg";
import starEmptyIcon from "../../assets/star-empty.svg";
import closeIcon from "../../assets/close.svg";

import { 
    DetailsCharacters, DetailsMoviesAndHqs, Info, Apparitions, Movies, RateText, Rate, Close, 
    AvaibleOn, AvaiblesStreaming, CloseMovies
} from "./styles";

const assetsPath = "/images/"

export default function DetailsCard({data, isCharacterData, onClose }: {data: ICharacters | IMovies | IHqs, isCharacterData?: boolean, onClose: VoidFunction } ): ReactElement {
    console.log("chegou");
    return (
        <Section detailsCard={true}>
            <Container detailsCard={true}>
                { isCharacterData 
                ? <CharactersInfo  data={data} />
                : <MoviesAndHqsInfo  data={data} /> }
            </Container>
        </Section>
    )
}

function CharactersInfo({data}: {data: ICharacters | IMovies | IHqs }): ReactElement {
    const descriptionPosition = data.id - 1 % 3 == NaN ? "right" : "left" ;

    return (
        <DetailsCharacters>
            {descriptionPosition == "right" && <img src={`${assetsPath}${data.image}.png`} alt={data.title} />}
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
                    {Array(data.rate).map( rate => (
                        <img src={starFullIcon} alt={data.rate.toString()} />
                    ))}
                    {Array(5 - data.rate).map( rate => (
                        <img src={starEmptyIcon} alt={data.rate.toString()} />
                    ))}
                </Rate>
                <Close src={closeIcon} alt="Fechar" />
            </Info>
            {descriptionPosition == "left" && <img src={`${assetsPath}${data.image}.png`} alt={data.title} />}
        </DetailsCharacters>
    )
}


function MoviesAndHqsInfo({data}: {data: ICharacters | IMovies | IHqs }): ReactElement {
    const descriptionPosition = data.id - 1 % 3 == NaN ? "right" : "left" ;

    return (
        <DetailsMoviesAndHqs>
            {descriptionPosition == "right" && <img src={`${assetsPath}${data.image}.png`} alt={data.title} />}
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
                    Critica: 
                </RateText>
                <Rate>
                    {Array(data.rate).map( rate => (
                        <img src={starFullIcon} alt={data.rate.toString()} />
                    ))}
                    {Array(5 - data.rate).map( rate => (
                        <img src={starEmptyIcon} alt={data.rate.toString()} />
                    ))}
                </Rate>
                <Close src={closeIcon} alt="Fechar" />
            </Info>
            {descriptionPosition == "left" && <img src={`${assetsPath}${data.image}.png`} alt={data.title} />}
        </DetailsMoviesAndHqs>
    )
}