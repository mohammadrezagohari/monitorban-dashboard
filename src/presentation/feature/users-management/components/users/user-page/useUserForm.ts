import { useEffect } from "react"
import { useForm } from "react-hook-form"

function useUserForm(userData) {
    const methods = useForm({
        defaultValues: userData
    })

    useEffect(() => {
        if (userData) methods.reset(userData)
    }, [userData, methods])
    return methods
}

export default useUserForm