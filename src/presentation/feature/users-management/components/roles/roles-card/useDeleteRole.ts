import { deleteRole as deleteRoleApi } from "src/presentation/services/apiUserManagement";
import { useMutation, useQueryClient } from "@tanstack/react-query";

export function useDeleteRole() {
    const queryClient = useQueryClient();

    const { isPending: isDeleting, mutate: deleteRole } = useMutation({
        mutationFn: deleteRoleApi,
        onSuccess: () => {
            queryClient.invalidateQueries({
                queryKey: ["rolesArray"]
            })
        }
    })

    return { isDeleting, deleteRole }
}