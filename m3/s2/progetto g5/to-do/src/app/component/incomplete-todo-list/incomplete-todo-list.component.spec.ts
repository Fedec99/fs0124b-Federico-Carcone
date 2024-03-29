import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IncompleteTodoListComponent } from './incomplete-todo-list.component';

describe('IncompleteTodoListComponent', () => {
  let component: IncompleteTodoListComponent;
  let fixture: ComponentFixture<IncompleteTodoListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [IncompleteTodoListComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(IncompleteTodoListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
