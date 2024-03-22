import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';

describe('AppComponent', () => {
  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RouterTestingModule, ReactiveFormsModule],
      declarations: [AppComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the app', () => {
    expect(component).toBeTruthy();
  });

  it('should initialize addressForm', () => {
    expect(component.addressForm).toBeDefined();
  });

  it('should initialize addressTypes', () => {
    expect(component.addressTypes).toEqual(['Select Address Type', 'Home', 'Work']);
  });

  it('should initialize countries', () => {
    expect(component.countries).toEqual(['Select Country', 'Canada', 'USA']);
  });

  it('should initialize provinces', () => {
    expect(component.provinces).toEqual([]);
  });

  it('should initialize cities', () => {
    expect(component.cities).toEqual([]);
  });

  it('should initialize result', () => {
    expect(component.result).toEqual('');
  });

  // it('should navigate to submit page on submit', () => {
  //   spyOn(component.router, 'navigate');
  //   component.submit();
  //   expect(component.router.navigate).toHaveBeenCalledWith(['/submit']);
  // });

  // it('should navigate to cancel page on cancel', () => {
  //   spyOn(component.router, 'navigate');
  //   component.cancel();
  //   expect(component.router.navigate).toHaveBeenCalledWith(['/cancel']);
  // });
});
