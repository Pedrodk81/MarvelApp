export interface ICharacters {
    id: number,
    title: string,
    description: string,
    image: string,
    apparitions: string[],
    rate: number
};

export interface IHqs {
    id: number,
    title: string,
    description: string,
    image: string,
    apparitions: string[],
    rate: number
};

export interface IMovies {
    id: number,
    title: string,
    description: string,
    image: string,
    apparitions: string[],
    rate: number
};

export type DataContextType = {
    characters?: ICharacters[],
    hqs?: IHqs[],
    movies?: IMovies[]
}
