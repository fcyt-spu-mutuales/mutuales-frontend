export class EntityDetailResponse {
  success: boolean;
  mutuales: EntityDetail;
}

export class EntityDetail {
success: boolean;
mutual: {
id: number;
cuit: string;
nombre: string;
tipo: string;
estado: boolean;
localidad: Localidad;
direccion: string;
latitud: string;
longitud: string;
telefono: string;
email: string;
fechaInscripcion: Date;
anioFundacion: number;
objetoCreacion: string;
objetoFuncionamiento: string;
dias: string;//'lunes-viernes'; 'lunes-sabado';
horarios: string;//'mañana'; 'tarde'; 'mañana-tarde';
cantidadFiliales: number;
cantidadProvincia: number;
cantidadFueraProvincia: number;
localidadesFiliales: string;
provinciasFiliales: string;
usaRedSocial: boolean;
respondeRelevamiento: string;
}
}

export class Localidad {
id: number;
nombre: string;
codigoPostal: string;
departamento: Departamento;

}

export class Departamento {
  id: number;
  nombre: string;
  provincia: Provincia;
  }

  export class Provincia {
    id: number;
    nombre: string;
  }
