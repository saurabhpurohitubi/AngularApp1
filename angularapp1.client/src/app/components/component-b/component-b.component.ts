import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SharedService } from '../../services/shared.service';

@Component({
  selector: 'app-component-b',
  templateUrl: './component-b.component.html',
  styleUrls: ['./component-b.component.css']
})
export class ComponentBComponent implements OnInit {
  receivedMessage: string | null = '';
  receivedMessage2: string | null = '';

  constructor(private sharedService: SharedService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.route.queryParamMap.subscribe(params => {
      this.receivedMessage = params.get('message');
    });

    this.receivedMessage2 = this.sharedService.getMessage();
  }

  goBack() {
    this.router.navigate(['/component-a']);
  }
}
