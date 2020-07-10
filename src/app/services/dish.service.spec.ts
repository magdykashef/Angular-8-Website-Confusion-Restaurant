/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { DishService } from './dish.service';

describe('Service: Dish', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DishService]
    });
  });

  it('should ...', inject([DishService], (service: DishService) => {
    expect(service).toBeTruthy();
  }));
});
