import { useQuery } from "@tanstack/react-query"
import { getUsers } from "src/presentation/services/apiDashboard"

function useLatestUsers() {
    const { isLoading, data: users, isError } = useQuery({
        queryKey: ["users"],
        queryFn: getUsers
    })

    return { isLoading, users, isError }
}

export default useLatestUsers