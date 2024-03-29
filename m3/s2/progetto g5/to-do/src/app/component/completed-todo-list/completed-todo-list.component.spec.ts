import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompletedTodoListComponent } from './completed-todo-list.component';

describe('CompletedTodoListComponent', () => {
  let component: CompletedTodoListComponent;
  let fixture: ComponentFixture<CompletedTodoListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CompletedTodoListComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CompletedTodoListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
