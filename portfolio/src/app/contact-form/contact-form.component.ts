import { Component } from '@angular/core';
import { FormBuilder, NgForm } from '@angular/forms';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.css']
})
export class ContactFormComponent {
  constructor(private formBuilder: FormBuilder,) {

  }

  onSubmit(form: NgForm){
    console.log(form);
  }

  // checkoutForm = this.formBuilder.group({
  //   name: '',
  //   message: ''
  // });
  formData = {
      name: '',
      email: ''
  };

  
}
