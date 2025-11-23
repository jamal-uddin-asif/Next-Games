'use client'
const { AuthContext } = require("@/context/AuthContext")
const { useContext } = require("react")

export const useAuth = () =>{
    const authContext = useContext(AuthContext)
    return authContext
}