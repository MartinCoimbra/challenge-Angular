import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth/service/auth.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styles: [],
})
export class ProfileComponent implements OnInit {
  nameUser: any = '';
  constructor(private authService: AuthService, private router: Router) {
    if (authService.dataUserCopy.name != '') {
      this.nameUser = authService.dataUserCopy.name;
    }
  }
  ngOnInit(): void {
    if (!this.nameUser) {
      this.router.navigate(['auth/login']);
    }
  }
}
