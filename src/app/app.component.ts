import { Component, OnInit } from '@angular/core';

import { UserService } from './core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
/**
 * Class AppComponent
 *
 * @author  Arslan Ali
 * @email   shayansolutions@gmail.com
 */
export class AppComponent implements OnInit {
  constructor (
    private userService: UserService
  ) {}

  ngOnInit() {
    this.userService.populate();
  }
}
