import { Component } from '@angular/core';
import { faLinkedin} from '@fortawesome/free-brands-svg-icons';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { faPenToSquare } from '@fortawesome/free-regular-svg-icons';
@Component({
  selector: 'app-model',
  templateUrl: './model.component.html',
  styleUrls: ['./model.component.css']
})
export class ModelComponent {
  myLinkedinIcon=faLinkedin;
  myTrashIcon=faTrash;
  myPenToSquareIcon=faPenToSquare;
  list:any[]=['item1','item1','item1'];
   listItems:any[]=[{model:"Model1",cell:"Physics"},{model:"Model2",cell:"Physics"},{model:"Model3",cell:"Physics"},{model:"Model4",cell:"Physics"},{model:"Model5",cell:"Physics"}];
   
}
