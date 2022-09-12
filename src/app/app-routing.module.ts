import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DatatypeMappingComponent } from './datatype-mapping/datatype-mapping.component';
import { GenerateCodeComponent } from './generate-code/generate-code.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'generate', component: GenerateCodeComponent },
  { path: 'datatypemapping', component: DatatypeMappingComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
