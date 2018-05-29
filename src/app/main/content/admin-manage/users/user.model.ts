import { FuseUtils } from '../../../../core/fuseUtils';
export class User {
  id: string;
  identity: {
    email: string,
    userName: string,
    password: string,
    confirmPassword: string
  };
  profile: {
    firstName: string,
    lastName: string,
    position: string,
    signature: string,
    id: string
  }
  userRoles: string[];
  constructor(user) {
    {
      this.id = user.id;
      this.identity = user.identity;
      this.profile = user.profile;
      this.userRoles = user.userRoles;
    }
  }
}
