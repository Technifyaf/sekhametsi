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

export default function IndexPage() {
  return (
  <ThemeProvider theme ={theme}>
    <StickyProvider>
    <Layout>
    <Banner/>
    <Whoweare/>
    <Whatwedo/>
    <Wherewecomefrom/>
    <Bottombanner/>
    </Layout>
    </StickyProvider>
  </ThemeProvider>
  )
}
