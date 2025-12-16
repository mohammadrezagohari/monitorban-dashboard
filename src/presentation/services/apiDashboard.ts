import { PeriodTypes } from "../feature/dashboard/components/temperature-bar-chart/ITemperatureBarChart";
import { BASE_URL_FAKE } from "./Base_API";

interface Announcements {
    id: number;
    name: string;
    report: string;
    icon: string;
    status: "normal" | "warning" | "danger";
}

interface Sensor {
    name: string;
    data: number;
    category: string;
    status: string;
}

interface ServerRooms {
    title: string;
    icon: string;
    city: string;
    sensor: number;
    rack: number;
    id: string;
    status: string;
    sensors: Sensor[];

}

interface Sensors {
    id: number;
    name: string;
    icon: string;
    normalSensorCount: number;
    warningSensorCount: number;
    dangerSensorCount: number;
}

interface User {
    id: number;
    fullName: string;
    image?: string;
    position: string;
    phone?: string;
    roles?: string[];
    groups?: string[];
    accesses?: string[];
}

interface BarChartData {
    values: string[];
}


export const fetchAnnouncements = async (status: Announcements["status"]): Promise<Announcements[]> => {
    const res = await fetch(`${BASE_URL_FAKE}/announce-items`)
    if (!res.ok) throw new Error("Failed to fetch announcements")
    const data = await res.json();

    return data.filter((item: Announcements) => item.status === status)
}

export const getServerRooms = async (): Promise<ServerRooms[]> => {
    const res = await fetch(`${BASE_URL_FAKE}/server-room-items`)
    if (!res.ok) throw new Error("Failed to fetch server rooms")

    return res.json()
}

export const getSensorsItem = async (): Promise<Sensors[]> => {
    const res = await fetch(`${BASE_URL_FAKE}/sensors-items`)
    if (!res.ok) throw new Error("Failed to fetch sensors")

    return res.json()
}

export const getUsers = async (): Promise<User[]> => {
    const res = await fetch(`${BASE_URL_FAKE}/users`)
    if (!res.ok) throw new Error("Failed to fetch users")

    return res.json()
}

export const getBarChartValues = async (peroid: PeriodTypes): Promise<BarChartData[]> => {
    const res = await fetch(`${BASE_URL_FAKE}/temperature-bar-chart/?period=${peroid}`)
    if (!res.ok) throw new Error("Failed to fetch temperature data")

    return res.json()
}