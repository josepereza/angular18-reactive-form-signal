import { JsonPipe } from '@angular/common';
import { Component, OnInit, signal } from '@angular/core';
import { FormBuilder, FormControl, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive-form',
  standalone: true,
  imports: [ReactiveFormsModule, JsonPipe],
  templateUrl: './reactive-form.component.html',
  styleUrl: './reactive-form.component.css'
})
export class ReactiveFormComponent implements OnInit {
  
  //con signal 
  profileForm=signal(
    this.fb.group({
      firstname: ['', Validators.required],
      lastname: ['', Validators.required],
      email: ['', Validators.required],
      gender: ['', Validators.required],
      country: ['', Validators.required],
    })

  )
  // sin signal 

  /*   profileForm= this.fb.group({
    firstname: ['', Validators.required],
    lastname: ['', Validators.required],
    email: ['', Validators.required],
    gender: ['', Validators.required],
    country: ['', Validators.required],
  }); */

  constructor(private fb: FormBuilder) {}
  ngOnInit(): void {
    this.profileForm().get('firstname')?.valueChanges.subscribe(data=>{
      console.log(data)
    })
  }

  onSubmit() {
    console.log('submited values: ', this.profileForm().value);
  }

}
