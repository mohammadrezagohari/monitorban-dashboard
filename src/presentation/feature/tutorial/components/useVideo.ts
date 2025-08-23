import { useQuery } from "@tanstack/react-query"
import { getVideo } from "src/presentation/services/apiTutorial"

function useVideo(id: string | undefined) {
    const { isLoading, data: video, isError } = useQuery({
        queryKey: ["tutorialsData", id],
        queryFn: () => getVideo(id)
    })

    return { isLoading, video, isError }
}

export default useVideo