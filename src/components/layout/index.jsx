import Head from 'next/head'
import Header from 'components/header'

const Layout = ({ children, page }) => {
  return (
    <div>
      <Head>
        <title>{page}</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>
        <Header currentPosition={page} />
        {children}
      </div>
    </div>
  )
}

Layout.defaultProps = {
  page: 'List'
}

export default Layout
