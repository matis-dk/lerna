export function getCurrentDateIso() {
  return new Date().toISOString();
}

export function getCurrentDatePretty() {
  const date = new Date();
  return date.toString();
}
