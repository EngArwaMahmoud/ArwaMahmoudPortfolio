import { Component, OnInit } from '@angular/core';
import * as AOS from 'aos';
import { FormsModule, NgForm } from '@angular/forms';
import { CommonModule } from '@angular/common';
import emailjs, { EmailJSResponseStatus } from 'emailjs-com';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.html',
  styleUrls: ['./contact.css'],
  standalone: true,
  imports: [CommonModule, FormsModule]
})
export class Contact implements OnInit {
  ngOnInit(): void {
    AOS.init();
  }

  formData = {
  form_name: '',
  form_email: '',
  message: ''
};

  sendEmail(form: NgForm) {
    if (form.invalid) return;

    emailjs.send(
      'service_l87rh5a',
      'template_2pdh3b8', 
      {
        form_name: form.value.form_name,
        form_email: form.value.form_email,
        message: form.value.message,
      },
      '5zF-zIivoEkqigfPs'  
    ).then(
      (result: EmailJSResponseStatus) => {
        alert('✅ Message sent successfully!');
        form.reset();

      },
      (error) => {
        alert('❌ Failed to send message. Please try again.');
        console.error(error);
      }
    );
  }
}
