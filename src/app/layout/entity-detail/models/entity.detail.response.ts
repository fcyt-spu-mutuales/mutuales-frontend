export class EntityDetailResponse {
  success: boolean;
  cooperative: EntityDetail;
  totalElements: number;
}

export class EntityDetail {
  id: number;
  name: string;
  address: string;
  phoneNumber: string;
  type: string;
  latitude: string;
  longitude: string;
}
