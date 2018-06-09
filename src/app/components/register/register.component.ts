import { Component, OnInit } from '@angular/core';
import { OuterNavbarComponent } from '../outer-navbar/outer-navbar.component';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})

export class RegisterComponent implements OnInit {
  form: FormGroup;

  registerUser() {
    console.log(this.form.value);
  }

  constructor(private formBuilder: FormBuilder) {
    this.createForm();
  }

  createForm() {
    this.form = this.formBuilder.group({
      // Name input
      nameRegister: ['', Validators.compose([
        Validators.required,
        Validators.pattern('^[a-zA-Z ]+$')
      ])],

      // Userid Input
      useridRegister: ['', Validators.compose([
        Validators.required,
        Validators.minLength(3),
        Validators.pattern("[_a-zA-Z0-9]+"),
        this.checkUniqueUserId // Custom validation
      ])],

      // Password Input
      pswdRegister: ['', Validators.compose([
        Validators.required,
        Validators.minLength(4)
      ])],

      // Confirm Password Input
      confirmPswdRegister: ['', Validators.required],

      // Email input
      emailRegister: ['', Validators.compose([
        Validators.required,
        Validators.pattern('^[_A-Za-z0-9-\\+]+(\\.[_A-Za-z0-9-]+)*@[A-Za-z0-9-]+(\\.[A-Za-z0-9]+)*(\\.[A-Za-z]{2,})$'),
        this.checkUniqueEmail
      ])]
    }, { validator: this.matchPasswords('pswdRegister', 'confirmPswdRegister') }); // Add custom validator to form for matching passwords
  }

  ngOnInit() {
    document.body.classList.add('bg-img');
  }


    checkUniqueUserId() {
      return null;
    }

    checkUniqueEmail() {
      return null;
    }

    matchPasswords(password, confirm) {
      return (group: FormGroup) => {

        // Check if both fields are the same
        if (group.controls[password].value === group.controls[confirm].value) {
          return null; // Return as a match
        } else {
          return { 'matchPasswords': true } // Return as error: do not match
        }
      }
    }

}
