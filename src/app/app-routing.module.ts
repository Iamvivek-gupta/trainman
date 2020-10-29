import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { LoanComponent } from './loan/loan.component';
import { AuthGuard } from './auth.guard';
import { NewcomponentComponent } from './newcomponent/newcomponent.component';
const routes: Routes = [
    {path: 'login' , component: LoginComponent},
    {path: 'signup' , component: SignupComponent},
    {path: 'loan' , canActivate: [AuthGuard], component: LoanComponent},
    {path: 'trainman' , component: NewcomponentComponent},
    {path: '' , redirectTo: 'trainman', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
