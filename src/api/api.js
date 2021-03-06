import * as axios from "axios";

//DAL уровень
const instance = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    withCredentials: true,
    headers: {
        "API-KEY": "a37ab6f5-feea-4ebe-8307-63ace0994a72"
    }})

const usersAPI = {
    getUsers(pageNumber = 1, pageSize = 10) {
        return instance.get(`users?page=${pageNumber}&count=${pageSize}`).then(response => response.data)
    },
    follow(userId) {
        return instance.post(`follow/${userId}`).then(response => response.data)
    },
    unFollow(userId) {
        return instance.delete(`follow/${userId}`).then(response => response.data)
    }
}

export default usersAPI