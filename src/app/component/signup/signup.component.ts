import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import ValidateForm from 'src/app/helpers/validateform';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {
  signupForm! : FormGroup
  constructor(private fb: FormBuilder,
              private auth: AuthService){}

  ngOnInit(): void {
    this.signupForm = this.fb.group({
      firstname: ['', Validators.required],
      lastname: ['', Validators.required],
      email: ['', Validators.required],
      username: ['', Validators.required],
      password: ['', Validators.required]
    })
  }

  onSubmit() {
      if(this.signupForm.valid){
        this.auth.login(this.signupForm.value)
        .subscribe({
         next: (res)=>{
           alert(res.message)
         },
         error: (err)=>{
           alert(err?.error.message)
         }
        })
      }else{
        ValidateForm.validateAllFormFields(this.signupForm);
        alert('Form is not valid')
      }

  }



}
