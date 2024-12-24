import { Component } from '@angular/core';
import { PasswordStrengthMeterComponent } from '../../../ngx-omega-bootstrap/src/password-strength-meter/component/password-strength-meter.component';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  imports: [PasswordStrengthMeterComponent, FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'demoapplication';
  password = '';

  pwdStrengthOutput(output: any) {
    console.log(output);
  }
}
