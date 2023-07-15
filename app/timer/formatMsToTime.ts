// Converts a number of milliseconds to a string of minutes and seconds
export function formatMsToTime(duration: number) {
  // Make sure we run the whole second first, and finish when we hit 0
  const date = new Date(Date.UTC(0, 0, 0, 0, 0, Math.ceil(duration / 1000)));
  return `${date.getUTCMinutes()}:${String(date.getUTCSeconds() || 1).padStart(
    2,
    "0",
  )}`;
}
