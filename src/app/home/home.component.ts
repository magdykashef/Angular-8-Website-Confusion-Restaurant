import { Component, OnInit, Inject } from '@angular/core';
import { Dish } from '../shared/dish';
import { DishService } from '../services/dish.service';
import { Promotion } from '../shared/promotion';
import { PromotionService } from '../services/promotion.service';
import { Leader } from '../shared/leader';
import { LeaderService } from '../services/leader.service';
import { flyInOut, expand } from '../animations/app.animation';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  host: {
    '[@flyInOut]': 'true',
    'style': 'display: block;'
  },
  animations: [
    flyInOut(),
    expand()
  ]
})
export class HomeComponent implements OnInit {

  dish: Dish;
  promotion: Promotion;
  featuredLeader: Leader;
  dishErrMess: string;
  url: string;

  constructor(private dishservice: DishService,
    private leaderService: LeaderService,
    private promotionservice: PromotionService,
    @Inject('BaseURL') private BaseURL) {
    this.url = this.BaseURL;
  }

  ngOnInit() {
    this.dishservice.getFeaturedDish()
      .subscribe(dish => this.dish = dish,
        dishErrMess => this.dishErrMess = <any>dishErrMess);

    this.promotionservice.getFeaturedPromotion()
      .subscribe(promotion => this.promotion = promotion,
        dishErrMess => this.dishErrMess = <any>dishErrMess);

    this.leaderService.getfeaturedLeader()
      .subscribe(featuredLeader => this.featuredLeader = featuredLeader,
        dishErrMess => this.dishErrMess = <any>dishErrMess);
  }

}
