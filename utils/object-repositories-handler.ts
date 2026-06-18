import {form} from '../object-repositories/AuthFormPage'
import { dashboard } from 'object-repositories/DashboardPage';
import { myinfo } from 'object-repositories/MyInfoPage';
import { menubar } from 'object-repositories/MenuBar';
import { notification } from 'object-repositories/NotificationPage';
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
export function getNavigationDashbarMenubar(){
    return menubar.navigation.dashboard;
}
export function getNavigationAdminMenubar(){
    return menubar.navigation.admin;
}

export function getNavigationMyinfoMenubar(){
    return menubar.navigation.myinfo;
}

export function getSuccessNotificationObject(){
    return notification.notifi_success;
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
export function getPersionalDetailDriverLicensedExdateObject(){
    return myinfo.persional_detail.input_licensen_exdate;
}
export function getPersionalDetailNationalyObject(){
    return myinfo.persional_detail.select_nationaly;
}
export function getPersionalDetailNationalySeletedObject(){
    return myinfo.persional_detail.select_nationaly_selected;
}
export function getPersionalDetaiMaritalstatusSeletedObject(){
    return myinfo.persional_detail.select_maritalstatus_selected;
}
export function getPersionalDetaiMaritalstatusObject(){
    return myinfo.persional_detail.select_maritalstatus;
}
export function getPersionalDetaiDateOfBirthObject(){
    return myinfo.persional_detail.input_dateofbirth;
}
export function getPersionalDetaiGenderMaleObject(){
    return myinfo.persional_detail.radio_gender_male;
}
export function getPersionalDetaiGenderFemaleObject(){
    return myinfo.persional_detail.radio_gender_female;
}
export function getPersionalDetaiButtonSave1Object(){
    return myinfo.persional_detail.button_save1;
}
export function getEmergencyContactButtonAddObject(){
    return myinfo.emergency_contact.button_add;
}
export function getEmergencyContactAddPageInputNameObject(){
    return myinfo.emergency_contact.add_page.input_name;
}
export function getEmergencyContactAddPageRelationShipInputObject(){
    return myinfo.emergency_contact.add_page.relationship_input;
}
export function getEmergencyContactAddPageHomeTelephoneInputObject(){
    return myinfo.emergency_contact.add_page.hometelephone_input;
}
export function getEmergencyContactAddPageMobileInputObject(){
    return myinfo.emergency_contact.add_page.mobile_input;
}
export function getEmergencyContactAddPageWorkTelephoneInputObject(){
    return myinfo.emergency_contact.add_page.worktelephone_input;
}
export function getEmergencyContactAddPageWorkSaveButtonObject(){
    return myinfo.emergency_contact.add_page.save_button;
}
export function getEmergencyContactMainTitleObject(){
    return myinfo.emergency_contact.add_page.main_title;
}
export function getEmergencyContactLinkObject(){
    return myinfo.emergency_contact_link;
}
export function getEmergencyContactButtonDeleteObject(){
    return myinfo.emergency_contact.button_delete;
}
export function getEmergencyContactButtonDeleteConfirmObject(){
    return myinfo.emergency_contact.button_delete_confirm;
}
export function getEmergencyContactEditMainTitleObject(){
    return myinfo.emergency_contact.edit_main_title;
}
export function getEmergencyContactLoadSpinnerObject(){
    return myinfo.emergency_contact.load_spinner;
}