import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PagesRoutingModule } from './pages/pages.routing';
import { AuthRoutingModule } from './auth/auth.routing';


import { NopagefoundComponent } from './nopagefound/nopagefound.component';

// AuthRoutingModule
// auth.routing.ts
const routes: Routes = [
  
  // path
  { path: '**', component: NopagefoundComponent },
];
@NgModule({
  imports: [
    RouterModule.forRoot( routes ),
    PagesRoutingModule,
    AuthRoutingModule

  ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
