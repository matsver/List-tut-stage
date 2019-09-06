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

  id: number;
  name: string;
  dob: string;
  postal: string;

  constructor(private _user: UserService) { }

  ngOnInit() {
  }


  addUser(name: string, dob: string, postal: string): void {
    name = name.trim();
    this._user.insertUser({ name, dob, postal } as User)
    .subscribe(user => {
      console.log(user);
      this.users.push(user);
    })
  }

}
