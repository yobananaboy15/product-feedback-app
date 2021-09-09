import React from 'react'
import { SideBarContainer } from './styles'
import { SidebarTitle } from '../SidebarTitle/SidebarTitle'
import { SuggestionsFilter } from '../SuggestionFilter/SuggestionsFilter'
import { RoadmapOverview } from '../RoadmapOverview/RoadmapOverview'

export const Sidebar = () => {
    return (
        <SideBarContainer>
            <SidebarTitle/>
            <SuggestionsFilter/>
            <RoadmapOverview/>
        </SideBarContainer>
    )
}
