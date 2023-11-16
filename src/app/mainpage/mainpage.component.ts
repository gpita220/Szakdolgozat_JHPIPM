import { StorageService } from 'src/app/Service/storage.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-mainpage',
  templateUrl: './mainpage.component.html',
  styleUrls: ['./mainpage.component.css']
})
export class MainpageComponent {
  public currentuser:any;
  constructor(private storageService:StorageService) {}
  ngOnInit(): void {
    this.currentuser=this.storageService.getUser();
  }

  
}
