import React from 'react'
import Helmet from 'react-helmet'
import Layout from '../../components/layout'

const NotFoundPage = () => (
  <Layout locale={'de'}>
    <Helmet title="Seite nicht gefunden" />
    <h1>404 Seite nicht gefunden</h1>
    <div>
      Oops! Der Inhalt, nach dem Sie suchen, existiert nicht in Ihrem Cosmic JS
      Eimer.
    </div>
  </Layout>
)

export default NotFoundPage
