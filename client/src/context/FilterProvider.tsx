import React, {createContext, useState} from 'react'
import { filters } from '../components/SuggestionFilter/SuggestionsFilter'

type FilterContextProps = {
    filterValue: typeof filters[number],
    setFilterValue: React.Dispatch<React.SetStateAction<typeof filters[number]>>
}

type FilterProviderProps = {
    children: React.ReactNode
}

export const FilterContext = createContext<FilterContextProps>({filterValue: 'All', setFilterValue: () => {}})

export const FilterProvider = ({children}: FilterProviderProps) => {
    const [filterValue, setFilterValue] = useState<typeof filters[number]>('All')

    return (
        <FilterContext.Provider value={{filterValue, setFilterValue}}>
            {children}
        </FilterContext.Provider>
    )
}
