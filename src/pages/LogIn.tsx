
import { useState } from "react"
import {useRoutes} from "@/hooks/routes.ts";
import { Link } from "react-router";
import {logIn} from "@/firebase/libs.ts";
import {Button} from "@/components/ui/button.tsx";


export default function Login() {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [error, setError] = useState("")
    const [isLoading, setIsLoading] = useState<boolean>(false)

    const {gotoDashboard} = useRoutes()


    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        setError("")
        setIsLoading(true)

        try {

            logIn(email, password)
                .then((user) => {
                    gotoDashboard(user.uid)
            }).catch(err => {
                setIsLoading(false)
                console.error(err)
                setError("Falha ao autenticar, verifique os dados e tente novamente.")
            })

        } catch (err) {
            setIsLoading(false)
            console.error(err)
            setError("Falha ao autenticar, tente novamente mais tarde.")
        }
    }

    return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-green-400 to-blue-500">
            <div className="bg-white p-8 rounded-lg shadow-md w-96">
                <h1 className="text-2xl font-bold mb-6 text-center text-green-600">Inicie sessão para acessar a sua dashboard</h1>
                {error && <p className="text-red-500 text-sm mb-4">{error}</p>}
                <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                            Email
                        </label>
                        <input
                            type="email"
                            id="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500"
                        />
                    </div>
                    <div>
                        <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                            Password
                        </label>
                        <input
                            type="password"
                            id="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500"
                        />
                    </div>
                    <Button
                        disabled={isLoading}
                        type="submit"
                        className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
                    >
                        Iniciar sessão
                    </Button>
                </form>
                <p className="mt-4 text-center text-sm text-gray-600">
                    Não tem uma conta?{" "}
                    <Link to="/signup" className="font-medium text-green-600 hover:text-green-500">
                        Crie já
                    </Link>
                </p>
            </div>
        </div>
    )
}

