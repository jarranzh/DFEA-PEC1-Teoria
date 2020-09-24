import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/Models/user';
import {
  FormControl,
  FormGroup,
  FormBuilder,
  Validators
} from '@angular/forms';
import { CheckWord } from 'src/app/Directives/check-word.validator';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public user: User = new User();

  public name: FormControl;
  public password: FormControl;
  public loginForm: FormGroup;

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.name = new FormControl('', [
      Validators.required,
      Validators.minLength(8),
      CheckWord.checkInvalidWord(/administrator/)
    ]);
    this.password = new FormControl('', [
      Validators.required,
      Validators.minLength(4)
    ]);
    this.loginForm = this.formBuilder.group({
      name: this.name,
      password: this.password
    });
  }

  public checkLogin() {
    this.user.name = this.name.value;
    this.user.password = this.password.value;
    console.log(
      'User name --> ' +
        this.user.name +
        ' User password --> ' +
        this.user.password
    );
  }
}
