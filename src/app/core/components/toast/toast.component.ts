import { Component, OnInit } from '@angular/core';
import { ToastService, ToastState } from '../../services/toast.service';
import { state } from '@angular/animations';

@Component({
  selector: 'app-toast',
  templateUrl: './toast.component.html',
  styleUrls: ['./toast.component.css']
})
export class ToastComponent implements OnInit {
  toast: ToastState = {message: '', show: false};

  constructor(private toastService: ToastService) { }

  ngOnInit(): void {
    this.toastService.toastState$.subscribe(state => {
      this.toast = state;
    });
  }

  close(): void{
    this.toastService.hide();
  }

}
