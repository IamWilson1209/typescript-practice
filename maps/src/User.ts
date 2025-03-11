import { faker } from '@faker-js/faker';
import { Mappable } from './CustomMap';

export class User implements Mappable { // implements 確保User滿足所有 Mappable 擁有的屬性
  name: string;
  location: {
    lat: number;
    lng: number;
  };
  markerContent(): string {
    return `User: ${this.name}`;
  };
  constructor() {
    this.name = faker.name.firstName();
    this.location = {
      lat: parseFloat(faker.address.latitude()),
      lng: parseFloat(faker.address.longitude()),
    };
  }
}
