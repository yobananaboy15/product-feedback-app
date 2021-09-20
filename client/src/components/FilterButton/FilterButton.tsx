import React from 'react'
import * as S from './styles'
import {filters} from '../SuggestionFilter/SuggestionsFilter';

type FilterbuttonProps = {
    filterText: typeof filters[number]
    selected: boolean,
    callback: (filterValue: typeof filters[number]) => void
}
export const FilterButton = ({filterText, selected, callback}: FilterbuttonProps) => {

    return selected ? <S.FilterButtonSelected>{filterText}</S.FilterButtonSelected> : <S.FilterButton onClick={() => callback(filterText)}>{filterText}</S.FilterButton>
}     

