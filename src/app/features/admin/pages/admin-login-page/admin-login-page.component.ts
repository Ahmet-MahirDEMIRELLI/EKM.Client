import { Component } from '@angular/core';
import { LoginComponent } from '../../../../shared/components/login/login.component';
import { LoginRequest } from '../../../../shared/models/LoginRequest';
import { catchError, tap, throwError } from 'rxjs';
import { AuthService } from '../../../../shared/services/auth.service';


@Component({
  selector: 'app-admin-login-page',
  standalone: true,
  imports: [LoginComponent],
  templateUrl: './admin-login-page.component.html',
  styleUrls: ['./admin-login-page.component.css']
})
export class AdminLoginPageComponent {

  constructor(private authService: AuthService){}

  handleLogin(credentials: { email: string, password: string }): void {
    const loginRequest = new LoginRequest(credentials.email, credentials.password);

      this.authService.login(loginRequest, 'admin').pipe(
        tap(response => {
          window.alert(`Giriş başarılı`);
          console.log(response);
        }),
        catchError(error => {
          window.alert(`Giriş başarısız`);
          return throwError(() => error);
        })
      ).subscribe();
  }
}
