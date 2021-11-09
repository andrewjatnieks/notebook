import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NotePagesComponent } from './note-pages.component';

describe('NotePagesComponent', () => {
  let component: NotePagesComponent;
  let fixture: ComponentFixture<NotePagesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NotePagesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NotePagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
