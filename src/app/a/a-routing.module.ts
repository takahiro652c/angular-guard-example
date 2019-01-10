import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ExampleGuard } from '../example.guard';
import { AComponent } from './a.component';
import { ChildComponent } from './child/child.component';

const routes: Routes = [
  {
    path: '',
    component: AComponent,
    canActivateChild: [ExampleGuard],
    children: [
      { path: 'child', component: ChildComponent, canActivate: [ExampleGuard] },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ARoutingModule {}
