import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { ModalService } from '../modal.service';
import { User } from '../user.model';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.sass']
})
export class UserListComponent implements OnInit {

  users: object;
  id: number; 
  name: string;
  dob: string;
  postal: string;

  constructor(private _user: UserService, private modalService: ModalService) { }

  ngOnInit() {
    this._user.getAllUsers().subscribe(data => {
      let res: any = data["users"];
      console.log(res);
      this.users = res["users"];
      console.log(this.users);
    });
  }

  deleteUser(id: number): void {
    this._user.deleteUser(id).subscribe(user => {
      console.log(user);
    })
  }

  editUser(id: number, name: string, dob: string, postal: string): void {
    this._user.updateUser(id, { name, dob, postal } as User)
      .subscribe(user => {
        console.log(user);
      })
    this.closeModal('custom-modal-1');
  }

  openModal(id: string, _id: number): void {
    this.id = _id;
    this.modalService.open(id);
  }

  closeModal(id: string): void {
    this.modalService.close(id);
  }

}
