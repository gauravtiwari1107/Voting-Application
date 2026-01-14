import { Component } from '@angular/core';
import { Poll } from "./poll/poll";

@Component({
  selector: 'app-root',
  imports: [Poll],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  title = 'poll-app';
}
