import React from 'react'
import * as S from './styles'

type FilterbuttonProps = {
    filterText: string
}

export const FilterButton = ({filterText}: FilterbuttonProps) => filterText === 'All' ? <S.FilterButtonSelected>{filterText}</S.FilterButtonSelected> : <S.FilterButton>{filterText}</S.FilterButton>     

