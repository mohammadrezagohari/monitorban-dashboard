import { BASE_URL_FAKE } from "./Base_API"

export const getTutorials = async () => {
    const res = await fetch(`${BASE_URL_FAKE}/tutorials-data`)
    if (!res.ok) throw new Error("Failed to fetch tutorials")

    return res.json()
}

export const getVideo = async (id: string | undefined) => {
    const res = await fetch(`${BASE_URL_FAKE}/tutorials-data/${id}`)
    if (!res.ok) throw new Error("Failed to fetch video")

    return res.json()
}