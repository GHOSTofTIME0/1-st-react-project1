import axios from "axios";

const instance = axios.create({
    withCredentials: true,
    baseURL: `https://social-network.samuraijs.com/api/1.0/`,
    headers: {
        "API-KEY": "a8b7c93e-c6dd-4dfc-8221-ab1018644f7a",
    }
})

export const followUser = (id) => {
    return instance.post(`https://social-network.samuraijs.com/api/1.0/follow/${id}`, {}, {
        withCredentials: true,
        headers: {
            "API-KEY": "a8b7c93e-c6dd-4dfc-8221-ab1018644f7a"
        }
    }).then(response => response.data)
}

export const unFollowUser = (id) => {
    return instance.delete(`https://social-network.samuraijs.com/api/1.0/follow/${id}`, {
        withCredentials: true,
        headers: {
            "API-KEY": "a8b7c93e-c6dd-4dfc-8221-ab1018644f7a"
        }
    }).then(response => response.data)
}

export const getProfile = (id) => {
    return instance.get(`https://social-network.samuraijs.com/api/1.0/profile/` + id).then(response => response.data)
}

export const getUsers = (currentPage, pageSize) => {
    return instance.get(`https://social-network.samuraijs.com/api/1.0/users?page=${currentPage}&count=${pageSize}`, { withCredentials: true }).then(response => response.data)
}