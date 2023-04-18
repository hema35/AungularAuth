import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { NgToastService } from 'ng-angular-popup';
import ValidateForm from 'src/app/helpers/validateform';
import { AuthService } from 'src/app/services/auth.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit{
     loginForm! : FormGroup
     Actors:any[]= [
      {
        "name": "Tom Cruise",
        "age": 56,
        "Born At": "Syracuse, NY",
        "Birthdate": "July 3, 1962",
        "photo": "https://jsonformatter.org/img/tom-cruise.jpg"
      },
      {
        "name": "Robert Downey Jr.",
        "age": 53,
        "Born At": "New York City, NY",
        "Birthdate": "April 4, 1965",
        "photo": "https://jsonformatter.org/img/Robert-Downey-Jr.jpg"
      }
    ];

  constructor(private fb: FormBuilder,
              private auth: AuthService,
              private toast: NgToastService){}

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    })
  }

  onLogin() {
      if(this.loginForm.valid){
         this.auth.login(this.loginForm.value)
         .subscribe({
          next: (res)=>{
            alert(res.message)
            this.auth.storeToken(res.token)
            this.toast.success({detail: 'Success'});

          },
          error: (err)=>{
            alert(err?.error.message)
            this.toast.error({detail: 'Failed'})
          }
         })
      }else{
        ValidateForm.validateAllFormFields(this.loginForm);
         alert('Form is not valid')
      }
  }
}


