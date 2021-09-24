import Router from "next/router"
import { destroyCookie } from "nookies"
import { useContext, useEffect } from "react"
import { AuthContext, signOut } from "../contexts/AuthContext"
import { api } from "../services/api"

export default function Dashboard() {
  const { user } = useContext(AuthContext)

  useEffect(() => {
    api.get('/me')
      .then(response => console.log(response?.data))
      .catch(() => {
        signOut();
      })
  }, [])

  return (
    <h1>Dashboard: {user?.email}</h1>
  )
}