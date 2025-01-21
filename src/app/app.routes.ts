import { Routes } from '@angular/router';
import { LoginComponent } from './user/login/login.component';
import { RegisterComponent } from './user/register/register.component';
import { HomeComponent } from './home/home.component';
import { AdminloginComponent } from './admin/adminlogin/adminlogin.component';
import { ResultComponent } from './admin/result/result.component';
import { UserresultComponent } from './user/userresult/userresult.component';
import { AddproductComponent } from './user/addproduct/addproduct.component';
import { ReviewComponent } from './user/review/review.component';
import { PostreviewComponent } from './user/postreview/postreview.component';

export const routes: Routes = [
    {
        path:'',
        component:HomeComponent
    },
    {
        path:'user/login',
        component:LoginComponent
    },
    {
        path:'user/register',
        component:RegisterComponent
    },
    {
        path:'admin/login',
        component:AdminloginComponent
    },
    {
        path:'admin/result',
        component:ResultComponent
    },
    {
        path:'user/result',
        component:UserresultComponent
    },
    {
        path:'user/addproduct',
        component:AddproductComponent
    },
    {
        path:'user/review',
        component:ReviewComponent
    },
    {
        path:'user/postreview',
        component:PostreviewComponent
    }
];
