import Head from 'next/head'
import Link from 'next/link'
import Header from '../components/header/header'


import { Slider, ThemeProvider } from 'theme-ui'
import theme from '../theme'
import Layout from '../components/layout'
import Banner from '../sections/home/banner'
import { StickyProvider } from '../contexts/app/app.provider'
import TenderList from '../sections/tenders/tenders_list'

export default function IndexPage() {
  return (
  <ThemeProvider theme ={theme}>
    <StickyProvider>
    <Layout>
     
      <TenderList/>

    </Layout>
    </StickyProvider>
  </ThemeProvider>
  )
}
