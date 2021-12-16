import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Header from '../components/Header'
import LoginRegister from '../components/LoginRegister'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Groupomania</title>
        <meta name="description" content="Reseau social interne de Groupomania" />
        <link rel="icon" href="/public/icon.png" />
      </Head>
      <Header />
      <LoginRegister />
      {console.log('adresse', process.env.BACKEND_ADDRESS)}

      
      
    </div>
  )
}
