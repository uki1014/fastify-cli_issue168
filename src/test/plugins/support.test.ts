import Fastify from 'fastify';
import { test } from 'tap';

import Support from 'plugins/support';

test('support works standalone', async (t) => {
  const fastify = Fastify();
  void fastify.register(Support);
  await fastify.ready();

  t.equal('hugs', 'hugs');
});
