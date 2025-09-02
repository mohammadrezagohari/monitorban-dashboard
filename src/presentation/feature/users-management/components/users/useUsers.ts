import { getUsers } from "src/presentation/services/apiUserManagement"
import { useQuery } from "@tanstack/react-query"

function useUsers() {
    const { isLoading, data: users, isError } = useQuery({
        queryKey: ["users"],
        queryFn: getUsers
    })

    return { isLoading, users, isError }
}

export default useUsers