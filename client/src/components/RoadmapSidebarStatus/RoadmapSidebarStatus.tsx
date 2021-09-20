import React from 'react'
import * as S from './styles'

type RoadMapSideBarStatusProps = {
    status: string,
    color: string
}

export const RoadmapSidebarStatus = ({status, color}: RoadMapSideBarStatusProps) => {
    return (
        <S.Container>
            <S.Circle color={color}/>
            <S.StatusText>{status}</S.StatusText>
            <S.SuggestionCount>2</S.SuggestionCount>
        </S.Container>
    )
}
