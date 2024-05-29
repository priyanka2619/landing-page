import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
  subscriptionForm: FormGroup;
  submitted = false;

  constructor(private fb: FormBuilder) {
    this.subscriptionForm = this.fb.group({
      email: ['', [Validators.required, Validators.email, Validators.pattern('^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}$')]]
    });
  }

  ngOnInit(): void { }

  onSubmit(): void {
    this.submitted = true;
    if (this.subscriptionForm.valid) {
      // Handle successful form submission
      // alert('Subscription successful!');
    }
  }
}
