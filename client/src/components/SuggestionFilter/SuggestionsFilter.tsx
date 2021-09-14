import React, {useState} from 'react'
import { FilterContainer } from './styles'
import { FilterButton } from '../FilterButton/FilterButton'


export const SuggestionsFilter = () => {
    const [filterData, setFilterData] = useState<string[]>(["All", "UI", "UX", "Enhancement", "Bug", "Feature"])

    return (
        <FilterContainer>
            {filterData.map(filter => {
                return <FilterButton filterText={filter}/>
            })}            
        </FilterContainer>
    )
}
