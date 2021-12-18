import {useContext} from 'react'
import AppContext from '../AppContext'
import Image from 'next/image'
import Link from 'next/link'
import {useRouter} from 'next/router'

import styles from '../styles/Header.module.css'

import logo from '../public/logos/icon-left-font-monochrome-white.svg'


export default function Header() {
  const router = useRouter()
  const value = useContext(AppContext)
  let {setReload} = value.setReload
  const handleLogout = () => {
    localStorage.clear()
    setReload(true)
    router.push('/')
  }
  return (
      <header>
        <Link href="/frontpage">
          <a>
            <Image
                width={200}
                height={78}
                objectFit="logo"
                src={logo}
                alt="logo groupomania"
            />
          </a>
        </Link>

        <div className={styles.headerRight}>
          <Link href="/profil">
            <a className={styles.link}>Profil</a>
          </Link>
          <button onClick={handleLogout}>Logout</button>
        </div>
      </header>
  );
}
