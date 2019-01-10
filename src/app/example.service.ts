import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ExampleService {
  canActivate = true;
  canActivateChild = true;
  canLoad = true;

  constructor() {}
}
