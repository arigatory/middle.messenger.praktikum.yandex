import { Model } from './Model';
import { Attributes } from './Attributes';
import { Eventing } from './Eventing';
import { Collection } from './Collection';

export interface UserProps {
  email?: string;
  login?: string;
  firstName?: string;
  lastName?: string;
  nameInChat?: string;
  phone?: string;
  id?: number;
}

const rootUrl = 'http://localhost:3000/users';

export class User extends Model<UserProps> {
  static buildUser(attrs: UserProps) {
    return new User(new Attributes<UserProps>(attrs), new Eventing());
  }

  static buildUserCollection(): Collection<User, UserProps> {
    return new Collection<User, UserProps>(rootUrl, (json: UserProps) =>
      User.buildUser(json)
    );
  }
}
