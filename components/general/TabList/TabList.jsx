import { useState, useEffect } from 'react';
import {
  Tab,
  Panel,
  TabsContainer,
  PanelsContainer,
} from './TabListComponents';
import { TabListProvider } from './TabListContext';
import styled from 'styled-components';

const StyledTabList = styled.div`
  height: 98%;
  width: 98%;
  display: flex;
  flex-direction: column;
  margin: 0.2rem 0.2rem;
  @media only screen and (min-width: 1280px) {
    margin: auto 2rem;
    height: 95%;
    /* margin: 2rem 2.5rem 0; */
    /* margin: auto; */
    /* padding: 0.5rem 1rem 0; */
  }
`;

function TabList({ children }) {
  const [activeTabIndex, setActiveTabIndex] = useState(0);

  return (
    <TabListProvider value={{ activeTabIndex, setActiveTabIndex }}>
      <StyledTabList>{children}</StyledTabList>
    </TabListProvider>
  );
}

TabList.Tab = Tab;
TabList.Panel = Panel;
TabList.TabsContainer = TabsContainer;
TabList.PanelsContainer = PanelsContainer;

export default TabList;
