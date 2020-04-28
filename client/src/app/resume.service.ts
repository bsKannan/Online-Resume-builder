import { Injectable } from '@angular/core';
import { NgModel, NgForm } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class ResumeService {

  constructor() { }

  public isCtrlValid(Ctrl: NgModel, Form: NgForm) {
    return Ctrl.errors && Form.submitted;
  }
}
