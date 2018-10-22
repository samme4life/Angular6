import {Component, ViewChild} from '@angular/core';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  @ViewChild('f') signupForm: NgForm;
  defaultQuestion = 'teacher';
  defaultUsername = 'akain';
  answer = '';
  genders = ['male', 'female', 'other'];

  suggestUserName() {
    const suggestedName = 'Superuser';
    this.signupForm.form.patchValue({
      userData: {
        username: suggestedName
      }
    });
  }

  // onSubmit(form: NgForm) {
  //   console.log('Submitted');
  //   console.log(form);
  // }

  onSubmit(form: NgForm) {
    console.log('Submitted');
    console.log(this.signupForm);
  }
}
