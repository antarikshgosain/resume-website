import { Component, OnInit, ViewChild  } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, NgForm } from '@angular/forms';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { GlobalConstants } from '../../GlobalConstants';
import { ReCaptchaV3Service, ReCaptcha2Component } from 'ngx-captcha';


@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.css']
})
export class ContactFormComponent {
  //@ViewChild('captchaElem') captchaElem: ReCaptcha2Component;
  @ViewChild('captchaElem', { static: true }) captchaElem!: ReCaptcha2Component;


  publicRecaptchaKey : string = GlobalConstants.GOOGLE_RE_CAPTCHA_PUBLIC_KEY;
  isNameValid = true;
  isMessageValid = true;
  isCaptchaValid = true;
  
  constructor(private formBuilder: FormBuilder,private http: HttpClient, private reCaptchaV3Service: ReCaptchaV3Service) {

  }

  onSubmit(){

    const captchaResponse = this.captchaElem.getResponse();
    //console.log("captcha => "+);
    
    if(this.formData.name === ''){this.isNameValid = false;} else {this.isNameValid = true;}
    if(this.formData.message === ''){this.isMessageValid = false;} else {this.isMessageValid = true;}
    if(captchaResponse === ''){this.isCaptchaValid = false;} else {this.isCaptchaValid = true;}

    console.log(this.formData);

    if(this.isNameValid && this.isMessageValid ){
      const userResponse = this.captchaElem.getResponse();
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
      
      //console.debug(`Token [${token}] generated`);
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

  formData = {
      name: '',
      message: '',
  };

  
}
