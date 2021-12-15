import Head from 'next/head'
import Header from '../components/Header'
export default function ProfileProvider() {
  return (
    <div>
      <Head>
        <title>Groupomania</title>
        <meta name="description" content="Page de profil" />
        <link rel="icon" href="/public/icon.png" />
      </Head>
      <Header />
      <p>page de profil</p>
    </div>
  );
}