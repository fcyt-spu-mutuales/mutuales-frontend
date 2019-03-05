export class UserListResponse {
  success: boolean;
  users: User[];
  totalElements: number;
}

export class User {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  enabled: boolean;
}
