import { getTutorials } from "@/presentation/services/apiTutorial"
import { useQuery } from "@tanstack/react-query"

function useTutorial() {
    const { isLoading, data: videos, isError } = useQuery({
        queryKey: ["tutorialsData"],
        queryFn: getTutorials
    })

    return { isLoading, videos, isError }
}

export default useTutorial