import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SharedService } from '../../services/shared.service';
import { Config } from 'datatables.net';

@Component({
  selector: 'app-component-a',
  templateUrl: './component-a.component.html',
  styleUrls: ['./component-a.component.css']
})
export class ComponentAComponent implements OnInit {

  dtOptions: Config = {};

  ngOnInit(): void {
    this.dtOptions = {
      pagingType: 'full_numbers'
    };
  }
  message: string = '';

  constructor(private sharedService: SharedService,private router: Router) { }

  navigateToComponentB() {
    this.router.navigate(['/component-b'], { queryParams: { message: this.message } });
  }

  sendMessage() {
    this.sharedService.setMessage(this.message);
    this.router.navigate(['/component-b']);
  }
}
