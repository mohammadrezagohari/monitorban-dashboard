import { BASE_URL } from "./Base_API"

export const getServerRooms = async () => {
    const res = await fetch(`${BASE_URL}/serverRoomItems`)
    if (!res.ok) throw new Error("Failed to fetch server rooms")

    return res.json()
}