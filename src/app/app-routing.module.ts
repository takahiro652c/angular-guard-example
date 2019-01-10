import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ExampleGuard } from './example.guard';

const routes: Routes = [
  { path: 'a', loadChildren: './a/a.module#AModule', canLoad: [ExampleGuard] },
  { path: 'b', loadChildren: './b/b.module#BModule', canLoad: [ExampleGuard] },
  { path: '**', redirectTo: 'a' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
