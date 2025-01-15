// routes.ts
import {LoginPage} from '../pages/auth/Login';
import { RegisterPage } from '../pages/auth/Register'; 
import { DashboardPage } from '../pages/dashboard';

export const routes = [
    {
        path: '/login',
        component: LoginPage,
    },
    {
        path: '/register',
        component: RegisterPage,
    },
    {
        path: '/dashboard',
        component: DashboardPage,
        requiresAuth: true,
    },
];
