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

const routes: Routes = [
{ path: '', redirectTo: 'home', pathMatch: 'full' },
{path:"login",component:LoginComponent},
{path:"register",component:RegisterComponent},
{path:"home",component:HomeComponent},
{path:"tv",component:TvComponent},
{path:"people",component:PeopleComponent},
{path:"movie",component:MovieComponent},
{path:"about",component:AboutComponent},
{path:"**",component:NotfoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
