import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DataFormComponent } from './data-form/data-form.component';
import { TemplateFormComponent } from './template-form/template-form.component';

/*Para fazer um Lazy loading, deve carregar o modulo e não component */
const routes: Routes = [
  {
    path: 'templateForm', 
    component: TemplateFormComponent},
  {
    path: 'dataForm',
    component: DataFormComponent
  },
  { path: '', pathMatch: 'full', redirectTo: 'dataForm' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
