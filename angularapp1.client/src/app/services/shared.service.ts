import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class SharedService {
  private message: string = '';

  setMessage(message: string) {
    this.message = message;
  }

  getMessage(): string {
    return this.message;
  }
}
