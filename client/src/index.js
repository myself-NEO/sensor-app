import axios from 'axios'

const api = axios.create({
    baseURL: 'http://localhost:3000/api',
})

export const insertSensor = payload => api.post(`/sensor`, payload)
export const getAllSensor = () => api.get(`/sensors`)
export const getSensorById = id => api.get(`/movie/${id}`)

const apis = {
    insertSensor,
    getAllSensor,
    getSensorById,
}

export default apis
