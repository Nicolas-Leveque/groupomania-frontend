import  { useState, useEffect, useContext } from 'react'
import AppContext from '../AppContext'

export default function UserProfil() {

  const [data, setData] = useState([])
  const value = useContext(AppContext)
  let { reload, setReload } = value.state

  const myHeaders = new Headers({
    'Content-Type': 'application/json',
    'Authorization': 'Bearer ' + localStorage.getItem('token')
  })

  useEffect(() => {

    fetch('http://localhost:3001/me', {
      method: 'get',
      headers: myHeaders,
    }).then((response) => response.json())    
    .then((json) => {
      const tempDate = new Date(json.createdAt)
      json.createdAt = tempDate.toDateString()
      setData( json )
    })
    console.log(data)
  }, [reload, setReload])

  return (
    <div>
      Enter
    </div>
  );
}