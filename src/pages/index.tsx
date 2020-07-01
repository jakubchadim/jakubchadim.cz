import React from 'react'
import Contact from '../components/contact/contact'
import SEO from '../components/seo/seo'
import Layout from '../components/layout/layout'
import Content from '../components/content/content'

const HomePage: React.FC = () => (
  <Layout>
    <SEO title='Welcome' />

    <h1>Javascript developer</h1>

    <h2>Worked for</h2>
    <Content>Oddin, RTSmunity, bPromotion, Rency, Pixelmate</Content>

    <h2>Using</h2>
    <Content>React, TypeScript, GraphQL, Electron, Nette, GIT, Docker</Content>

    <h2>Worked on</h2>
    <Content>
      microservices, desktop&nbsp;apps, websites, web&nbsp;scraping
    </Content>

    <Contact
      name='Jakub Chadim'
      city='Kostelec nad Orlicí'
      age={24}
      email='ja@jakubchadim.cz'
      cv='/documents/cv_chadim.pdf'
    />
  </Layout>
)

export default HomePage
