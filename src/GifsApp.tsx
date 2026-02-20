import { GifList } from "./gifs/components/GifList"
import { PreviousSearches } from "./gifs/components/PreviousSearches"
import { mockGifs } from "./mock-data/gifs.mock"
import { CustomHeader } from "./shared/components/CustomHeader"
import { CustomSearchBar } from "./shared/components/CustomSearchBar"

export const GifsApp = () => {
  return (
    <>
        {/* Header */}
        <CustomHeader title="Buscador de Gifs" description="Descubre y comparte el Gif perfecto"/>

        {/* Search */}
        <CustomSearchBar placeholder="Busca lo que quieras" />

        {/* Previous Searches */}
        <PreviousSearches searches={['Goku', 'Dragon Ball Z']}/>

        {/* Gifs */}
        <GifList gifs={mockGifs}/>
    </>
  )
}
