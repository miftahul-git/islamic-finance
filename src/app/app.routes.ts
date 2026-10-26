import { Routes } from '@angular/router';
import { LoginComponent } from './login.component';
import { SignupComponent } from './signup.component';
import { BuyComponent } from './buy.component';
import { SellComponent } from './sell.component';
import { ContactComponent } from './contact.component';

export const routes: Routes = [
	{ path: 'login', component: LoginComponent },
	{ path: 'signup', component: SignupComponent },
	{ path: 'buy', component: BuyComponent },
	{ path: 'sell', component: SellComponent },
	{ path: 'contact', component: ContactComponent },
	{ path: '**', redirectTo: '' }
];
