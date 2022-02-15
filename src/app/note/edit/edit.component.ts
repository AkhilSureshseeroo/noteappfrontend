import { Component, OnInit } from '@angular/core';
import { NoteService } from '../note.service';
import { ActivatedRoute,Router } from '@angular/router';
import { Note } from '../note';
import { FormGroup,Validators,FormControl } from '@angular/forms';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  id!:number;
  note!:Note;
  form!:FormGroup;
  snapshot: any;


  constructor(
    public noteService:NoteService,
    private route:ActivatedRoute,
    private router:Router
  ) { }

  ngOnInit(): void {
    this.id=this.route.snapshot.params['noteId'];
    this.noteService.find(this.id).subscribe((data:Note)=>{
      this.note=data
    });
    this.form = new FormGroup({
      Title: new FormControl('', [Validators.required]),
      Description: new FormControl('', Validators.required)
    });
  }

  get f(){
    return this.form.controls;
  }

  submit(){
    debugger
    console.log(this.form.value);
    this.noteService.update(this.id, this.form.value).subscribe(res => {
         console.log('Note updated successfully!');
         this.router.navigateByUrl('note/index');
    })
  }


}
