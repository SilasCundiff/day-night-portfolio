import React, { useState } from 'react';
import styled from 'styled-components';

const StyledAccordion = styled.div`
  min-height: 100%;
  & h2 {
    margin: 0;
    padding: 0;
    font-size: 18px;
    cursor: pointer;
    ${({
      theme: {
        fonts: { primaryFont },
        colors: { secondaryHex },
      },
    }) =>
      `font-family: ${primaryFont.font}; font-weight: ${primaryFont.fontWeight}; color: ${secondaryHex}AA`};
  }
  & h2.active,
  & h2:hover {
    ${({
      theme: {
        colors: { secondaryHex },
      },
    }) => `color: ${secondaryHex}FF`};
  }
  & p {
    max-height: 0;
    opacity: 0;
    visibility: hidden;
    ${({
      theme: {
        fonts: { secondaryFont },
      },
    }) =>
      `font-family: ${secondaryFont.font}; font-weight: ${secondaryFont.fontWeight}`}
  }
  & p.active {
    max-height: fit-content;
    opacity: 1;
    visibility: visible;
  }
  & a,
  & a:visited {
    font-weight: 700;
  }
`;

function Accordion({ items }) {
  const [active, setActive] = useState(null);

  const handleClick = (index) => {
    if (index === active) {
      setActive(null);
      return;
    }
    setActive(index);
  };

  const content = items.map(
    ({ question, answer, linkLabel, linkURL }, index) => {
      return (
        <React.Fragment key={question}>
          <h2
            className={`question ${index === active ? 'active' : ''}`}
            onClick={() => handleClick(index)}
          >
            {question}
          </h2>
          <p className={`answer ${index === active ? 'active' : ''}`}>
            {answer} <a href={linkURL}>{linkLabel}</a>
          </p>
        </React.Fragment>
      );
    }
  );

  return <StyledAccordion>{content}</StyledAccordion>;
}

export default Accordion;
