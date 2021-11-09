import { Component, Input, OnInit, Output, EventEmitter} from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Note } from 'src/app/shared/note.model';
import { NotesService } from 'src/app/shared/notes.service';

@Component({
  selector: 'app-page',
  templateUrl: './page.component.html',
  styleUrls: ['./page.component.scss']
})
export class PageComponent implements OnInit {

  note: Note;
  @Input() pageNumber: Number;

  @Output('delete') deleteEvent: EventEmitter<void> = new EventEmitter<void>()

  constructor(private notesService: NotesService, private router: Router) { }



  ngOnInit(): void {
    this.note = new Note;
    
  }

onSubmit(form: NgForm){
  

}



onXbuttonClick(){
  this.deleteEvent.emit();
}

}
