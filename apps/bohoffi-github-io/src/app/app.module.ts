import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

import { FlexLayoutModule } from '@angular/flex-layout';
import { MatBadgeModule } from '@angular/material/badge';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';

import { HttpCacheInterceptorModule } from '@ngneat/cashew';

import { AppComponent } from './components/app/app.component';
import { BasicComponent } from './components/profile/basic/basic.component';
import { LinksComponent } from './components/profile/links/links.component';
import { RepoListComponent } from './components/repos/repo-list/repo-list.component';
import { RepoNamePipe } from './pipes/repo-name.pipe';

@NgModule({
  declarations: [
    AppComponent,
    LinksComponent,
    BasicComponent,
    RepoListComponent,

    RepoNamePipe,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    NoopAnimationsModule,

    MatBadgeModule,
    MatCardModule,
    MatIconModule,

    FlexLayoutModule,

    HttpCacheInterceptorModule.forRoot(),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
