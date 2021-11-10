import { Component, Input, OnInit, Output, EventEmitter} from '@angular/core';
import { FormBuilder, FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
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
  notes: any = {};
  @Input() pageNumber: Number;
  @Output('delete') deleteEvent: EventEmitter<void> = new EventEmitter<void>()

  //need to add 'private fb: FormBuilder'
  constructor(private notesService: NotesService, private router: Router) { }



  ngOnInit(): void {
    this.note = new Note;   
  }


onSubmit(form: NgForm){
  console.log('ng Form: ',form);
  console.log('ng form note value',form.value);
  console.log('note object',this.note);
  // console.log('new notesForm Object: ',this.notesForm);
  // console.log('Notes Form object value: ',this.notesForm.value);
  this.notes = Object.assign(this.notes, form.value);
  localStorage.setItem('Notes', JSON.stringify(this.notes))
  console.log(localStorage);
}


onXbuttonClick(){
  this.deleteEvent.emit();
}

}
