import { useState } from "react"
import { GifList } from "./gifs/components/GifList"
import { PreviousSearches } from "./gifs/components/PreviousSearches"
import { mockGifs } from "./mock-data/gifs.mock"
import { CustomHeader } from "./shared/components/CustomHeader"
import { CustomSearchBar } from "./shared/components/CustomSearchBar"


export const GifsApp = () => {

    const [previousTerms, setPreviousTerms] = useState(['dragon ball z']);

    const handleTermClicked = (term: string) => {
        console.log({ term });
    }

    const handleSearch = (query: string = '') => {

        query = query.trim().toLowerCase();

        if ( query.length === 0 ) return;

        if ( previousTerms.includes(query) ) return;

        // const currentTerms = previousTerms.slice(0, 6);
        // currentTerms.unshift(query);
        // setPreviousTerms( currentTerms );

        setPreviousTerms([query, ...previousTerms].splice(0, 7))
    }

    return (
        <>
            {/* Header */}
            <CustomHeader title="Buscador de Gifs" description="Descubre y comparte el Gif perfecto"/>

            {/* Search */}
            <CustomSearchBar placeholder="Busca lo que quieras" onQuery={handleSearch} />

            {/* Previous Searches */}
            <PreviousSearches
                searches={previousTerms} 
                onLabelClicked={handleTermClicked} 
            />

            {/* Gifs */}
            <GifList gifs={mockGifs}/>
        </>
    )
}
