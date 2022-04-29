import { ReactElement, useContext } from "react";

import { DataContext } from "../store/DataContext";
import { DataContextType, IMovies } from "../types/DataContext";

import Nav from "../components/Nav";
import SimpleCard from "../components/SimpleCard";

export default function Movies(): ReactElement {
    const { movies }: any = useContext<DataContextType>(DataContext);

    return (
        <>
            <Nav />
            <SimpleCard data={movies} />
        </>
    )
}