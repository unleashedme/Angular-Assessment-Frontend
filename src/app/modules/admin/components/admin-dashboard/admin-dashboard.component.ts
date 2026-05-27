import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/core/services/user.service';
import { AuthService } from 'src/app/core/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.css']
})
export class AdminDashboardComponent implements OnInit {
  users: any[] = [];
  displayedUsers: any[] = [];
  isLoading: boolean = true;

  constructor(
    private userService: UserService,
    private authService: AuthService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.fetchUsers();
  }

  fetchUsers(): void {
    this.isLoading = true;
    this.userService.getAdminUsers().subscribe({
      next: (data) => {
        this.users = data;
        this.displayedUsers = [...data];
        this.isLoading = false;
      },
      error: (err) => {
        this.isLoading = false;
      }
    });
  }

  filterUsers(event: Event): void {
    const inputElement = event.target as HTMLInputElement;
    const term = inputElement.value.toLowerCase().trim();

    if (!term) {
      this.displayedUsers = [...this.users];
    } else {
      this.displayedUsers = this.users.filter(user => 
        user.userId.toLowerCase().includes(term) || 
        user.fullName.toLowerCase().includes(term) ||
        user.email.toLowerCase().includes(term)
      );
    }
  }

  logOut(): void{
    this.authService.logOut();
    this.router.navigate(['/auth'])
  }

}
