import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ValidatorsService } from '../../../shared/service/validators.service';

const rtx5090 = {
  name: 'RTX5090',
  price: 2500,
  inStorage: 6,
}
@Component({
  templateUrl: './basic-page.component.html',
  styles: ``
})
export class BasicPageComponent implements OnInit {

  // public myForm: FormGroup = new FormGroup({
  //   name: new FormControl('', [validaciones sincronas], [validaciones asíncronas]) ,
  //   price: new FormControl(0, [], []) ,
  //   inStorage: new FormControl(0, [], []) ,
  // })
  // <-- ambas son las mismas formas de hacerlo -->, pero ercomendable el fb, más bonito y claro.

  public myForm: FormGroup = this.fb.group( {
    name: ['', [ Validators.required, Validators.minLength(3) ]],
    price: [0, [ Validators.required, Validators.min(0) ]],
    inStorage: [0, [ Validators.required, Validators.min(0) ]],
  })

  constructor(
    private fb: FormBuilder,
    private validatorsService: ValidatorsService
  ){}

  ngOnInit(): void {
    this.myForm.reset(rtx5090)
  }

  isValidField(field: string):boolean | null {
    return this.validatorsService.isValidField(this.myForm, field)
  }

  getFieldError( field:string ): string | null {

    if( !this.myForm.controls[field] ) return null;

    const errors = this.myForm.controls[field].errors || {}

    for (const key of Object.keys(errors)) {
      switch (key) {
        case 'required':
          return 'This field is required'

        case 'minlength':
          return `Min ${ errors['minlength'].requiredLength } characters required`
      }
    }

    return null;

  }

  onSave():void {

    if( this.myForm.invalid ) {
      this.myForm.markAllAsTouched();
      return;
    }
    console.log(this.myForm.value);

    this.myForm.reset({ price: 10, inStorage: 0 })

  }
}
