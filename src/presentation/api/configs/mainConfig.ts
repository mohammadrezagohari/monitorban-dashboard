type Environment = "development" | "production";

// Retrieve environment variable
const environment: Environment = (process.env.REACT_APP_ENV as Environment) || "development";

// Base URL based on environment
export const baseUrl: string = environment === "production"
    ? "https://api.monitorban.gandom.link"
    : "http://localhost:7000";


export const endpoints = {
    // Dashboard
    announceItems: `${baseUrl}/announce-items`,

    users: `${baseUrl}/users}`,
    sensors: `${baseUrl}/sensors}`,
    serverRoomItems: `${baseUrl}/server-room-items}`,
    sensorsItems: `${baseUrl}/sensors-items}`,
    navItems: `${baseUrl}/nav-items}`,
    sensorsData: `${baseUrl}/sensors-data}`,
    announceSelectOptions: `${baseUrl}/announce-select-options}`,
    temperatureBarChart: `${baseUrl}/temperature-bar-chart}`,
    chartSelectOptions: `${baseUrl}/chart-select-options}`,
    serverRoomOptions: `${baseUrl}/server-room-options}`,
    rolesArray: `${baseUrl}/roles-array}`,
    sensorsTreeItem: `${baseUrl}/sensors-tree-item}`,
    groupsList: `${baseUrl}/groups-list}`,
    FAQs: `${baseUrl}/FAQs}`,
    detailedReportsData: `${baseUrl}/detailed-reports-data}`,
    messages: `${baseUrl}/messages}`,
    sensorsSettingItems: `${baseUrl}/sensors-setting-items}`,
    tutorialsData: `${baseUrl}/tutorials-data}`,
}