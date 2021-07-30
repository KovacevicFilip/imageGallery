import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlbumiMrezaComponent } from './albumi-mreza.component';

describe('AlbumiMrezaComponent', () => {
  let component: AlbumiMrezaComponent;
  let fixture: ComponentFixture<AlbumiMrezaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AlbumiMrezaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AlbumiMrezaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
