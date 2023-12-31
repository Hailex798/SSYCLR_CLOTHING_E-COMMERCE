import React from 'react'
import { NavLink } from 'react-router-dom';
import styled from "styled-components"

const PageNavigation = ({title}) => {
  return (
      <Wrapper>
          <NavLink to="/">{`Home `}</NavLink>  / {title}
      </Wrapper>
  )
}

const Wrapper = styled.section`
  height: 10rem;
  background-color: ${({ theme }) => theme.colors.pureBlack};
  display: flex;
  justify-content: flex-start;
  align-items: center;
  font-size: 3.2rem;
  padding-left: 1.2rem;
  color: white;

  a {
    font-size: 3.2rem;
  }
`;


export default PageNavigation;