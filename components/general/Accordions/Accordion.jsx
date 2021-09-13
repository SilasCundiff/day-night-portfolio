import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { Container, Content, Header, Item, Title } from './AccordionComponents';
import { AccordionProvider } from './AccordionContext';

const StyledAccordion = styled.div`
  /* background: red; */
  /* border-radius: 5px; */
`;

const Accordion = ({ children, ...restProps }) => {
  const [activeId, setActiveId] = useState(null);

  return (
    <AccordionProvider value={{ activeId, setActiveId }}>
      <StyledAccordion {...restProps}>{children}</StyledAccordion>
    </AccordionProvider>
  );
};

Accordion.Container = Container;
Accordion.Content = Content;
Accordion.Header = Header;
Accordion.Item = Item;
Accordion.Title = Title;

export default Accordion;
