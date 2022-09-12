import { Model } from './Model';
import { Attributes } from './Attributes';
import { Eventing } from './Eventing';

export interface RegistrationProps {
  id?: number;
  Registration?: string;
  password?: string;
}

export class Registration extends Model<RegistrationProps> {
  static buildRegistration(attrs: RegistrationProps): Registration {
    return new Registration(new Attributes<RegistrationProps>(attrs), new Eventing());
  }
}
