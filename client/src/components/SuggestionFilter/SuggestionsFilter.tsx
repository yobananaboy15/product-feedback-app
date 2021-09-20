import React, {useContext, useCallback} from 'react'
import { FilterContainer } from './styles'
import { FilterButton } from '../FilterButton/FilterButton'
import {FilterContext} from '../../context/FilterProvider';

export const filters = ["All", "UI", "UX", "Enhancement", "Bug", "Feature"] as const


export const SuggestionsFilter = () => {
    const {filterValue, setFilterValue} = useContext(FilterContext)
    
    const selectFilter = useCallback((value) => {
        setFilterValue(value);
    }, [setFilterValue])

    return (
        <FilterContainer>
            {filters.map(filter => {
                return <FilterButton filterText={filter} selected={filter === filterValue} callback={selectFilter}/>
            })}            
        </FilterContainer>
    )
}
