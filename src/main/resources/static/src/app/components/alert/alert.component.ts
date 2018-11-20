import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { AlertService } from '../../services/alert.service';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.css']
})
export class AlertComponent implements OnInit, OnDestroy {
  private subscription: Subscription;
  message: any;
  check = false;

  constructor(private alertService: AlertService) { }

  ngOnInit() {
      this.subscription = this.alertService.getMessage().subscribe(message => {
          this.message = message;
          this.check = true;
      });
  }

  ngOnDestroy() {
      this.subscription.unsubscribe();
      this.check = false;
  }
}

