import React from 'react'
import * as S from './styles'
import { RoadmapLink } from '../RoadmapSidebarTitle/RoadmapSidebarTitle'

export const RoadmapSidebar = () => {
    return (
        <S.Container>
            <RoadmapLink/>
            <div>View</div>
            <div>3</div>
        </S.Container>
    )
}
