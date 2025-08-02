// Mock implementation of @inform-elevate/elevate-cdk exports
// This provides minimal implementations to allow ELEVATE components to load

export function webComponent(config) {
  // Simple web component decorator/factory
  return function(target) {
    if (config.name && target.prototype) {
      // Ensure the component gets registered with the specified tag name
      if (customElements && !customElements.get(config.name)) {
        try {
          customElements.define(config.name, target);
        } catch (e) {
          console.warn(`Failed to define custom element ${config.name}:`, e);
        }
      }
    }
    return target;
  };
}

export class InjectionToken {
  constructor(description) {
    this.description = description;
    this.symbol = Symbol(description);
  }
  
  toString() {
    return `InjectionToken(${this.description})`;
  }
}

export class DependencyContainer {
  static Symbol = Symbol('DependencyContainer');
  
  constructor() {
    this.services = new Map();
  }
  
  static findOnAncestorOf(element) {
    // Simple implementation that returns a basic container
    if (!element) return new DependencyContainer();
    
    let current = element.parentElement;
    while (current) {
      if (current[DependencyContainer.Symbol]) {
        return current[DependencyContainer.Symbol];
      }
      current = current.parentElement;
    }
    return new DependencyContainer();
  }
  
  register(token, implementation) {
    this.services.set(token, implementation);
  }
  
  resolve(token) {
    return this.services.get(token);
  }
}

export class BehaviourSubject {
  constructor(initialValue) {
    this.value = initialValue;
    this.observers = new Set();
  }
  
  subscribe(observer) {
    this.observers.add(observer);
    // Immediately emit current value
    if (typeof observer === 'function') {
      observer(this.value);
    }
    
    // Return unsubscribe function
    return () => {
      this.observers.delete(observer);
    };
  }
  
  next(value) {
    this.value = value;
    this.observers.forEach(observer => {
      if (typeof observer === 'function') {
        observer(value);
      }
    });
  }
  
  getValue() {
    return this.value;
  }
}

// Additional exports found in ELEVATE components
export class Subject {
  constructor() {
    this.observers = new Set();
  }
  
  subscribe(observer) {
    this.observers.add(observer);
    return () => {
      this.observers.delete(observer);
    };
  }
  
  next(value) {
    this.observers.forEach(observer => {
      if (typeof observer === 'function') {
        observer(value);
      }
    });
  }
}

export class Subscriptions {
  constructor() {
    this.subscriptions = new Set();
  }
  
  add(subscription) {
    this.subscriptions.add(subscription);
  }
  
  unsubscribe() {
    this.subscriptions.forEach(sub => {
      if (typeof sub === 'function') {
        sub();
      } else if (sub && typeof sub.unsubscribe === 'function') {
        sub.unsubscribe();
      }
    });
    this.subscriptions.clear();
  }
}

export class EventSubscription {
  constructor(unsubscribeFn) {
    this.unsubscribeFn = unsubscribeFn;
  }
  
  unsubscribe() {
    if (this.unsubscribeFn) {
      this.unsubscribeFn();
    }
  }
}

// Utility functions
export function delay(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

// Color utility
export class RgbColor {
  constructor(r, g, b, a = 1) {
    this.r = r;
    this.g = g;
    this.b = b;
    this.a = a;
  }
  
  toString() {
    return `rgba(${this.r}, ${this.g}, ${this.b}, ${this.a})`;
  }
}

// Export default as well for compatibility
export default {
  webComponent,
  InjectionToken,
  DependencyContainer,
  BehaviourSubject,
  Subject,
  Subscriptions,
  EventSubscription,
  delay,
  RgbColor
};