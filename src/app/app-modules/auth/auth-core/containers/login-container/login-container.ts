import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'login-container',
  standalone: false,
  templateUrl: './login-container.html',
  styleUrl: './login-container.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})

export class LoginContainer {}
