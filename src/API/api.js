import axios from 'axios'

export const instance = axios.create({
    baseURL: 'https://frontend-test-assignment-api.abz.agency/api/v1'
})

export const getUsersAPI = (page, count) => {
    return instance.get(`/users?page=${page}&count=${count}`)
}
export const getTokenAPI = () => {
    return instance.get(`/token`)
}
export const registerAPI = (values, token) => {

    const formData = new FormData();
    formData.append("photo", values.photo)
    formData.append("name", values.name)
    formData.append("email", values.email)
    formData.append("phone", values.phone)
    formData.append("position_id", values.position_id)

    return instance.post('./users', formData, {
        headers: {
            'Content-Type': 'multipart/form-data',
            'token': token
        }
    })
}
