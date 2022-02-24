import { Component, ModuleWithComponentFactories, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import {FormControl, Validators} from '@angular/forms';

@Component({
  selector: 'app-form-utilisateur',
  templateUrl: './form-utilisateur.component.html',
  styleUrls: ['./form-utilisateur.component.css']
})
export class FormUtilisateurComponent {

  minDate: Date;
  maxDate: Date;

  constructor(private formBuilder:FormBuilder){
    const currentYear = new Date().getFullYear();
    this.minDate = new Date(currentYear - 80, 0, 1);
    this.maxDate = new Date(currentYear - 15,0, 0);}
 
  profileForm = this.formBuilder.group({
    nom: [''],
    prenom: [''],
    numtel: [''],
    datenaissance: [''],
    ville: [''],
    cv: [''],
  });

  saveForm(){
    console.log('Form data is ', this.profileForm.value);
  }
  
  nom = new FormControl('', Validators.required);
  prenom = new FormControl('', Validators.required);
  numtel = new FormControl('', Validators.required);
  datenaissance = new FormControl('', Validators.required);
  ville = new FormControl('', Validators.required); 

  public hasError = (controlName: string, errorName: string) =>{
    return this.profileForm.controls[controlName].hasError(errorName);
  }
 
}
