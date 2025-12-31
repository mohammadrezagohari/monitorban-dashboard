import { BASE_URL, BASE_URL_FAKE } from "./Base_API"

export const getServerRooms = async () => {
    const res = await fetch(`${BASE_URL_FAKE}/server-room-items`) //TODO:: Fake should be deleted
    if (!res.ok) throw new Error("Failed to fetch server rooms")

    return res.json()
}