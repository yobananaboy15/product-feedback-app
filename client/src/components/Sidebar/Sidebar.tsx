import React from 'react'
import { SideBarContainer } from './styles'
import { SidebarTitle } from '../SidebarTitle/SidebarTitle'
import { SuggestionsFilter } from '../SuggestionFilter/SuggestionsFilter'
import { RoadmapSidebar } from '../RoadmapSidebar/RoadmapSidebar'

export const Sidebar = () => {
    return (
        <SideBarContainer>
            <SidebarTitle/>
            <SuggestionsFilter/>
            <RoadmapSidebar/>
        </SideBarContainer>
    )
}
