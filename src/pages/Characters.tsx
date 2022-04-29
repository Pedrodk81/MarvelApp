import { ReactElement, useContext } from "react";

import { DataContext } from "../store/DataContext";
import { DataContextType } from "../types/DataContext";

import Nav from "../components/Nav";
import SimpleCard from "../components/SimpleCard";

function Characters(): ReactElement {
    const { characters }: any = useContext<DataContextType>(DataContext);

    return (
        <>
            <Nav />
            <SimpleCard data={characters} isCharacterData={true} />
        </>
    )
}

export default Characters;