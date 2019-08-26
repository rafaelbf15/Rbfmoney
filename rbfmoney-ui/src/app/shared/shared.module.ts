import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MessagesModule } from 'primeng/messages';
import { MessageModule } from 'primeng/message';

import { MessageComponent } from './message/message.component';

@NgModule({
  imports: [
    CommonModule,
    MessageModule,
    MessagesModule,
  ],
  declarations: [MessageComponent],
  exports: [MessageComponent]
})
export class SharedModule { }
