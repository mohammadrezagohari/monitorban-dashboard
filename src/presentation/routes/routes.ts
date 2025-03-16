// routes.ts
import Test from '../feature/test/Test';
import { LoginPage } from '../pages/auth/Login';
import { RegisterPage } from '../pages/auth/Register';
import { DashboardPage } from '../pages/dashboard';
import HomePage from '../pages/HomePage';

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
    {
        path: '/test',
        component: Test,
    },
    {
        path: '/',
        component: HomePage,
        requiresAuth: true,
    },

];
