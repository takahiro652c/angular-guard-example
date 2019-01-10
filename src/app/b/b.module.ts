import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { BRoutingModule } from './b-routing.module';
import { BComponent } from './b.component';
import { ChildComponent } from './child/child.component';

@NgModule({
  declarations: [BComponent, ChildComponent],
  imports: [CommonModule, BRoutingModule],
})
export class BModule {}
