// routes.ts
import Login from "src/presentation/pages/auth/Login";
import Sensors from "src/presentation/pages/sensors/Sensors";
import Reports from "src/presentation/pages/reports/Reports";
import Support from "src/presentation/pages/support/Support";
import Tutorial from "src/presentation/pages/tutorial/Tutorial";
import Dashboard from "src/presentation/pages/dashboard/Dashboard";
import ServerRoom from "src/presentation/pages/server-room/ServerRoom";
import AllFAQsPage from "src/presentation/feature/content-management/components/all-faq-page/AllFAQsPage";
import AddNewSensor from "src/presentation/feature/sensors/components/AddNewSensor";
import VideoDetails from "src/presentation/feature/tutorial/components/VideoDetails";
import CenterDetails from "src/presentation/feature/sensors/components/CenterDetails";
import EditServerRoom from "src/presentation/feature/server-room/components/edit-server-room/EditServerRoom";
import AddNewTutorial from "src/presentation/feature/content-management/components/add-new-tutorial/AddNewTutorial";
import UsersManagement from "src/presentation/pages/users-management/UsersManagement";
import CitySensorsInfo from "src/presentation/feature/dashboard/components/CitySensorsInfo";
import CreateNewSensor from "src/presentation/feature/content-management/components/create-new-sensor/CreateNewSensor";
import { RegisterPage } from "src/presentation/pages/auth/Register";
import CreateServerRoom from "src/presentation/feature/server-room/components/create-server-room/CreateServerRoom";
import AllTutorialsPage from "src/presentation/feature/content-management/components/all-tutorials-page/AllTutorialsPage";
import ContentManagement from "src/presentation/pages/content-management/ContentManagement";
import ReceivedMessagesPage from "src/presentation/feature/content-management/components/messages/ReceivedMessagesPage";
import AddNewFAQ from "src/presentation/feature/content-management/components/add-new-faq/AddNewFAQ";
import Users from "src/presentation/feature/users-management/components/users/Users";
import RolesPage from "src/presentation/feature/users-management/components/roles/RolesPage";
import GroupsPage from "src/presentation/feature/users-management/components/groups/GroupsPage";
import EditRolePage from "../feature/users-management/components/roles/edit-role-page/EditRolePage";
import AddNewAccess from "src/presentation/feature/users-management/components/roles/add-accesses/AddAccesses"
import RoleUsers from "../feature/users-management/components/roles/role-users/RoleUsers";
import CreateGroup from "../feature/users-management/components/roles/create-group/CreateGroup";
import AccessesPage from "../feature/users-management/components/roles/accesses/AccessesPage";
import EditGroupPage from "../feature/users-management/components/groups/edit-group-page/EditGroupPage";

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
        path: '/users-management/users',
        component: Users,
        requiresAuth: true,
    },
    {
        path: '/users-management/roles',
        component: RolesPage,
        requiresAuth: true,
    },
    {
        path: '/users-management/roles/edit-role',
        component: EditRolePage,
        requiresAuth: true,
    },
    {
        path: '/users-management/roles/edit-role/add-new-access',
        component: AddNewAccess,
        requiresAuth: true,
    },
    {
        path: '/users-management/roles/users',
        component: RoleUsers,
        requiresAuth: true,
    },
    {
        path: '/users-management/roles/users/create-group',
        component: CreateGroup,
        requiresAuth: true,
    },
    {
        path: '/users-management/roles/access',
        component: AccessesPage,
        requiresAuth: true,
    },
    {
        path: '/users-management/groups',
        component: GroupsPage,
        requiresAuth: true,
    },
    {
        path: '/users-management/groups/edit-group',
        component: EditGroupPage,
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
        path: "/content-management",
        component: ContentManagement,
        requiresAuth: true,
    },
    {
        path: "/content-management/tutorials",
        component: AllTutorialsPage,
        requiresAuth: true,
    },
    {
        path: "/content-management/messages",
        component: ReceivedMessagesPage,
        requiresAuth: true,
    },
    {
        path: "/content-management/add-tutorial",
        component: AddNewTutorial,
        requiresAuth: true,
    },
    {
        path: "/content-management/create-sensor",
        component: CreateNewSensor,
        requiresAuth: true,
    },
    {
        path: "/content-management/FAQs",
        component: AllFAQsPage,
        requiresAuth: true,
    },
    {
        path: "/content-management/add-new-FAQ",
        component: AddNewFAQ,
        requiresAuth: true,
    },
];
