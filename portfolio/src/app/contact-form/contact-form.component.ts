import { Component } from '@angular/core';
import { FormBuilder, NgForm } from '@angular/forms';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.css']
})
export class ContactFormComponent {

  isNameValid = true;
  isMessageValid = true;

  constructor(private formBuilder: FormBuilder,private http: HttpClient) {

  }

  onSubmit(){
    
    
    if(this.formData.name === ''){
      this.isNameValid = false;
    } else {
      this.isNameValid = true;
    }

    if(this.formData.message === ''){
      this.isMessageValid = false;
    } else {
      this.isMessageValid = true;
    }
    console.log(this.formData);

    if(this.isNameValid && this.isMessageValid){

      
      const headers = new HttpHeaders({
        'Content-Type': 'application/json'
      });

      //call rest api
      var data = {
        noteBy : this.formData.name,
        noteMsg : this.formData.message,
      };
      var options = {
        headers: headers,

        httpsAgent: { rejectUnauthorized: false } 
      };
      var response = this.http.post<any>('https://150.230.29.115:9987/webapi/note', data, options);
      response.subscribe((data) => {
        console.log("Response "+ data);
      });

      //clearing form
      this.formData.name="";
      this.formData.message="";
      window.alert('Message Sent. Thanks ' + data.noteBy + '!\nI will get back to you soon');
    }

  }

  // checkoutForm = this.formBuilder.group({
  //   name: '',
  //   message: ''
  // });
  formData = {
      name: '',
      message: '',
  };

  
}
