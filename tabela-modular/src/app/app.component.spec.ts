import { TestBed, async } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { MatCardModule, MatCheckboxModule, MatTableModule, MatMenuModule, MatIconModule } from '@angular/material';
import { StoreModule } from '@ngrx/store';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        MatCardModule,
        MatCheckboxModule,
        MatTableModule,
        MatMenuModule,
        MatIconModule,
        StoreModule.forRoot({})
      ],
      declarations: [
        AppComponent
      ],
    }).compileComponents();
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });
});
