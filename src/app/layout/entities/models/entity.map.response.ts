export class EntityMap {
    id: number;
    nombre: string;
    direccion: string;
    latitud: number;
    longitud: number;
    tipo: string;
}

export class EntityForMap {
  success: boolean;
  mutuales: [EntityMap];
  cantidad: number
}
