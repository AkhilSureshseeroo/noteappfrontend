import { Component, OnInit } from '@angular/core';
import { NoteService } from '../note.service';
import { Router } from '@angular/router';
import { FormGroup,FormControl,Validators,ReactiveFormsModule } from '@angular/forms';
@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {
  form!:FormGroup;

  constructor(public notesService:NoteService,private router:Router) { }

  ngOnInit(): void {
    this.form=new FormGroup({
      Title:new FormControl('',[Validators.required]),
      Description:new FormControl('',Validators.required)
    });
  }
  get f(){
    return this.form.controls;
  }
  submit(){
    console.log(this.form.value);
    this.notesService.create(this.form.value).subscribe(res =>{
      console.log('Note created Successfully')
      this.router.navigateByUrl('note/index');
    })
  }

}
