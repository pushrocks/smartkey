import * as plugins from './smartkey.plugins';
import { KeyPair } from './smartkey.classes.keypair';

export class SmartKey {
  // instance
  public async getKeypair(passohrase?: string): Promise<KeyPair> {
    return KeyPair.createKeyPair();
  }
}
