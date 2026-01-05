import { useQuery } from "@tanstack/react-query"
import { getSensorsItem } from "@/presentation/services/apiDashboard"

function useSensorsDetail() {
    const { isLoading, data: sensorsItems, isError } = useQuery({
        queryKey: ["sensorsItems"],
        queryFn: getSensorsItem
    })

    return { sensorsItems, isLoading, isError }
}

export default useSensorsDetail