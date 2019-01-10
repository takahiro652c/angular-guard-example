import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  CanActivateChild,
  CanLoad,
  Route,
  RouterStateSnapshot,
} from '@angular/router';
import { ExampleService } from './example.service';

@Injectable({
  providedIn: 'root',
})
export class ExampleGuard implements CanActivate, CanActivateChild, CanLoad {
  constructor(private exampleService: ExampleService) {}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): boolean {
    if (this.exampleService.canActivate) {
      return true;
    }
    window.alert('canActivate failed');
    console.log(next);
    console.log(state);
    return false;
  }

  canActivateChild(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): boolean {
    if (this.exampleService.canActivateChild) {
      return true;
    }
    window.alert('canActivateChild failed');
    console.log(next);
    console.log(state);
    return false;
  }

  canLoad(route: Route): boolean {
    if (this.exampleService.canLoad) {
      return true;
    }
    window.alert('canLoad failed');
    console.log(route);
    return false;
  }
}
