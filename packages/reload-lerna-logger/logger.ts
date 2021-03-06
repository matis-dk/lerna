export function log(msg: string) {
  if (typeof msg === "string") {
    console.info(`LOG: ${msg}`);
  }

  console.log({
    msg,
  });
}

export const emojis = {
  unicorn: "🦄",
  fire: "🔥",
};

export function logPretty(msg: string) {
  const { unicorn, fire } = emojis;
  console.log(`${unicorn} LOG: ${msg} ${fire}`);
}

log("asdasdas");
