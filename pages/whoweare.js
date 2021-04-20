import Head from 'next/head'
import Link from 'next/link'
import Header from '../components/header/header'


import { Slider, ThemeProvider } from 'theme-ui'
import theme from '../theme'
import Layout from '../components/layout'
import Banner from '../sections/home/banner'
import { StickyProvider } from '../contexts/app/app.provider'
import Whoweare from '../sections/home/whoweare'
import Whatwedo from '../sections/home/whatwedo'
import Wherewecomefrom from '../sections/home/wherewecomefrom'
import Bottombanner from '../sections/home/bottombanner'
import Story from '../sections/whoweare/story'
import Future from '../sections/whoweare/future'
import Board from '../sections/whoweare/board'
import History from '../sections/whoweare/history'
import Governance from '../sections/whoweare/governance'
import Financials from '../sections/whoweare/financials'
import Sliderbox from '../sections/whoweare/slider'

export default function IndexPage() {
  return (
  <ThemeProvider theme ={theme}>
    <StickyProvider>
    <Layout>
     
      <Story/>
      <History/>
      <Future/>
      <Board/>
      <Governance/>
      <Financials/>

    </Layout>
    </StickyProvider>
  </ThemeProvider>
  )
}
