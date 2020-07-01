import React from 'react'
import styled from 'styled-components'
import { Base64 } from '../../types'
import { useLayoutQuery } from './layout.query'

const LayoutOuter = styled.div<{ image: Base64 }>`
  display: flex;
  width: 100%;
  min-height: 100vh;
  align-items: center;
  justify-content: center;
  position: relative;
  overflow: hidden;

  &::before {
    display: block;
    content: '';
    position: absolute;
    top: -10px;
    left: -10px;
    right: -10px;
    bottom: -10px;
    background: url(${(p) => p.image});
    background-size: cover;
    filter: blur(10px);
    opacity: 0.3;
  }
`

const LayoutInner = styled.div`
  position: relative;
  max-width: 60rem;
  z-index: 1;
  padding: 2rem;
`

const Layout: React.FC = ({ children }) => {
  const { file } = useLayoutQuery()

  return (
    <LayoutOuter image={file.childImageSharp.fluid.base64}>
      <LayoutInner>{children}</LayoutInner>
    </LayoutOuter>
  )
}

export default Layout
