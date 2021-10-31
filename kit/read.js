import { timeout } from "../kit";

export default async (callback, keep = false) => {
  // Use Promise
  keep
    ? timeout(async () => callback(await navigator.clipboard.readText()))
    : callback(await navigator.clipboard.readText());
};
