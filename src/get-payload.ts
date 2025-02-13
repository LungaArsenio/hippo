import dotenv from 'dotenv';
import path from 'path';
import type { InitOptions } from 'payload';
import payload  from 'payload';

dotenv.config({
  //first half gets the current directory and second half gets out of the current directory to catch the file named env
  path: path.resolve(__dirname, "../.env")
})
// eslint-disable-next-line @typescript-eslint/no-explicit-any
let cached = (global as any).payload;

if (!cached) {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  cached = (global as any).payload = {
    client: null,
    promise: null,
  }
}

interface Args {
  initOptions?: Partial<InitOptions>
}

export const getPayloadClient = async ({ initOptions }: Args = {}) => {
  if (!process.env.PAYLOAD_SECRET) {
    throw new Error('PAYLOAD_SECRET is not set');
  }

  if (cached.client) {
    return cached.client
  }

  if (!cached.promise) {
    cached.promise = payload.init({
      secret: process.env.PAYLOAD_SECRET,
      local: initOptions?   false : true,
      ...(initOptions || {}),
    } as InitOptions)
  }

  try {
    cached.client = await cached.promise;
  } catch (e: unknown) {
    cached.promise = null;
    throw e;
  }

  return cached.client;
}
