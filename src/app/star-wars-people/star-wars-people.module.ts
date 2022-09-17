import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StarWarsPeopleRoutingModule } from './star-wars-people-routing.module';
import { StarWarsPeopleComponent } from './star-wars-people.component';
import {
  StarWarsPeopleDetailSkeletonComponent,
  StarWarsPeopleDetailComponent,
} from './star-wars-people-detail';
import { StarWarsPeopleListComponent } from './star-wars-people-list/star-wars-people-list.component';
import { StarWarsPeopleService } from './star-wars-people.service';
import { HttpClientModule } from '@angular/common/http';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';
import { MatIconModule } from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';
import { NgxSkeletonLoaderModule } from 'ngx-skeleton-loader';

@NgModule({
  declarations: [
    StarWarsPeopleComponent,
    StarWarsPeopleListComponent,
    StarWarsPeopleDetailComponent,
    StarWarsPeopleDetailSkeletonComponent,
  ],
  imports: [
    CommonModule,
    StarWarsPeopleRoutingModule,
    HttpClientModule,
    MatCardModule,
    MatButtonModule,
    InfiniteScrollModule,
    MatIconModule,
    MatTooltipModule,
    NgxSkeletonLoaderModule,
  ],
  providers: [StarWarsPeopleService],
  bootstrap: [],
})
export class StarWarsPeopleModule {}
