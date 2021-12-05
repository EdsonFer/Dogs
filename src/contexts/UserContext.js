import { createContext, useCallback, useEffect, useState } from "react"
import { useNavigate } from "react-router";
import { TOKEN_POST, TOKEN_VALIDATE_POST, USER_GET } from "../services/api";

export const UserStorageContext = createContext()

export const UserStorageProvider = ({ children }) => {
    const [data, setData] = useState(null)
    const [login, setLogin] = useState(null)
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(null)
    const navigate = useNavigate()

    async function getUser(token) {
        const { url, options } = USER_GET(token)
        const response = await fetch(url, options)
        const json = await response.json()
        setData(json)
        setLogin(true)
        console.log(json)
    }

    async function userLogin(username, password) {
        try {
            setError(null)
            setLoading(true)
            const { url, options } = TOKEN_POST({ username, password })
            const tokenResponse = await fetch(url, options)
            if (!tokenResponse.ok) throw new Error(`Error: ${tokenResponse.statusText}`)
            const { token } = await tokenResponse.json()
            window.localStorage.setItem('token', token)
            await getUser(token)
            navigate('/conta')
        } catch (err) {
            setError(err.message)
            setLogin(false)
        }
        finally {
            setLoading(false)
        }
    }

    const userLogout = useCallback(async function () {
        setData(null)
        setError(null)
        setLoading(false)
        setLogin(false)
        window.localStorage.removeItem('token')
        navigate('/login')
    }, [navigate])

    useEffect(() => {
        async function autoLogin() {
            const token = window.localStorage.getItem('token')
            if (token) {
                try {
                    setError(null)
                    setLoading(true)
                    const { url, options } = TOKEN_VALIDATE_POST(token)
                    const response = await fetch(url, options)
                    if (!response.ok) throw new Error('Token inválido')
                    await getUser(token)
                } catch (err) {
                    userLogout()
                } finally {
                    setLoading(false)
                }
            }
        }
        autoLogin()
    }, [userLogout])

    return (
        <UserStorageContext.Provider value={{
            userLogin,
            userLogout,
            data,
            login,
            loading,
            error
        }}>
            {children}
        </UserStorageContext.Provider >
    )
}