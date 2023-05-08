import axiosClient from "./axiosClient"

export const getAllUser = async () => {
    return axiosClient.get('/posts').then((res) => res.data)
}
