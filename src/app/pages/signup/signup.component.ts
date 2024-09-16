import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { User } from 'src/app/models';
import { AccountService } from 'src/app/services/account.service';
import { UserService } from 'src/app/services/user.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  json: { username: string; password: string; firstname: string; lastname: string; email: string; phone: string; } | undefined;

  constructor(private userservice: UserService, private authService: AccountService, private snack: MatSnackBar) { }

  public user: User = {
    username: '',
    password: '',
    name: '',
    lastname: '',
    email: '',
    Role: '',
    number: 0,
  }

  ngOnInit(): void { }

  formSubmit() {
    console.log(this.user)

    // Username
    if (!this.user.username || !/^[a-zA-Z]+$/.test(this.user.username) || this.user.username.length < 3) {
      this.snack.open('Username must contain only letters and be at least 3 characters long !!!', '', {
        duration: 3000,
      });
      return;
    }

    if (!this.user.name || !/^[a-zA-Z]+$/.test(this.user.name) || this.user.name.length < 3) {
      this.snack.open('Name must contain only letters and be at least 3 characters long !!!', '', {
        duration: 3000,
      });
      return;
    }

    // Password
    if ((this.user.password ?? '').length < 2) {
      this.snack.open('Password must be at least 2 characters long !!!', '', {
        duration: 3000,
      });
      return;
    }

    // Lastname
    if (!this.user.lastname || !/^[a-zA-Z]+$/.test(this.user.lastname) || this.user.lastname.length < 3) {
      this.snack.open('Lastname must contain only letters and be at least 3 characters long !!!', '', {
        duration: 3000,
      });
      return;
    }

    // Email
    if (this.user.email == '' || this.user.email == null) {
      this.snack.open('Email is required !!!', '', {
        duration: 3000,
      });
      return;
    }

    // Phone number
    if (!this.user.number || !/^\d{8}$/.test(this.user.number.toString())) {
      this.snack.open('Phone number must be composed of 8 digits !!!', '', {
        duration: 3000,
      });
      return;
    }

    const roleName = this.user.Role || 'THERAPIST';

    // addUser:userService
    this.authService.register(this.user, roleName).subscribe((data: any) => {
      localStorage.setItem('email', this.user.email || '');

      // Success
      console.log(data);
      // alert('success');
      Swal.fire('Open your email to activate your account !!');
    },
      (error) => {
        console.log(error);
        // Alert something wrong
        this.snack.open('Something went wrong !!', '', {
          duration: 3000,
        });
      }
    );
  }
}
