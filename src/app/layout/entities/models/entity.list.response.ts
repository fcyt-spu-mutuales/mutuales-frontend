export class EntityListResponse {
  success: boolean;
  mutuales: Entity[];
  cantidad: number;
}

export class Entity {
  id: number;
  nombre: string;
  direccion: string;
  tipo: string
}
