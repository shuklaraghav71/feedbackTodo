import { PracticesComponent } from './practices/practices.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RkstodoComponent } from './rkstodo/rkstodo.component';
const routes: Routes = [
  { path: 'home', component: RkstodoComponent },
  { path: 'practice', component: PracticesComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
]
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
