import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './components/app/app.component';
import { LinksComponent } from './components/profile/links/links.component';
import { RepoListComponent } from './components/repos/repo-list/repo-list.component';
import { RepoNamePipe } from './pipes/repo-name.pipe';

@NgModule({
  declarations: [AppComponent, LinksComponent, RepoListComponent, RepoNamePipe],
  imports: [BrowserModule, HttpClientModule, NoopAnimationsModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
