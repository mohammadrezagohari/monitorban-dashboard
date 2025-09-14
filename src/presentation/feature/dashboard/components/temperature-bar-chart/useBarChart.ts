import { useQuery, useQueryClient } from "@tanstack/react-query"
import { PeriodTypes } from "./ITemperatureBarChart"
import { getBarChartValues } from "src/presentation/services/apiDashboard"
import { useEffect } from "react"

const PERIODS: PeriodTypes[] = ["1y", "6m", "3m", "1m", "1w", "1d"]

function useBarChart(period: PeriodTypes) {
    const queryClient = useQueryClient()
    const { isLoading, isError, data: barChartData } = useQuery({
        queryKey: ["temperatureBarChart", period],
        queryFn: () => getBarChartValues(period),
    })

    useEffect(() => {
        PERIODS.forEach((p) => {
            if (p !== period) {
                queryClient.prefetchQuery({
                    queryKey: ["temperatureBarChart", p],
                    queryFn: () => getBarChartValues(p),
                })
            }
        })
    }, [period, queryClient])

    return { isError, isLoading, barChartData }
}

export default useBarChart