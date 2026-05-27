import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/core/services/user.service';
import { AuthService } from 'src/app/core/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  
  records : any[] = [];
  isLoading: boolean = true;
  userRole: string = 'General User';

  constructor(
    private userService: UserService,
    private authService: AuthService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.fetchRecords();
  }

  fetchRecords(): void{
    this.isLoading = true;
    this.userService.getUserRecords().subscribe({
      next: (data) => {
        this.records = data;
        this.isLoading = false;
      },
      error: (err) => {
        this.isLoading = false;
      }
    });
  }

  logOut(): void{
    this.authService.logOut();
    this.router.navigate(['\auth']);
  }

}
