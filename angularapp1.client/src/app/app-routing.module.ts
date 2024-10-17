import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ComponentAComponent } from './components/component-a/component-a.component';
import { ComponentBComponent } from './components/component-b/component-b.component';
import { WizardComponent } from './components/wizard/wizard.component';

const routes: Routes = [
  { path: '', redirectTo: '/component-a', pathMatch: 'full' },
  { path: 'component-a', component: ComponentAComponent },
  { path: 'component-b', component: ComponentBComponent },
  { path: 'wizard', component: WizardComponent },
  { path: '**', redirectTo: '/component-a', },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
