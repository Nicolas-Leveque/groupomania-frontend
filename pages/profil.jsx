import Head from 'next/head'
import Header from '../components/Header'
import Footer from '../components/Footer'
import UserProfil from '../components/UserProfil'

export default function userProfil() {
    
    return (
        <div>
            <Head>
                <title>Groupomania</title>
                <meta name="description" content="Page de profil"/>
                <link rel="icon" href="/public/icon.png"/>
            </Head>
            <Header/>
            <UserProfil />
            <Footer/>
        </div>
    );
}

