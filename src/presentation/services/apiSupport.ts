import { BASE_URL, BASE_URL_FAKE } from "./Base_API"

export const getFAQ = async () => {
    const res = await fetch(`${BASE_URL_FAKE}/FAQs`) //TODO:: Fake should be deleted
    if (!res.ok) throw new Error("Failed to fetch FAQs")

    return res.json()
}