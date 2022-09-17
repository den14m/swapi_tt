import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StarWarsPeopleDetailComponent } from './star-wars-people-detail';
import { StarWarsPeopleListComponent } from './star-wars-people-list/star-wars-people-list.component';

const routes: Routes = [
  {
    path: '',
    component: StarWarsPeopleListComponent,
  },
  {
    /* todo: here could be :id than in detail component we could get id from router params and make callout by id */
    path: 'details',
    component: StarWarsPeopleDetailComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class StarWarsPeopleRoutingModule {}
