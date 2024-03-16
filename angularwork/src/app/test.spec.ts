import { Component } from '@angular/core';
import { TestService } from './testservice';

describe('TestService', () => {
  it('Should add 2 numbers', () => {
    const service = new TestService();
    expect(service.add(2, 2)).toBe(4);
  });

  it('Should substract 2 numbers', () => {
    const service = new TestService();
    expect(service.substract(2, 2)).toBe(0);
  });
});

// ng test --code-covarge
