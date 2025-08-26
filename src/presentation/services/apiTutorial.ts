import { BASE_URL } from "./Base_API"

export const getTutorials = async () => {
    const res = await fetch(`${BASE_URL}/tutorialsData`)
    if (!res.ok) throw new Error("Failed to fetch tutorials")

    return res.json()
}

export const getVideo = async (id: string | undefined) => {
    const res = await fetch(`${BASE_URL}/tutorialsData/${id}`)
    if (!res.ok) throw new Error("Failed to fetch video")

    return res.json()
}