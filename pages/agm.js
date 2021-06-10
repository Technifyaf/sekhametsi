import Head from 'next/head'
import Link from 'next/link'
import Header from '../components/header/header'


import { ThemeProvider } from 'theme-ui'
import theme from '../theme'
import Layout from '../components/layout'
import { StickyProvider } from '../contexts/app/app.provider'
import Resources from '../sections/agm/resources'


export default function IndexPage() {
  return (
  <ThemeProvider theme ={theme}>
    <StickyProvider>
    <Resources/>
    </StickyProvider>
  </ThemeProvider>
  )
}
