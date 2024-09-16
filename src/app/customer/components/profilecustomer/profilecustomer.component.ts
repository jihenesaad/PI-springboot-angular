import { Component } from '@angular/core';
import { User } from 'src/app/models';
import { UserlistService } from 'src/app/pages/profile/userlist.service';
import { AccountService } from 'src/app/services/account.service';

@Component({
  selector: 'app-profilecustomer',
  templateUrl: './profilecustomer.component.html',
  styleUrls: ['./profilecustomer.component.css']
})
export class ProfilecustomerComponent {

  user: User=new User()||{};
  users: User[]= [];

  iduser:any;
  constructor( private login:AccountService,private UserlistService:UserlistService) { 
    this.iduser=login.userid;
    console.log(this.iduser);
  }

  ngOnInit(): void {
    //console.error('profile');

   // this.user = this.login.getCurrentUser();
   this.login.getCurrentUser(this.iduser).subscribe(
     (user:User) =>{
        this.user=user;
        console.log(user);
      },
      (error)=>{
        alert('errp!!!');
      }
    )
    this.getAllUsers();

  }

public getAllUsers() {
  this.UserlistService.getUserList().subscribe((data: User[]) => {
    this.users = data;
  });
}
private getUser() {
  this.UserlistService.getUserList().subscribe((data: User[]) => {
    this.users = data;
  });
}




activateUser(user: User): void {
  if (user.iduser) {
    this.UserlistService.debloqueruser(user.iduser).subscribe(
      () => {
        console.log('Utilisateur activé avec succès.');
        this.getAllUsers();
        // user.valid=true;
        // Faire quelque chose après l'activation réussie
      },
      (error) => {
        console.error('Une erreur s\'est produite lors de l\'activation :', error);
        // Gérer l'erreur d'activation
      }
    );
  }
}
}
