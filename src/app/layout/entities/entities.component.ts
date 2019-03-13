import { Component, OnInit } from '@angular/core';

import { routerTransition } from 'src/app/router.animations';
import { ApiService } from '../../shared/services/api.service';
import { EntityForMap } from './models/entity.map.response';

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
  constructor(private apiService: ApiService) {}

  async ngOnInit(): Promise<void> {
    this.initialLatitude = -32.3779726;
    this.initialLongitude = -59.0698283;
    this.initialZoom = 8;
    await this.getItemsForMap();
  }

  async getItemsForMap() {
    this.response = await this.apiService.getAllEntitiesForMap();
  }
}
