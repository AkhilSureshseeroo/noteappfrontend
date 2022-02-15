import { Component, OnInit } from '@angular/core';
import { NoteService } from '../note.service';
import { Note } from '../note';
@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {
  notes:Note[]=[];

  constructor(public noteService:NoteService) { }

  ngOnInit(): void {
    this.noteService.getAllNotes().subscribe((data:Note[])=>{
      this.notes=data;
      console.log(this.notes)
    })
  }
  deleteNote(_id:any){
    this.noteService.delete(_id).subscribe(res =>{
      this.notes=this.notes.filter(item => item._id ! ==_id);
      console.log("note deleted successfully")
    })
  }


}
