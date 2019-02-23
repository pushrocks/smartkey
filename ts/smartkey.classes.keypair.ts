import * as plugins from './smartkey.plugins';

/**
 * represents a keypair
 */
export class KeyPair  {
  // static
  public static async createKeyPair (passphraseArg = ''): Promise<KeyPair> {
    const done = plugins.smartpromise.defer<KeyPair>();
    plugins.crypto.generateKeyPair('rsa', {
      modulusLength: 4096,
      publicKeyEncoding: {
        type: 'spki',
        format: 'pem'
      },
      privateKeyEncoding: {
        type: 'pkcs8',
        format: 'pem',
        cipher: 'aes-256-cbc',
        passphrase: passphraseArg
      }
    }, (err, publicKeyArg, privateKeyArg) => {
      // convey error
      if (err) {
        done.reject(err);
        throw (err);
      }
      const keyPairInstance = new KeyPair({
        privateKey: privateKeyArg,
        publicKey: publicKeyArg
      });
      done.resolve(keyPairInstance);
    });
    return done.promise;
  }

  // instance
  public publicKey: string;
  public privateKey: string;

  constructor(optionsArg: {
    privateKey: string;
    publicKey: string;
  }) {
    this.privateKey = optionsArg.privateKey;
    this.publicKey = optionsArg.publicKey;
  }
}