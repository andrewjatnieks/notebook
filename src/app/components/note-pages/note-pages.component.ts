import { Component, OnInit } from '@angular/core';
import { Note } from 'src/app/shared/note.model';
import { NotesService } from 'src/app/shared/notes.service';

export class NotePages{
title: String;
body: String;
}

@Component({
  selector: 'app-note-pages',
  templateUrl: './note-pages.component.html',
  styleUrls: ['./note-pages.component.scss']
})
export class NotePagesComponent implements OnInit {
  
  notes: Note[] = new Array<Note>();

  constructor(private notesService: NotesService) { }


  ngOnInit(): void {
    //retrieve all notes
    this.notes = this.notesService.getAllNotes();
    //

  }



  getPageNumber(note: Note){
    return note.pageNumber;
  }

  onAdd(){
    let notes = this.notesService.getAllNotes();
    
    if(notes.length >= 5){
      return;
    }
    
    if(notes.length >= 1 && notes.length < 5){
      
      console.log(notes[notes.length - 1]);
      let newNotePageNumber = notes.pop().pageNumber;
      var holder: number = +newNotePageNumber;
      let note = new Note;
      note.pageNumber = (holder).toString();
      note.note = '';
      //let nextPageNumber = notes[notes.length - 1].pageNumber
      
      this.notesService.add({pageNumber: note.pageNumber, note: note.note})
    }
    this.notesService.add({pageNumber: (notes.length + 1).toString(), note: ''})
    
  }

  deleteNote(id: number){
    this.notesService.delete(id);
    console.log('deleting note: ', id)
  }

}
