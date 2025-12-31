import { User } from "../feature/users-management/components/users/user-page/IUserPage"
import { BASE_URL, BASE_URL_FAKE } from "./Base_API"

export const getUser = async (id: string | number) => {
    const res = await fetch(`${BASE_URL_FAKE}/users/${id}`)  //TODO:: Fake should be deleted
    if (!res.ok) throw new Error("Faild to fetch user")

    const data = await res.json()
    return data
}

export const updateUser = async (id: string | number, data: User) => {
    const res = await fetch(`${BASE_URL_FAKE}/users/${id}`, { //TODO:: Fake should be deleted
        method: "PUT",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
    })

    if (!res.ok) throw new Error("Failed to update user")
}

export const getUsers = async () => {
    const res = await fetch(`${BASE_URL_FAKE}/users`) //TODO:: Fake should be deleted
    if (!res.ok) throw new Error("Failed to fetch users")

    return res.json()
}

export const getRoles = async () => {
    const res = await fetch(`${BASE_URL_FAKE}/roles-array`) //TODO:: Fake should be deleted
    if (!res.ok) throw new Error("Failed to fetch users")

    return res.json()
}

export const deleteRole = async (roleId:number) => {
    const res = await fetch(`${BASE_URL_FAKE}/roles-array/${roleId}`, { //TODO:: Fake should be deleted
        method: "DELETE",
        // headers: {}
    })
    if (!res.ok) throw new Error("Failed fo delete role")

    return res.json()
}