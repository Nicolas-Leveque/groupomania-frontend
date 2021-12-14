import '../styles/globals.css'
import { useState } from "react"
import AppContext from "../AppContext"

function MyApp({ Component, pageProps }) {
  const [reload, setReload] = useState(false)
  const [token, setToken ] = useState('')
  const [userId, setUserId ] = useState('')
  const [isAdmin, setIsAdmin ] = useState()
  return (
      <AppContext.Provider
        value={{ token, setToken, userId, setUserId, reload, setReload, isAdmin, setIsAdmin }}
      >
        <Component {...pageProps} />
      </AppContext.Provider>
    )
}

export default MyApp
