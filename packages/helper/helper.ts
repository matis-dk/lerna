import { log } from '@reload-lerna/logger/logger'

export function getCurrentDateIso() {
  return new Date().toISOString();
}

export function getCurrentDatePretty() {
  const date = new Date();
  log('heureka');
  return date.toString();
}
