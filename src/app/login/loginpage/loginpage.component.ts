import { Component, EventEmitter, Output } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/Service/auth.service';
import { StorageService } from 'src/app/Service/storage.service';

@Component({
  selector: 'app-loginpage',
  templateUrl: './loginpage.component.html',
  styleUrls: ['./loginpage.component.css']
})
export class LoginpageComponent {
	user: any = {
		username: null,
		password: null
	};
	isLoggedIn = false;
	isLoginFailed = false;
	errorMessage = '';
	roles: string[] = [];
	
	hide=true;
	constructor(private authService: AuthService, private storageService: StorageService, private route:Router) { }
	
	ngOnInit(): void {
		if (this.storageService.isLoggedIn()) {
		this.isLoggedIn = true;
		this.roles = this.storageService.getUser().roles;
		}
		this.hide=true;
		
	}
	
	onSubmit(): void {
		const { username, password } = this.user;
	
		this.authService.login(username, password).subscribe({
		next: data => {
			this.storageService.saveUser(data);
	
			this.isLoginFailed = false;
			this.isLoggedIn = true;
			this.roles = this.storageService.getUser().roles;
			
			this.route.navigate(["/mainpage"]);
		},
		error: err => {
			this.errorMessage = err.error.message;
			this.isLoginFailed = true;
		}
		});
	}
	
	reloadPage(): void {
		window.location.reload();
	}

	public passwordType(){
		this.hide=!this.hide;
	}  
}
