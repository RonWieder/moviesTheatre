import { Component, Input, OnInit } from '@angular/core';
import { NavigationCancel, NavigationEnd, NavigationError, NavigationStart, RouteConfigLoadEnd, RouteConfigLoadStart, Router } from '@angular/router';
import { LoadingService } from './loading.service';

@Component({
  selector: 'app-loader',
  templateUrl: './loader.component.html',
  styleUrls: ['./loader.component.scss']
})
export class LoaderComponent implements OnInit {
  @Input()
  routing: boolean = false;

  constructor(
    public loadingService: LoadingService,
    private router: Router) {

  }

  ngOnInit() {

    this.router.events
      .subscribe(
        event => {
          if (event instanceof NavigationStart) {
            this.loadingService.loadingOn();
          }
          else if (
            event instanceof NavigationEnd ||
            event instanceof NavigationError ||
            event instanceof NavigationCancel) {
            this.loadingService.loadingOff();

          }

        }
      );
  }
}
