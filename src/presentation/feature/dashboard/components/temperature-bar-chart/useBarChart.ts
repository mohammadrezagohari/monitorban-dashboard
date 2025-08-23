import { useQuery } from "@tanstack/react-query"
import { PeriodTypes } from "./ITemperatureBarChart"
import { getBarChartValues } from "src/presentation/services/apiDashboard"

function useBarChart(period: PeriodTypes) {
    const { isLoading, isError, data: barChartData } = useQuery({
        queryKey: ["temperatureBarChart", period],
        queryFn: () => getBarChartValues(period),
    })

    return { isError, isLoading, barChartData }
}

export default useBarChart