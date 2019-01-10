import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ExampleGuard } from '../example.guard';
import { BComponent } from './b.component';
import { ChildComponent } from './child/child.component';

const routes: Routes = [
  {
    path: '',
    component: BComponent,
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
export class BRoutingModule {}
