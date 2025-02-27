import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import emailjs from '@emailjs/browser';

@Component({
  selector: 'app-form',
  imports: [FormsModule],
  templateUrl: './form.component.html',
  styleUrl: './form.component.scss',
})
export class FormComponent {
  formData = {
    from_name: '',
    from_phone: '',
    from_email: '',
    message: '',
    subject: '',
  };

  submitForm() {
    const serviceID = 'service_zubg68f';
    const templateID = 'template_h5jsb5o';
    const publicKey = 'yHjY8R0V3t75u44Ls';

    emailjs.send(serviceID, templateID, this.formData, publicKey).then(
      () => {
        alert('E-mail enviado com sucesso!');
        this.resetForm();
      },
      (error) => {
        console.error('Erro ao enviar o e-mail:', error);
        alert('Erro ao enviar o e-mail. Tente novamente mais tarde.');
      }
    );
  }

  resetForm() {
    this.formData = {
      from_name: '',
      from_phone: '',
      from_email: '',
      message: '',
      subject: '',
    };
  }

  applyPhoneMask(event: any): void {
    let value = event.target.value.replace(/\D/g, '');
    value = value.replace(/^(\d{2})(\d{5})(\d{4}).*/, '($1) $2-$3');
    event.target.value = value;
    this.formData.from_phone = value;
  }
}
