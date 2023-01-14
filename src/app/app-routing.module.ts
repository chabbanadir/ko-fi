import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ExploreComponent } from './explore/explore.component';
import { ListProfilesComponent } from './list-profiles/list-profiles.component';
import { ProfileComponent } from './profile/profile.component';

const routes: Routes = [
  {path: "explore", component: ExploreComponent},
  {path: "users", component: ListProfilesComponent},
  {path: "users/:id", component: ProfileComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
