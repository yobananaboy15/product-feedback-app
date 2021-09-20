import React from 'react'
import { ContainerDiv } from './styles'
import { Sidebar } from '../Sidebar/Sidebar'
import { Main } from '../Main/Main'
import { FilterProvider } from '../../context/FilterProvider'

export const AppContainer = () => {
    return (
        <ContainerDiv>
            <FilterProvider>
                <Sidebar />
                <Main />
            </FilterProvider>
        </ContainerDiv>

    )
}
