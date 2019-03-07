export class UserListRequest {
  firstName?: string;
  lastName?: string;
  email?: string;
  enabled?: boolean;
  limit: number;
  offset: number;

  constructor() {
    this.limit = 5;
    this.offset = 0;
    this.enabled = true;
  }
}
