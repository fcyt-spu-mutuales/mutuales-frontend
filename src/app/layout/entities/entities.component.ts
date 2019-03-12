import { Component, OnInit } from '@angular/core';

import { routerTransition } from 'src/app/router.animations';

@Component({
  selector: 'app-entities',
  templateUrl: './entities.component.html',
  styleUrls: ['./entities.component.scss'],
  animations: [routerTransition()]
})
export class EntityComponent implements OnInit {

  itemsPerPage: number;
  totalItems: any;
  page: any;
  previousPage: any;
  ngOnInit(): void {}
}
