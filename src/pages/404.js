import React from 'react'
import Helmet from 'react-helmet'
import Layout from '../components/layout'

const NotFoundPage = () => (
  <Layout>
    <Helmet title="Page not found" />
    <h1>404 Page Not Found</h1>
    <div>
      Oops! The content you are looking for does not exist in your Cosmic JS
      Bucket.
    </div>
  </Layout>
)

export default NotFoundPage
