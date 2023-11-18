import { StorageService } from 'src/app/Service/storage.service';
import { ChangeDetectorRef, Component } from '@angular/core';
import { BnNgIdleService } from 'bn-ng-idle';
import { Router } from '@angular/router';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Szakdoga-JHPIPM';
  constructor(private bnIdle: BnNgIdleService, private strogareService: StorageService, private route:Router) {
    this.bnIdle.startWatching(1200).subscribe((isTimedOut: boolean) => {
      
      if (isTimedOut) {
        console.log(this.bnIdle);
        
        console.log('session expired');
        if(this.strogareService.isLoggedIn()){
          this.strogareService.clean();
          this.route.navigate(["/login"]);
          alert("Inaktív voltál, ezért most kijelentkeztetünk!");
        } else alert("Inaktív vagy!");
        this.bnIdle.resetTimer();
      }
    });
    }
    
  }


