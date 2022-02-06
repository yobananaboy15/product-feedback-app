import * as S from './styles'
import { SidebarTitle } from '../SidebarTitle/SidebarTitle'
import { SuggestionsFilter } from '../SuggestionFilter/SuggestionsFilter'
import { RoadmapSidebar } from '../RoadmapSidebar/RoadmapSidebar'

export const Sidebar = () => {
    return (
        <S.SideBarContainer>
            <SidebarTitle/>
            <SuggestionsFilter/>
            <RoadmapSidebar/>
        </S.SideBarContainer>
    )
}
