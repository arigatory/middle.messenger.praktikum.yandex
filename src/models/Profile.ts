import { Model } from './Model';
import { Attributes } from './Attributes';
import { Eventing } from './Eventing';

export interface ProfileProps {
  // id of current user
  id?: number;
  picture: string;
}

export class Profile extends Model<ProfileProps> {
  static buildProfile(attrs: ProfileProps): Profile {
    return new Profile(new Attributes<ProfileProps>(attrs), new Eventing());
  }
}
