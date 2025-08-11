// import Announcements from "../feature/dashboard/components/announcementes/Announcements";

interface Announcements {
    id: number;
    name: string;
    report: string;
    icon: string;
    status: "normal" | "warning" | "danger";
}

const BASE_URL = "http://localhost:7000"

export const fetchAnnouncements = async (status: Announcements["status"]): Promise<Announcements[]> => {
    const res = await fetch(`${BASE_URL}/announceItemsInit`)
    if (!res.ok) throw new Error("Failed to fetch announcements")
    const data = await res.json();
    // console.log(data)
    return data.filter((item: Announcements) => item.status === status)
}