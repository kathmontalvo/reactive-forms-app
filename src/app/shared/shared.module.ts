import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SideMenuComponent } from './components/side-menu/side-menu.component';
import { RouterModule } from '@angular/router';
import { SideMenuNewComponent } from './components/side-menu-new/side-menu-new.component';



@NgModule({
  declarations: [
    SideMenuComponent,
    SideMenuNewComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    SideMenuComponent
  ]
})
export class SharedModule { }
