import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BusquedaComponent } from './busqueda/busqueda.component';
import { SelectionComponent } from './components/selection/selection.component';
import { CreateComponent } from './create/create.component';
import { EditComponent } from './edit/edit.component';
import { HomeComponent } from './home/home.component';
import { SectionComponent } from './home/section/section.component';

const routes: Routes = [
  { path: '',component: HomeComponent},
  { path: 'selection',component: SelectionComponent},
  { path: 'selection/:id',component: SelectionComponent},
  { path: 'create',component: CreateComponent},
  { path: 'edit',component: EditComponent},
  { path: 'edit/:id',component: EditComponent},
  { path: 'busqueda',component: BusquedaComponent},
  { path: 'busqueda/:searchTerm',component: BusquedaComponent},



];

@NgModule({
  imports: [RouterModule.forRoot(routes),
 
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
