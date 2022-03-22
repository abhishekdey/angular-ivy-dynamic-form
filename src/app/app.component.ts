import { Component, OnInit, VERSION } from '@angular/core';
interface FormField {
  id: number;
  formField1: {
    value: any;
    type: string;
    disable: boolean;
    visible: boolean;
    placeholder: string;
  };
  formField2: {
    value: any;
    type: string;
    disable: boolean;
    visible: boolean;
    placeholder: string;
  };
}
@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  public mainForm: {
    formFields: FormField[];
  };

  ngOnInit() {
    this.mainForm = {
      formFields: [],
    };

    // Add an initial form-entry
    this.addForm();
  }

  public addForm(): void {
    debugger;
    this.mainForm.formFields.push({
      id: Date.now(),
      formField1: {
        value: '',
        type: 'any',
        disable: false,
        visible: true,
        placeholder: 'Fiels 1',
      },
      formField2: {
        value: '',
        type: 'any',
        disable: false,
        visible: true,
        placeholder: '',
      },
    });
  }

  public removeForm(index: number): void {
    this.mainForm.formFields.splice(index, 1);
  }

  public submitForm(form) {
    if (form.valid) {
      console.log(form.value);
      // ...Now you can submit the data
    }
  }
}
