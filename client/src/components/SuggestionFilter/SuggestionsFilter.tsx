import React, {useContext} from 'react'
import * as S from './styles'
import { FilterButton } from '../FilterButton/FilterButton'
import {FilterContext} from '../../context/FilterProvider';

export const filters = ["All", "UI", "UX", "Enhancement", "Bug", "Feature"] as const

type validFilter = typeof filters[number]

export const SuggestionsFilter = () => {
    const {filterValue, setFilterValue} = useContext(FilterContext)
    
    const selectFilter = (value: validFilter) => {
        setFilterValue(value);
    }

    return (
        <S.FilterContainer>
            {filters.map(filter => {
                return <FilterButton filterText={filter} selected={filter === filterValue} callback={selectFilter}/>
            })}            
        </S.FilterContainer>
    )
}
