import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import {MatIconModule} from '@angular/material/icon';

@Component({
  selector: 'app-form-connexion',
  templateUrl: './form-connexion.component.html',
  styleUrls: ['./form-connexion.component.css']
})
export class FormConnexionComponent {
  hide = true;
  constructor(private formBuilder:FormBuilder){}

  connexionform = this.formBuilder.group({
    mail: [''],
    mdp: [''],
  });
  email = new FormControl('', [Validators.required, Validators.email]);

  getErrorMessage() {
    if (this.email.hasError('required')) {
      return 'Veuillez saisir une adresse mail';
    }

    return this.email.hasError('email') ? 'Addresse mail non valide' : '';
  }

  mdp = new FormControl('', Validators.required); 

  public hasError = (controlName: string, errorName: string) =>{
    return this.connexionform.controls[controlName].hasError(errorName);
  }
}
