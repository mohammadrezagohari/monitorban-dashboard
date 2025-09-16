import { getServerRooms } from "src/presentation/services/apiServerRoom";
import { useQuery } from "@tanstack/react-query";

export function useServerRoom() {
    const { isLoading, data: serverRooms, isError } = useQuery({
        queryKey: ["serverRoomItems"],
        queryFn: getServerRooms
    })

    return { isLoading, isError, serverRooms }
}