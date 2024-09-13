import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css'],
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
})
export class FormularioComponent {
  contactForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.contactForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', [Validators.required, Validators.pattern(/^\+569\d{8}$/)]],
      servicio: ['', Validators.required],
      message: ['', Validators.required],
      eslingas: [false],
      extensiones: [false],
    });
  }

  onSubmit() {
    if (this.contactForm.valid) {
      console.log('Formulario enviado', this.contactForm.value);
      // Aquí podrías procesar los datos o enviarlos a una API
    } else {
      console.log('Formulario no es válido');
      console.log('Estado del formulario:', this.contactForm);
    }
  }
}

