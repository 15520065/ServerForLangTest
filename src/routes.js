import Register from 'layouts/Auth/Register.jsx';
import Login from 'layouts/Auth/Login.jsx';
import Manage from './layouts/Main/Manage';
import QRForm from "./views/examples/QRForm";

const routes = [
    {
        path: '/login',
        name: 'Login',
        icon: 'ni ni-key-25 text-info',
        component: Login,
        layout: '/auth',
        type: 'auth'
    },
    {
        path: '/signup',
        name: 'Register',
        icon: 'ni ni-circle-08 text-pink',
        component: Register,
        layout: '/auth',
        type: 'auth'
    },

    {
        path: '/manage',
        name: 'Manage',
        icon: 'ni ni-single-02 text-yellow',
        component: Manage,
        layout: '/app',
        type: 'private'
    },


    {
        path: '/barcode',
        name: 'QR creator',
        icon: 'ni ni-single-02 text-yellow',
        component: QRForm,
        layout: '/public',
        type: 'auth'
    },
];
export default routes;
