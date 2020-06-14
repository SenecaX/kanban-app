import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AuthenticationService } from '../../../../shared/services/authentication.api.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {
  public registerForm: FormGroup;
  constructor(
    private _router: Router,
    private authenticationService: AuthenticationService
  ) {
    this.registerForm = new FormGroup({
      email: new FormControl(null, [Validators.email, Validators.required]),
      username: new FormControl(null, Validators.required),
      password: new FormControl(null, Validators.required),
      cpass: new FormControl(null, Validators.required)
    });
  }

  moveToLogin() {
    this._router.navigate(['/login']);
  }

  register() {
    if (
      !this.registerForm.valid ||
      this.registerForm.controls.password.value !=
        this.registerForm.controls.cpass.value
    ) {
      return;
    }

    this.authenticationService.register(this.registerForm.value).subscribe(
      data => {
        this._router.navigate(['/login']);
      },
      error => console.error(error)
    );
  }
}
