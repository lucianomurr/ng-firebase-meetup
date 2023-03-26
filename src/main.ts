import { importProvidersFrom } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';

import { AppComponent } from './app/app.component';
import { provideFirebaseApp, initializeApp } from '@angular/fire/app';
import { FIREBASE_OPTIONS } from '@angular/fire/compat';
import { environment } from './environments/environment';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';

bootstrapApplication(AppComponent,{
  providers: [
    importProvidersFrom(provideFirebaseApp(() => initializeApp(environment.firebase))),
    { provide: FIREBASE_OPTIONS, useValue: environment.firebase },
    importProvidersFrom(provideFirestore(() => getFirestore())),
  ],
}).catch(err => console.log(err));
