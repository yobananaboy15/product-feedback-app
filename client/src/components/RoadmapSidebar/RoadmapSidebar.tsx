import React from 'react'
import * as S from './styles'
import { RoadmapSidebarTitle } from '../RoadmapSidebarTitle/RoadmapSidebarTitle'
import { RoadmapSidebarStatus } from '../RoadmapSidebarStatus/RoadmapSidebarStatus'

//TODO: Make Roadmap status dynamic.

export const RoadmapSidebar = () => {
    return (
        <S.Container>
            <RoadmapSidebarTitle/>
            <RoadmapSidebarStatus status="Planned" color="#F49F85"/>
            <RoadmapSidebarStatus status="In-Progress" color="#AD1FEA"/>
            <RoadmapSidebarStatus status="Live" color="#62BCFA"/>
        </S.Container>
    )
}
