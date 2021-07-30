import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PojedinacniAlbumiComponent } from './pojedinacni-albumi.component';

describe('PojedinacniAlbumiComponent', () => {
  let component: PojedinacniAlbumiComponent;
  let fixture: ComponentFixture<PojedinacniAlbumiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PojedinacniAlbumiComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PojedinacniAlbumiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
