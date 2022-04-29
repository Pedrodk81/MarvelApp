import { ReactElement, lazy, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

import { ICharacters, IHqs, IMovies } from "../../types/DataContext";

import DetailsCard from "../DetailsCard";
import { Cards, Card, Info, Title, Description, Details, Button } from "./styles";
import Section from "../../shared/Section";
import Container from "../../shared/Container";

import nextArrowIcon from "../../assets/next-arrow.svg";
import prevArrowIcon from "../../assets/prev-arrow.svg";

const assetsPath = "/images/"

export default function SimpleCard({ data, isCharacterData }: {data: ICharacters[] | IMovies[] | IHqs[], isCharacterData?: boolean }): ReactElement {
    const [openDetailsCard, setOpenDetailsCard] = useState( {
            values: {
                id: 1,
                title: "null",
                description: "null",
                image: "null",
                apparitions: ["null"],
                rate: 1, 
            },
            show: false
    });
    console.log("openDetailsCard", openDetailsCard);
    const closeDetailsCard = () => {
        setOpenDetailsCard(prevState => ({
            ...prevState,
            show: false
        }));
    }

    const settingsCarousel = {
        infinite: true,
        speed: 500,
        slidesToScroll: 3,
        autoplay: false,
        slidesToShow: 3,
        nextArrow: <NextArrow onClick  />,
        prevArrow: <PrevArrow onClick />,
    };

    return (
        <Section>
            <Container>
                <Cards>
                    <Slider {...settingsCarousel}>
                        {data.map(( value, index ): ReactElement => (
                            <Card key={index} image={`${assetsPath}${value.image}.png`}>
                                <Info>
                                    <Title>{value.title}</Title>
                                    <Description>{value.description}</Description>
                                    <Details onClick={() => setOpenDetailsCard({values: value, show: true})}>ver detalhes</Details>
                                </Info>
                            </Card>
                        )) }               
                    </Slider>
                </Cards>
            </Container>
            {openDetailsCard.show && <DetailsCard data={openDetailsCard.values} isCharacterData={isCharacterData} onClose={closeDetailsCard} />}
        </Section>
        
    )
}

function NextArrow({ onClick }: {onClick: any}): ReactElement {
    return <Button className="next-arrow" onClick={onClick} > <img  src={nextArrowIcon} alt="Proximo" /> </Button>
}

function PrevArrow({ onClick }: {onClick: any}): ReactElement {
    return <Button className="prev-arrow" onClick={onClick} > <img  src={prevArrowIcon} alt="Anterior" /> </Button>
}