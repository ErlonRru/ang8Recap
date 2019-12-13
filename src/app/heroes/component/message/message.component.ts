import {Component, OnInit} from '@angular/core';
import {MessageService} from '../../../services/heros/message.service';

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.scss']
})
export class MessageComponent {

  messages: string[] = [];

  constructor(private messageService: MessageService) {
  }

  add(message: string) {
    this.messages.push(message);
  }

  clear() {
    this.messages = [];
  }

}
