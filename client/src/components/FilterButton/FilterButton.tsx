import React from 'react'
import { Button, AllButton } from './styles'

type FilterbuttonProps = {
    filterText: string
}

export const FilterButton = ({filterText}: FilterbuttonProps) => filterText === 'All' ? <AllButton>{filterText}</AllButton> : <Button>{filterText}</Button>     

