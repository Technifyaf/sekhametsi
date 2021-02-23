import Head from 'next/head'
import Link from 'next/link'
import Header from '../components/header/header'


import { ThemeProvider } from 'theme-ui'
import theme from '../theme'
import Layout from '../components/layout'
import Banner from '../sections/home/banner'
import { StickyProvider } from '../contexts/app/app.provider'
import Whoweare from '../sections/home/whoweare'
import Whatwedo from '../sections/home/whatwedo'
import Wherewecomefrom from '../sections/home/wherewecomefrom'
import Bottombanner from '../sections/home/bottombanner'
import Podcasts from '../sections/pressoffice/podcast'
import Articles from '../sections/pressoffice/articles'

export default function IndexPage() {
  return (
  <ThemeProvider theme ={theme}>
    <StickyProvider>
    <Layout>
    <Banner/>
    <Articles/>
    <Podcasts/>
    <Bottombanner/>

    </Layout>
    </StickyProvider>
  </ThemeProvider>
  )
}
