import { Injectable, NgModule } from '@angular/core';
import { Note } from './note.model';
import {HttpClient} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})

export class NotesService {

  notes: Note[] = new Array<Note>();

  // get notes(){
  //   let notes = localStorage.getItem('notes')
  //   if(notes == null){
  //     localStorage.setItem('notes', JSON.stringify([]));
  //     notes =   localStorage.getItem('notes')
  //   }
  //   return JSON.parse(notes)
  //  }

  constructor(private _http: HttpClient) { }

  getAllNotes(){
    return this.notes;
  }

  get(id: number){
    return this.notes[id];
  }

  getId(note){
    return this.notes.indexOf(note);
  }

  add(note: Note){
    let newLength = this.notes.push(note);
    //localStorage.setItem('notes', JSON.stringify(this.notes))
    //console.log('local storage on add', localStorage)
    let index = newLength - 1;
    return index;
  }

  update(id: number, pageNumber: number, note: string){
    let page = this.notes[id];
    page.pageNumber = pageNumber;
    page.note = note;
  }

  delete(id: number){
    this.notes.splice(id, 1);
  }
}
