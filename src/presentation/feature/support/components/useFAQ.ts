import { useQuery } from "@tanstack/react-query"
import { getFAQ } from "src/presentation/services/apiSupport"

function useFAQ() {
    const { isLoading, data: FAQs, isError } = useQuery({
        queryKey: ["FAQs"],
        queryFn: getFAQ,
    })

    return { isLoading, FAQs, isError }
}

export default useFAQ