import {form} from '../object-repositories/AuthFormPage'
import { dashboard } from 'object-repositories/DashboardPage';
export function getAuthFormUsernameObject(){
    return form.auth.login.username;
}
export function getAuthFormPasswordObject(){
    return form.auth.login.password;
}
export function getAuthFormLoginBtnObject(){
    return form.auth.login.submitBtn;
}
export function getMainTitleObject(){
    return dashboard.main_title;
}