/* tslint:disable:no-any */

declare module 'loglevel' {
  type level =
      'silent' | 'trace' | 'debug' | 'info' | 'warn' | 'error' | number;

  export function trace(...args: any[]): void;
  export function debug(...args: any[]): void;
  export function info(...args: any[]): void;
  export function warn(...args: any[]): void;
  export function error(...args: any[]): void;

  export function getLevel(): number;
  export function setLevel(level: level, persist?: boolean): void;
  export function setDefaultLevel(level: level): void;
}
