import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../../service/api.service';


@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css'],
})
export class ViewComponent implements OnInit {
  constructor(
    private apiService: ApiService,
    private activateRoutr: ActivatedRoute
  ) {}
  productId: any;
  arr = [];
  details: any;
  ngOnInit(): void {
    this.productId = this.activateRoutr.snapshot.params['id'];
    this.apiService.getProduct().subscribe((res: any) => {
      this.arr = res;
      if (res && this.arr) {
        let filteredArr = this.arr.filter((item: any) => {
          return item?.id == this.productId;
        });
        console.log(this.details);
        this.details = filteredArr[0];
      }
    });
  }
}
