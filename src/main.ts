import { StreamClient } from "@stream-io/node-sdk";

export function getStreamClient() {
  return new StreamClient("", "");
}
