declare module 'readline' {
    import { EventEmitter } from 'events';
  
    interface ReadLine extends EventEmitter {
      question(query: string, callback: (answer: string) => void): void;
      close(): void;
    }
  
    export function createInterface(options: any): ReadLine;
  }
  