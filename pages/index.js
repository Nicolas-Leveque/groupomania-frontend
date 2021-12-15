import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Header from '../components/Header'
import Test from '../components/Test'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Groupomania</title>
        <meta name="description" content="Reseau social interne de Groupomania" />
        <link rel="icon" href="/public/icon.png" />
      </Head>
      <Header />
      
      
    </div>
  )
}
