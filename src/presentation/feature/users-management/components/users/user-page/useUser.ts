import { useQuery } from "@tanstack/react-query"
import { getUser } from "src/presentation/services/apiUserManagement"

function useUser(id: string) {
    const { isLoading, data: userData, isError } = useQuery({
        queryKey: ['users', id],
        queryFn: () => getUser(id),
    })

    console.log(userData)

    return { isLoading, userData, isError }
}

export default useUser