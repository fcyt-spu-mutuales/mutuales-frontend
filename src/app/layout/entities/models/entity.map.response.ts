export class EntityMap {
    id: number;
    name: string;
    address: string;
    latitude: number;
    longitude: number;
    type: string;
}

export class EntityForMap {
  success: boolean;
  cooperatives: [EntityMap];
}
