import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import * as admin from 'firebase-admin';
import { ServiceAccount } from 'firebase-admin';

@Injectable()
export class FcmService {
  constructor(private configService: ConfigService) {
    const adminConfig: ServiceAccount = {
      projectId: configService.get<string>('FIREBASE_PROJECT_ID'),
      privateKey: configService
        .get<string>('FIREBASE_PRIVATE_KEY')
        .replace(/\\n/g, '\n'),
      clientEmail: configService.get<string>('FIREBASE_CLIENT_EMAIL'),
    };
    // apiKey: "AIzaSyC_ZZUoaK4y0ItFDPEo0QroSubHUKcVOag",
    // authDomain: "bi-poc-49f29.firebaseapp.com",
    // projectId: "bi-poc-49f29",
    // storageBucket: "bi-poc-49f29.appspot.com",
    // messagingSenderId: "874655815853",
    // appId: "1:874655815853:web:72c03ab49be85e09bc4e24",
    // measurementId: "G-JRH3DPK160",
    admin.initializeApp({
      credential: admin.credential.cert(adminConfig),
    });
  }
}
