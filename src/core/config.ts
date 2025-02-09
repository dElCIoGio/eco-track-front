const ENV = import.meta.env


const appConfig = {
    backend_url: ENV.VITE_BACKEND_URL
}

export const config = {
    app: appConfig
}