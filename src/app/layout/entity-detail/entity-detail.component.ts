import { Component, OnInit } from '@angular/core';
import { routerTransition } from 'src/app/router.animations';
import { ApiService } from '../../shared/services/api.service';
import { ActivatedRoute } from '@angular/router';
import { EntityDetailRequest } from 'src/app/layout/entity-detail/models/entity.detail.request';
import { EntityDetailResponse } from 'src/app/layout/entity-detail/models/entity.detail.response';


@Component({
  selector: 'app-entity-detail',
  templateUrl: './entity-detail.component.html',
  styleUrls: ['./entity-detail.component.scss'],
  animations: [routerTransition()]
})
export class EntityDetailComponent implements OnInit {
  initialLatitude: number;
  initialLongitude: number;
  initialZoom: number;

  detailRequest: EntityDetailRequest;
  detailResponse: EntityDetailResponse;

  constructor(private apiService: ApiService, private route: ActivatedRoute) { 
    this.detailRequest = new EntityDetailRequest();
  }

  async ngOnInit(): Promise<void> {
    this.initialLatitude = -31.8053418;
    this.initialLongitude = -59.1664531;
    this.initialZoom = 8;
    
    this.detailRequest.id = this.route.snapshot.params.id;
    await this.getEntityDetail();
    console.log(this.detailResponse);
   }

  async getEntityDetail() {
    this.detailResponse = await this.apiService.getEntityDetail(this.detailRequest);
  }

}
