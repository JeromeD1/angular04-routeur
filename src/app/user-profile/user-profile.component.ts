import { Component } from '@angular/core';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrl: './user-profile.component.scss'
})
export class UserProfileComponent {
  user = {
    name : 'Doe',
    firstName : 'John',
    age : 25,
    quote : '',
    photo : 'https://randomuser.me/api/portraits/lego/2.jpg'
   }
  
   nameDisplay : boolean = true;
  
   changeNameDisplay() {
    this.nameDisplay = !this.nameDisplay;
   }
  
   classVisibility: string = "showAge";
  
   changeClassVisibility() {
    if(this.classVisibility === "showAge") {
      this.classVisibility = "hideAge";
    } else {
      this.classVisibility = "showAge";
    }
   }
  
  
}
