import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { MovieComponent } from './movie/movie.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { PeopleComponent } from './people/people.component';
import { RegisterComponent } from './register/register.component';
import { TvComponent } from './tv/tv.component';
import { UserGuard } from './user.guard';
import { DetailsComponent } from './details/details.component';

const routes: Routes = [
{ path: '', redirectTo: 'home', pathMatch: 'full' },
{path:"login",component:LoginComponent},
{path:"register",component:RegisterComponent},
{path:"home",canActivate:[UserGuard],component:HomeComponent},
{path:"tv",canActivate:[UserGuard],component:TvComponent},
{path:"people",canActivate:[UserGuard],component:PeopleComponent},
{path:"movie",canActivate:[UserGuard],component:MovieComponent},
{path:"details/:media_tybe/:id",canActivate:[UserGuard],component:DetailsComponent},
{path:"about",component:AboutComponent},
{path:"**",component:NotfoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
