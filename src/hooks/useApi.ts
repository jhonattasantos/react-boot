import { post } from "../utils/request"

export const useApi = () => ({
    validaToken: async (token: string) => {
        const response = await post('/validate-token', { token })
        return response.data
    },
    login: async (email: string, password: string) => {
        const response = await post('/login', { email, password })
        return response.data
    },
    logout: async () => {
        // const response = await post('/logout')
        // return response.data
    }
})