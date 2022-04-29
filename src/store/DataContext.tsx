import { createContext, ReactNode } from 'react';
import { DataContextType } from '../types/DataContext';

import { IMovies } from '../types/DataContext';

import characters from '../data/characters.json';
import movies from '../data/movies.json';
import hqs from '../data/hqs.json';

export const DataContext = createContext<DataContextType>({
    characters: [],
    movies: [],
    hqs: []
});
  
export function DataProvider({ children }: { children: ReactNode }) {
    const context = { characters, movies, hqs };
  
    return <DataContext.Provider value={context}>{children}</DataContext.Provider>;
}