import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormControl } from '@angular/forms';
import { AuthenticationService } from '../../services/authentication.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  public loginForm: FormGroup;

  constructor(
    private readonly authenticationService: AuthenticationService,
    private readonly router: Router
  ) {
    this.loginForm = new FormGroup({
      email: new FormControl(null, [Validators.email, Validators.required]),
      password: new FormControl(null, Validators.required)
    });
  }

  ngOnInit(): void {}

  public moveToRegister(): void {
    this.router.navigate(['/register']);
  }

  public login(): void {
    if (!this.loginForm.valid) {
      console.log('Invalid');
      return;
    }

    this.authenticationService
      .login(JSON.stringify(this.loginForm.value))
      .subscribe(
        data => {
          this.router.navigate(['/dashboard']);
        },
        error => console.error(error)
      );
  }
}
