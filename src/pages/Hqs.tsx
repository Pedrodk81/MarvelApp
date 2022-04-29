import { ReactElement, useContext } from "react";

import { DataContext } from "../store/DataContext";
import { DataContextType } from "../types/DataContext";

import Nav from "../components/Nav";
import SimpleCard from "../components/SimpleCard";

export default function Hqs(): ReactElement {
    const { hqs }: any = useContext<DataContextType>(DataContext);

    return (
        <>
            <Nav />
            <SimpleCard data={hqs} />
        </>
    )
}