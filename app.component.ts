import { Component, OnInit } from '@angular/core';
import { FormGroup, ReactiveFormsModule ,  FormControl, Validators,FormBuilder } from '@angular/forms';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})



export class AppComponent implements OnInit {

    interpolation:string='Hi Ajay';
ngOnInit(){

}
}