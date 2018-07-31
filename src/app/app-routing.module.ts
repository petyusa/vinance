import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SettingsComponent } from './settings/settings.component';
import { CostCategoryListComponent } from './cost-category-list/cost-category-list.component';
import { NewCostCategoryComponent } from './costs/new-cost-category/new-cost-category.component';

const routes: Routes = [
  { path: 'settings', component: SettingsComponent },
  {
    path: 'costs',
    component: CostCategoryListComponent,
    children: [{ path: 'add', component: NewCostCategoryComponent }]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
