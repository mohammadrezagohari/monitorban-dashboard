import { useQuery } from "@tanstack/react-query";
import { getRoles } from "src/presentation/services/apiUserManagement";

export function useRolesPage() {
    const { isLoading, isError, data: rolesList } = useQuery({
        queryKey: ["rolesArray"],
        queryFn: getRoles,
    })

    return { isLoading, isError, rolesList }
}