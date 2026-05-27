import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastService } from 'src/app/core/services/toast.service';
import { AuthService } from 'src/app/core/services/auth.service';
import { UserService } from 'src/app/core/services/user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  userData = {
    userId: '',
    password: '',
    confirmPassword: '',
    fullName: '',
    email: ''
  };
  isLoading: boolean = false;
  isPasswordVisible: boolean = false;

  constructor(
    private authService: AuthService,
    private toastService: ToastService,
    private router: Router,
    private userService: UserService
  ) { }

  togglePasswordVisibility(): void {
    this.isPasswordVisible = !this.isPasswordVisible;
  }

  onSubmit(): void {
    if (!this.userData.userId || !this.userData.password || !this.userData.fullName || !this.userData.email) {
      this.toastService.showError('Please fill in all required fields.');
      return;
    }

    if (this.userData.password !== this.userData.confirmPassword) {
      this.toastService.showError('Passwords do not match.');
      return;
    }

    this.isLoading = true;
    
    this.userService.register({
      fullName: this.userData.fullName,
      email: this.userData.email,
      userId: this.userData.userId,
      password: this.userData.password,
      role: 'General User' ,
    }).subscribe({
      next: (res) => {
        this.isLoading = false;
        alert(res.message); 
        this.router.navigate(['/auth/login']);
      },
      error: (err) => {
        this.isLoading = false;
      }
    });
  }

}
