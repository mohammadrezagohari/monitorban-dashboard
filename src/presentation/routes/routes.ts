// routes.ts
import Login from "../pages/auth/Login";
import Sensors from "../pages/sensors/Sensors";
import Reports from "../pages/reports/Reports";
import Support from "../pages/support/SupportPage";
import Tutorial from "../pages/tutorial/Tutorial";
import Dashboard from "../pages/dashboard/Dashboard";
import ServerRoom from "../pages/server-room/ServerRoomPage";
import AddNewSensor from "../feature/sensors/components/AddNewSensor";
import CenterDetails from "../feature/sensors/components/CenterDetails";
import UsersManagement from "../pages/users-management/UsersManagement";
import CitySensorsInfo from "../feature/dashboard/components/CitySensorsInfo";
import { RegisterPage } from "../pages/auth/Register";
import ContentManagement from "../pages/content-management/ContentManagement";

export const routes = [
    {
        path: '/login',
        component: Login,
    },
    {
        path: '/register',
        component: RegisterPage,
    },
    {
        path: '/dashboard',
        component: Dashboard,
        requiresAuth: true,
    },
    {
        path: '/city-sensors-info',
        component: CitySensorsInfo,
        requiresAuth: true,
    },
    {
        path: '/sensors',
        component: Sensors,
        requiresAuth: true,
    },
    {
        path: '/sensors/:centerName',
        component: CenterDetails,
        requiresAuth: true,
    },
    {
        path: '/sensors/add-new-sensor',
        component: AddNewSensor,
        requiresAuth: true,
    },
    {
        path: '/server-room',
        component: ServerRoom,
        requiresAuth: true,
    },
    {
        path: '/reports',
        component: Reports,
        requiresAuth: true,
    },
    {
        path: '/users-management',
        component: UsersManagement,
        requiresAuth: true,
    },
    {
        path: '/tutorials',
        component: Tutorial,
        requiresAuth: true,
    },
    {
        path: '/support',
        component: Support,
        requiresAuth: true,
    },

    {
        path: "content-management",
        component: ContentManagement,
        requiresAuth: true,
    },
];
