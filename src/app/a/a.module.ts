import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { ARoutingModule } from './a-routing.module';
import { AComponent } from './a.component';
import { ChildComponent } from './child/child.component';
import { IndexComponent } from './index/index.component';

@NgModule({
  declarations: [AComponent, ChildComponent, IndexComponent],
  imports: [CommonModule, ARoutingModule],
})
export class AModule {}
