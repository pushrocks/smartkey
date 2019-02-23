import { expect, tap } from '@pushrocks/tapbundle';
import * as smartkey from '../ts/index';

let testSmartkey: smartkey.SmartKey;

tap.test('first test', async () => {
  testSmartkey = new smartkey.SmartKey();
  expect(testSmartkey).to.be.instanceOf(smartkey.SmartKey);
});

tap.test('should create a valid keypair', async () => {
  const keyPair = await testSmartkey.getKeypair();
  expect(keyPair).to.be.instanceOf(smartkey.KeyPair);
  console.log(keyPair.publicKey);
  console.log(keyPair.privateKey);

  console.log('note: these keys do not have any function, they are just a test ReferenceError.');
});

tap.start();
