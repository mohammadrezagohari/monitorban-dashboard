// routes.ts
import Login from "../pages/auth/Login";
import Sensors from "../pages/sensors/Sensors";
import Reports from "../pages/reports/Reports";
import Support from "../pages/support/Support";
import Tutorial from "../pages/tutorial/Tutorial";
import Dashboard from "../pages/dashboard/Dashboard";
import ServerRoom from "../pages/server-room/ServerRoom";
import AddNewSensor from "../feature/sensors/components/AddNewSensor";
import VideoDetails from "../feature/tutorial/components/VideoDetails";
import CenterDetails from "../feature/sensors/components/CenterDetails";
import UsersManagement from "../pages/users-management/UsersManagement";
import CitySensorsInfo from "../feature/dashboard/components/CitySensorsInfo";
import { RegisterPage } from "../pages/auth/Register";
import CreateServerRoom from "../feature/server-room/components/create-server-room/CreateServerRoom";
import ContentManagement from "../pages/content-management/ContentManagement";
import EditServerRoom from "../feature/server-room/components/edit-server-room/EditServerRoom";

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
        path: '/sensors/:centerName',//
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
        path: '/server-room/create-server-room',
        component: CreateServerRoom,
        requiresAuth: true,
    },
    {
        path: '/server-room/edit-server-room/:roomId',
        component: EditServerRoom,
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
        path: '/tutorials/videos/:id',
        component: VideoDetails,
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
