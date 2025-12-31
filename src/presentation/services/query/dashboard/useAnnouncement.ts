import { useQuery } from "@tanstack/react-query"
import { fetchAnnouncements } from "src/presentation/services/apiDashboard"

export type AnnouncementStatus = "normal" | "warning" | "danger";

function useAnnouncement(status: AnnouncementStatus) {
    const { isLoading, data: announcementItems, isError } = useQuery({
        queryKey: ["announce-items", status],
        queryFn: () => fetchAnnouncements(status),
    })

    return { isLoading, announcementItems, isError }
}

export default useAnnouncement