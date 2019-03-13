export class EntityListResponse {
  success: boolean;
  cooperatives: Entity[];
  totalElements: number;
}

export class Entity {
  id: number;
  name: string;
  address: string;
  type: string;
}
