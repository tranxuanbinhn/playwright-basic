import {form} from '../object-repositories/AuthFormPage'
import { dashboard } from 'object-repositories/DashboardPage';
import { myinfo } from 'object-repositories/MyInfoPage';

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
export function getMyInforMainTitleMyinforPage(){
    return myinfo.main_title;
}
export function getMyInforfullnameObject(){
return myinfo.full_name;
}
export function getMyInfoNavPersionalDetail(){
    return myinfo.persional_detail;
}
export function getMyinfoEmployImgObject(){
    return myinfo.employ_img;
}
export function getPersionalDetailInputFirstnameObject(){
    return myinfo.persional_detail.input_firstname;
}
export function getPersionalDetailInputMiddlenameObject(){
    return myinfo.persional_detail.input_middlename;
}
export function getPersionalDetailInputLastnameObject(){
    return myinfo.persional_detail.input_lastname;
}
export function getPersionalDetailInputEmployeeidObject(){
    return myinfo.persional_detail.input_employeeid;
}
export function getPersionalDetailInputOtherIdObject(){
    return myinfo.persional_detail.input_otherid;
}
export function getPersionalDetailDriverLicensedObject(){
    return myinfo.persional_detail.input_licensenumber;
}