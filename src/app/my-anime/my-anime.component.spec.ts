import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyAnimeComponent } from './my-anime.component';

describe('MyAnimeComponent', () => {
  let component: MyAnimeComponent;
  let fixture: ComponentFixture<MyAnimeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyAnimeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyAnimeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
