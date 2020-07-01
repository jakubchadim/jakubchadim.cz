import React from 'react'
import styled from 'styled-components'
import { useLayoutQuery } from '../layout/layout.query'

const ContactInner = styled.div`
  margin-top: 7rem;
  letter-spacing: 0.1rem;
`

const Light = styled.span`
  opacity: 0.5;
  font-weight: 100;
`

const Link = styled.a`
  color: inherit;
  text-decoration: underline;
  opacity: 0.5;
  transition: opacity 0.1s;

  &:hover {
    opacity: 1;
  }
`

type ContactProps = {
  name: string
  city: string
  age: number
  email: string
  cv: string
}

const Contact: React.FC<ContactProps> = ({ name, city, age, email, cv }) => (
  <ContactInner>
    <Light>
      {name} - {city}, {age} years,{' '}
    </Light>
    <Link href={`mailto:${email}`}>{email}</Link>
    <Light>, </Light>
    <Link href={cv} target='_blank'>
      cv.pdf
    </Link>
  </ContactInner>
)

export default Contact
