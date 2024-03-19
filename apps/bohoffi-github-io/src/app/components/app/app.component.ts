import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RepoListComponent } from '../repos/repo-list/repo-list.component';
import { LinksComponent } from '../profile/links/links.component';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    standalone: true,
    imports: [LinksComponent, RepoListComponent]
})
export class AppComponent { }
