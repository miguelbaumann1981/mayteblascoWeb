import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatTooltipModule } from '@angular/material/tooltip';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatSidenavModule,
    MatTooltipModule
  ],
  exports: [
    MatSidenavModule,
    MatTooltipModule
  ]
})
export class MaterialModule { }
