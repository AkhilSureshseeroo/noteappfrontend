import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Note } from '../note';
import { NoteService } from '../note.service';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit {
  id!:number;
  note!:Note;

  constructor(
    public noteService:NoteService,
    private route:ActivatedRoute,
    private router:Router
  ) { }

  ngOnInit(): void {
    this.id=this.route.snapshot.params['noteId']

    this.noteService.find(this.id).subscribe((data:Note)=>{
      this.note=data;

    });
  }

}
