import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  addressForm!: FormGroup;
  addressTypes = ['Select Address Type', 'Home', 'Work'];
  countries:string[] = ['Select Country', 'Canada', 'USA'];
  provinces:string[] = [];
  cities:string[] = [];
  result:any ="";

  constructor(private router: Router) {}

  ngOnInit() {
    this.addressForm = new FormGroup({
      addressType: new FormControl(''),
      street: new FormControl(''),
      country: new FormControl(''),
      province: new FormControl({value: '', disabled: true}),
      city: new FormControl({value: '', disabled: true}),
      postalCode: new FormControl(''),
      isMailingAddress: new FormControl(false)
    });

    this.addressForm.get('country')!.valueChanges.subscribe(value => {
      this.provinces = [];
      if (value === 'Canada') {
        this.provinces = ['Select Province', 'Ontario', 'British Columbia'];
      } else if (value === 'USA') {
        this.provinces = ['Select Province', 'California', 'New York'];
      }
      if (this.provinces.length > 0) {
        this.addressForm.get('province')!.enable();
      } else {
        this.addressForm.get('province')!.disable();
      }
    });

    this.addressForm.get('province')!.valueChanges.subscribe(value => {
      this.cities = [];
      if (value === 'Ontario') {
        this.cities = ['Toronto', 'Ottawa'];
      } else if (value === 'British Columbia') {
        this.cities = ['Vancouver', 'Victoria'];
      } else if (value === 'California') {
        this.cities = ['Los Angeles', 'San Francisco'];
      } else if (value === 'New York') {
        this.cities = ['New York City', 'Buffalo'];
      }
      if (this.cities.length > 0) {
        this.addressForm.get('city')!.enable();
      } else {
        this.addressForm.get('city')!.disable();
      }
    });
  }

  submit() {
    this.result =  this.addressForm.value;
  }

  cancel() {
    this.router.navigate(['/default']);
  }

}
