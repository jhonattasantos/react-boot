import { get } from '../utils/request'

// export const login = async (params: any) => get('/login', params)

export const login = async () => {
    const res = await get('/jokes/random', {})
    return res
}