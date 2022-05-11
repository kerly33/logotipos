import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { IndexComponent } from './index/index.component';
import { InstagramComponent } from './instagram/instagram.component';

const routes: Routes = [
 // {path:'', component:  },
  {path:'insta', component: InstagramComponent },
  {path: 'index', component: IndexComponent},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
