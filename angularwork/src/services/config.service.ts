import { Injectable } from '@angular/core';
import { inject } from '@angular/core/testing';

@Injectable({
  providedIn: 'any'
})
export class ConfigService {

  constructor() {
    console.log('configServices')
   }
}
