import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { Client, LatLngString } from '@googlemaps/google-maps-services-js';

@Injectable()
export class GoogleService {
  constructor(private readonly configService: ConfigService) {}

  googleClient = new Client({});

  async getDistance(from: LatLngString, to: LatLngString): Promise<number> {
    const results = await this.googleClient.distancematrix({
      params: {
        key: this.configService.get('GOOGLE_API_KEY'),
        origins: [from],
        destinations: [to],
      },
    });

    const distance = results.data.rows[0].elements[0].distance.value;
    return distance;
  }
}
