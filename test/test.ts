import { expect, tap } from '@pushrocks/tapbundle';
import * as smartkey from '../ts/index'

tap.test('first test', async () => {
  console.log(smartkey.standardExport)
})

tap.start()
