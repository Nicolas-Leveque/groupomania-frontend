import  { useState, useEffect, useContext } from 'react'
import AppContext from '../AppContext'
import Image from 'next/image'
import styles from '../styles/Profil.module.css'



export default function UserProfil({ user }) {

  const [data, setData] = useState([])
  const value = useContext(AppContext)
  let { reload, setReload } = value
  
  useEffect( () => {
    const myHeaders = new Headers({
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + localStorage.getItem('token')
    })
    fetch('http://localhost:3001/me', {
      method: 'get',
      headers: myHeaders,
    }).then(response => response.json())
    .then(json => {
      const tempDate = new Date(json.createdAt)
      json.createdAt = tempDate.toDateString()
      setData(json)
    })
  }, [])

  return (
    <div className={styles.userProfil}>
      <h2>{data.fullName}</h2>
      <p>Inscrit depuis le {data.createdAt}</p>
      <div className={styles.userContainer}>
      <div className={styles.profilPhoto}>
          <Image
            width={100}
            height={100}
            objectFit="profil photo"
            src={`http://localhost:3001/${data.imageUrl}`}
            alt="photo de profil"
          />
          {`http://localhost:3001/${data.imageUrl}`}
          <br />
          <button>Choisir une photo</button>
        </div>
      </div>
    </div>
  );
}

