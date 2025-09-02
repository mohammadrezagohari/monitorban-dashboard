import { updateUser } from "src/presentation/services/apiUserManagement";
import { useMutation, useQueryClient } from "@tanstack/react-query";

export function useEditUser() {

    const queryClient = useQueryClient();

    const { mutate: editUser, isPending } = useMutation({
        mutationFn: ({ id, updateObj }) => updateUser(id, updateObj),
        onSuccess: () => {
            queryClient.invalidateQueries({
                queryKey: ["users"]
            });
        },
        onError: (err) => {
            console.error("Error updating user:", err);
        }
    })

    return { editUser, isPending }
}