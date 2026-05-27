import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

export interface ToastState{
  message: string,
  show: boolean
}

@Injectable({
  providedIn: 'root'
})
export class ToastService {
  private toastSubject = new Subject<ToastState>();
  toastState$ = this.toastSubject.asObservable();

  showError(message: string): void {
    this.toastSubject.next({ message, show: true});

    setTimeout(() => {
      this.hide();
    }, 5000);
  }

  hide(): void{
    this.toastSubject.next({ message: '', show: false});
  }
}
