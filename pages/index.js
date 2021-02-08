import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Link from 'next/link'


export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Sekhametsi </title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
         Home page
        </h1>

        <ul>
      <li>
        <Link href="/">
          <a>Home</a>
        </Link>
      </li>
      <li>
        <Link href="/whoweare">
          <a>Who we are</a>
        </Link>
      </li>
      <li>
        <Link href="/investmentapproach">
          <a>Investment Approach</a>
        </Link>
      </li>
      <li>
        <Link href="/portfolio">
          <a>
            Portfolio
          </a>
        </Link>
      </li>
      <li>
        <Link href="/pressoffice">
          <a>
           Press office
          </a>
        </Link>
      </li>
      <li>
        <Link href="/gallery">
          <a>
          Gallery
          </a>
        </Link>
      </li>
      <li>
        <Link href="/esg">
          <a>
           ESG
          </a>
        </Link>
        
      </li>
      <li>
        <Link href="/contact">
          <a>
         Contact
          </a>
        </Link>
        
      </li>
    </ul>
       
      <div>
        banner section
      </div>

      <div>
        Who we are

      </div>
      <div>
        What we do

      </div>
      <div>
       Where we come from

      </div>
      <div>  
     slider
      </div>
     
      </main>

 
        <ul>
        <li>
        <Link href="/">
          <a>Home</a>
        </Link>
      </li>
      <li>
        <Link href="/whoweare">
          <a>Who we are</a>
        </Link>
      </li>
      <li>
        <Link href="/investmentapproach">
          <a>Investment Approach</a>
        </Link>
      </li>
      <li>
        <Link href="/portfolio">
          <a>
            Portfolio
          </a>
        </Link>
      </li>
      <li>
        <Link href="/gallery">
          <a>
          Gallery
          </a>
        </Link>
      </li>
      <li>
        <Link href="/esg">
          <a>
           ESG
          </a>
        </Link>
        
      </li>
      <li>
        <Link href="/contact">
          <a>
         Contact
          </a>
        </Link>
        
      </li>
    </ul>
    </div>
  )
}
