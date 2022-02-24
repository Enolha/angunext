import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MdpPerduComponent } from './mdp-perdu.component';

describe('MdpPerduComponent', () => {
  let component: MdpPerduComponent;
  let fixture: ComponentFixture<MdpPerduComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MdpPerduComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MdpPerduComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
