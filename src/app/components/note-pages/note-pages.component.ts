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
    console.log(localStorage.length);    

  }

  getPageNumber(note: Note){
    return note.pageNumber;
  }

  onAdd(){
    let currentNotes = this.notesService.getAllNotes();
    if(currentNotes.length >= 5){
      return;
    }
    if(currentNotes.length >= 1 && currentNotes.length < 5){
      let note = new Note;
      note.pageNumber = currentNotes.length+1;
      note.note = '';
      this.notesService.add({pageNumber: note.pageNumber, note: note.note})
    }else{
      if(currentNotes.length < 1){
        this.notesService.add({pageNumber: currentNotes.length + 1, note: ''})
      }
    }
    return;
  }

  deleteNote(id: number){
    this.notesService.delete(id);
    console.log('deleting note: ', id)
  }

}
