import {Component, OnInit} from "@angular/core";
import {FormControl, Validators} from '@angular/forms';
import {User} from '../models/user-model.component';
import {DataService} from '../services/data.service';

@Component({
  selector: 'task-form',
  templateUrl: 'task-form.component.html',
  styleUrls: ['task-form.component.css']
})
export class TaskForm implements OnInit {

  private firstName: FormControl;
  private lastName: FormControl;
  private email: FormControl;
  private idNumber: FormControl;
  private city: FormControl;

  private EMAIL_PATTERN = /\S+@\S+\.\S+/;
  private ID_PATTERN = /[0-9]{4}\/[0-9]{4}\/[0-9]{2}$/;
  private NAMES_PATTERN = /^[A-z]+$/;
  private CITY_PATTERN = /^[a-zA-Z\s]*$/;

  constructor(private dataService: DataService) {}

  ngOnInit() {
    this.firstName = new FormControl('', [Validators.required, Validators.pattern(this.NAMES_PATTERN)]);
    this.lastName = new FormControl('', [Validators.pattern(this.NAMES_PATTERN)]);
    this.email = new FormControl('', [Validators.required, Validators.pattern(this.EMAIL_PATTERN)]);
    this.idNumber = new FormControl('', [Validators.required, Validators.pattern(this.ID_PATTERN)]);
    this.city = new FormControl('', [Validators.pattern(this.CITY_PATTERN)]);
  }

 private getErrorMessage(field: FormControl, name?: string): string {
   if (field.hasError('pattern') && name === 'email') {
     return 'Wring email format. Should be username@domain.com.';
   }
   if (field.hasError('pattern') && name === 'idNumber') {
     return 'Wring email format. Should be 0000/0000/00.';
   }
   if (field.hasError('pattern')) return 'Invalid format. Characters only.';
   if (field.hasError('required')) return 'Field Cannot be empt.';
   return '';
 }

  private clear() {
    this.firstName.reset();
    this.lastName.reset();
    this.email.reset();
    this.idNumber.reset();
    this.city.reset();
  }

  private send() {
    const user: User = new User(this.firstName.value, 
                                this.lastName.value,
                                this.email.value,
                                this.idNumber.value,
                                this.city.value);
    this.dataService.addMockRequest(user);
    // *** for server request:                            
    // const url = 'path_to_the_server/' + user.getUrl();                            
    // this.dataService
    //     .createUser(url, user)
    //     .subscribe(res => console.log('USER CREATED'),
    //               error => console.log(error.getErrorMessage()));                                 
    this.clear();
  }

  private disableSend(): boolean {
    return (this.firstName.invalid ||
            this.lastName.invalid ||
            this.idNumber.invalid ||
            this.email.invalid ||
            this.city.invalid);
  }

}
