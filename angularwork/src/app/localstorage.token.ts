import { InjectionToken } from '@angular/core';

export const localStorageToken = new InjectionToken<any>('local storage', {
  providedIn: 'root',
  factory() {
    return localStorage;
  },
});

// common used in js to make a get ready everytime updates are made
// getData -> addData -> getData

// rxjs is pushing the stream to the user as soon as subscription is made a connection to the data

// getData -> continous stream of data -> addData


//07:55:00-08:00:00