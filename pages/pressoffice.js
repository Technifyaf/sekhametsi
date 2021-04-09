


import { ThemeProvider } from 'theme-ui'
import theme from '../theme'
import Layout from '../components/layout'
import Banner from '../sections/home/banner'
import { StickyProvider } from '../contexts/app/app.provider'
import Podcasts from '../sections/pressoffice/podcast'
import Articles from '../sections/pressoffice/articles'
import { VideoProvider } from '../contexts/video/video.provider'
import Modal from '../components/modal'
export default function IndexPage() {
  return (
  <ThemeProvider theme ={theme}>
    <StickyProvider>
    <VideoProvider>
    <Layout>
  
    <Podcasts/>
    <Articles/>
    </Layout>
    <Modal/>
    </VideoProvider>
    </StickyProvider>
  </ThemeProvider>
  )
}
