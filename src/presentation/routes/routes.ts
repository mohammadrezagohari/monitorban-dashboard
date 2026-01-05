// routes.ts
import Login from "@/presentation/pages/auth/Login";
import Users from "@/presentation/feature/users-management/components/users/Users";
import Sensors from "@/presentation/pages/sensors/Sensors";
import Reports from "@/presentation/pages/reports/Reports";
import Support from "@/presentation/pages/support/Support";
import Tutorial from "@/presentation/pages/tutorial/Tutorial";
import Dashboard from "@/presentation/pages/dashboard/Dashboard";
import RoleUsers from "@/presentation/feature/users-management/components/roles/role-users/RoleUsers";
import RolesPage from "@/presentation/feature/users-management/components/roles/RolesPage";
import AddNewFAQ from "@/presentation/feature/content-management/components/add-new-faq/AddNewFAQ";
import ServerRoom from "@/presentation/pages/server-room/ServerRoom";
import GroupsPage from "@/presentation/feature/users-management/components/groups/GroupsPage";
import CreateGroup from "@/presentation/feature/users-management/components/roles/create-group/CreateGroup";
import AllFAQsPage from "@/presentation/feature/content-management/components/all-faq-page/AllFAQsPage";
import AddNewSensor from "@/presentation/feature/sensors/components/AddNewSensor";
import VideoDetails from "@/presentation/feature/tutorial/components/VideoDetails";
import EditRolePage from "@/presentation/feature/users-management/components/roles/edit-role-page/EditRolePage";
import AddNewAccess from "@/presentation/feature/users-management/components/roles/add-accesses/AddAccesses"
import AccessesPage from "@/presentation/feature/users-management/components/roles/accesses/AccessesPage";
import CenterDetails from "@/presentation/feature/sensors/components/CenterDetails";
import EditGroupPage from "@/presentation/feature/users-management/components/groups/edit-group-page/EditGroupPage";
import EditServerRoom from "@/presentation/feature/server-room/components/edit-server-room/EditServerRoom";
import AddNewTutorial from "@/presentation/feature/content-management/components/add-new-tutorial/AddNewTutorial";
import UsersManagement from "@/presentation/pages/users-management/UsersManagement";
import CitySensorsInfo from "@/presentation/feature/dashboard/components/city-sensors-info/CitySensorsInfo";
import CreateNewSensor from "@/presentation/feature/content-management/components/create-new-sensor/CreateNewSensor";
import { RegisterPage } from "@/presentation/pages/auth/Register";
import CreateServerRoom from "@/presentation/feature/server-room/components/create-server-room/CreateServerRoom";
import AllTutorialsPage from "@/presentation/feature/content-management/components/all-tutorials-page/AllTutorialsPage";
import ContentManagement from "@/presentation/pages/content-management/ContentManagement";
import ReceivedMessagesPage from "@/presentation/feature/content-management/components/messages/ReceivedMessagesPage";
import UserPage from "../feature/users-management/components/users/user-page/UserPage";

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
        path: '/dashboard/city-sensors-info',
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
        path: '/users-management/users/user/:userId',
        component: UserPage,
        requiresAuth: true,
    },
    {
        path: '/users-management/users/add-new-user',
        component: UserPage,
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
        path: '/users-management/roles/access/add-new-access',
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
