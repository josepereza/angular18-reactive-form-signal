import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ReactiveFormComponent } from './components/reactive-form/reactive-form.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,ReactiveFormComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'angular18-reactive-form';
}
