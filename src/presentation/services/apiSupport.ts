import { BASE_DEV_URL } from "./Base_API"

export const getFAQ = async () => {
    const res = await fetch(`${BASE_DEV_URL}/FAQs`)
    if (!res.ok) throw new Error("Failed to fetch FAQs")

    return res.json()
}