import { useQuery } from "@tanstack/react-query"
import { getServerRooms } from "@/presentation/services/apiDashboard"

function useServerRooms() {
    const { isLoading, data: serverRoomItems, isError } = useQuery({
        queryKey: ["serverRoomItems"],
        queryFn: getServerRooms,
    })

    return { serverRoomItems, isLoading, isError }
}

export default useServerRooms