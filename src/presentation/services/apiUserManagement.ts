import { User } from "../feature/users-management/components/users/user-page/IUserPage"
import { BASE_URL } from "./Base_API"

export const getUser = async (id: string | number) => {
    const res = await fetch(`${BASE_URL}/users/${id}`)
    if (!res.ok) throw new Error("Faild to fetch user")

    const data = await res.json()
    return data
}

export const updateUser = async (id: string | number, data: User) => {
    const res = await fetch(`${BASE_URL}/users/${id}`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
    })

    if (!res.ok) throw new Error("Failed to update user")
}

export const getUsers = async () => {
    const res = await fetch(`${BASE_URL}/users`)
    if (!res.ok) throw new Error("Failed to fetch users")

    return res.json()
}

export const getRoles = async () => {
    const res = await fetch(`${BASE_URL}/rolesArray`)
    if (!res.ok) throw new Error("Failed to fetch users")

    return res.json()
}

export const deleteRole = async (roleId:number) => {
    const res = await fetch(`${BASE_URL}/rolesArray/${roleId}`, {
        method: "DELETE",
        // headers: {}
    })
    if (!res.ok) throw new Error("Failed fo delete role")

    return res.json()
}