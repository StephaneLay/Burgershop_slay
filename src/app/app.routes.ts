import { Routes } from '@angular/router';
import { HomePageComponent } from './features/products/home-page-component/home-page.component';
import { ProductDetailComponent } from './features/products/product-detail-component/product-detail-component';
import { CartPageComponent } from './features/cart/cart-page-component/cart-page-component';
import { ConfirmationPageComponent } from './features/confirmation/confirmation-page-component/confirmation-page-component';
import { LoginPageComponent } from './features/auth/login-page-component/login-page-component';
import { RegisterPageComponent } from './features/auth/register-page-component/register-page-component';
import { ProfilePageComponent } from './features/profile/profile-page-component/profile-page-component';
import { NotFoundPageComponent } from './features/not-found/not-found-page-component/not-found-page-component';
import { AuthGuard } from './core/guards/auth-guard';

export const routes: Routes = [
  { path: '', component: HomePageComponent },
  { path: 'product/:id', component: ProductDetailComponent },
  { path: 'cart', component: CartPageComponent },
  { path: 'confirmation', component: ConfirmationPageComponent },
  { path: 'login', component: LoginPageComponent },
  { path: 'register', component: RegisterPageComponent },
  { path: 'profile', component: ProfilePageComponent, canActivate: [AuthGuard] },
  { path: '**', component: NotFoundPageComponent }
];

