/* eslint-disable new-cap */
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormComponent } from './feature/form/form.component';

@Component({
  selector: 'isdi-root',
  standalone: true,
  imports: [RouterOutlet, FormComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'form';
}
