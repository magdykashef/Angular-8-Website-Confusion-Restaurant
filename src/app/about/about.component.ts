import { Component, OnInit, Inject } from '@angular/core';
import { Leader } from '../shared/leader';
import { LeaderService } from '../services/leader.service';
import { flyInOut, expand } from '../animations/app.animation';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
  host: {
    '[@flyInOut]': 'true',
    'style': 'display: block;'
  },
  animations: [
    flyInOut(),
    expand()
  ]
})
export class AboutComponent implements OnInit {
  leaders: Leader[];
  featuredLeader: Leader;
  url: string;
  dishErrMess: string;

  constructor(private leaderService: LeaderService,
    @Inject('BaseURL') private BaseURL) {
    this.url = this.BaseURL;
  }
  ngOnInit(): void {
    this.leaderService.getLeaders()
      .subscribe(leaders => this.leaders = leaders,
        dishErrMess => this.dishErrMess = <any>dishErrMess);
  }
}