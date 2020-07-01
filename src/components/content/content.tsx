import React from 'react'
import styled from 'styled-components'

const Content = styled.div`
  font-size: 2rem;
  font-weight: 100;
  margin: 0;

  &:after {
    content: '...';
    opacity: 0.5;
  }

  ${(p) => p.theme.media.sm.up} {
    font-size: 3rem;
  }
`

export default Content
