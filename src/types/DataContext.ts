export interface ICharacters {
    id: number,
    title: string,
    description: string,
    image: string,
    apparitions: string[],
    avaibleOn: string[],
    rate: number,
    position: string,
};

export interface IHqs {
    id: number,
    title: string,
    description: string,
    image: string,
    apparitions: string[],
    avaibleOn: string[],
    rate: number,
    position: string
};

export interface IMovies {
    id: number,
    title: string,
    description: string,
    image: string,
    apparitions: string[],
    avaibleOn: string[],
    rate: number,
    position: string
};

export type DataContextType = {
    characters?: ICharacters[],
    hqs?: IHqs[],
    movies?: IMovies[]
}
