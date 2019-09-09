import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { UrlResolver } from '@angular/compiler';
import { User } from '../user.model';

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.sass']
})
export class FormsComponent implements OnInit {

  users: User[];
  imageSrc: string = '';

  id: number;
  name: string;
  dob: string;
  postal: string;

  constructor(private _user: UserService) { }

  ngOnInit() {
  }

  handleInputChange(e: any): void {
    var file = e.dataTransfer ? e.dataTransfer.files[0] : e.target.files[0];
    var pattern = /image-*/;
    var reader = new FileReader();
    if (!file.type.match(pattern)) {
      alert('invalid format');
      return;
    }
    reader.onload = this._handleReaderLoaded.bind(this);
    reader.readAsDataURL(file);
  }
  _handleReaderLoaded(e: any): void {
    let reader = e.target;
    this.imageSrc = reader.result;
    console.log(this.imageSrc);
  }


  addUser(name: string, dob: string, postal: string): void {
    name = name.trim();
    let imgPath: string = this.imageSrc;
    this._user.insertUser({ name, dob, postal, imgPath } as User)
    .subscribe(user => {
      console.log(user);
      this.users.push(user);
    })
  }

}