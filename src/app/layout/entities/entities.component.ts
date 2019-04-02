import { Component, OnInit } from '@angular/core';

import { routerTransition } from 'src/app/router.animations';
import { ApiService } from '../../shared/services/api.service';
import { EntityForMap } from './models/entity.map.response';
import { Entity, EntityListResponse } from './models/entity.list.response';
import { EntityListRequest } from './models/entity.list.request';

@Component({
  selector: 'app-entities',
  templateUrl: './entities.component.html',
  styleUrls: ['./entities.component.scss'],
  animations: [routerTransition()]
})
export class EntityComponent implements OnInit {
  response: EntityForMap;
  initialLatitude: number;
  initialLongitude: number;
  initialZoom: number;

  listRequest: EntityListRequest;
  listResponse: EntityListResponse;
  itemsPerPage: number;
  totalItems: any;
  page: any;
  previousPage: any;

  constructor(private apiService: ApiService) {
    this.listRequest = new EntityListRequest();
  }

  async ngOnInit(): Promise<void> {
    this.initialLatitude = -31.8053418;
    this.initialLongitude = -59.1664531;
    this.initialZoom = 8;
    await this.getItemsForMap();
    await this.getItems();
    this.itemsPerPage = this.listRequest.limit;
    this.totalItems = this.listResponse.totalElements;
  }

  async getItemsForMap() {
    this.response = await this.apiService.getAllEntitiesForMap();
  }

  async getItems() {
    this.listResponse = await this.apiService.getAllEntities(this.listRequest);
  }

  loadPage(page: number) {
    if (page !== this.previousPage) {
      this.previousPage = page;
      this.listRequest.offset = (page - 1) * this.listRequest.limit;
      this.getItems();
    }
  }
}
