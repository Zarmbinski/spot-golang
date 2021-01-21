import { Component } from '@angular/core';
import { Message } from './message';
import { SpotService } from './spot.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  message: Message;

  constructor(private spotService: SpotService) { }

  ngOnInit() {
    this.spotService.getMessage().subscribe(message => this.message = message);
  }
}
