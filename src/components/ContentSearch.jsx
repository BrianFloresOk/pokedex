import styled from "styled-components"
import { PokeSearch } from "./PokeSearch"
import { PokeFilter } from "./PokeFilter"



export const ContentSearch = () => {
    return (
        <div>
           <PokeSearch />
           <PokeFilter />
        </div>
    )
}