import Fastify from 'fastify';
import cors from '@fastify/cors';

const server = Fastify({ logger: true });

async function start() {
  await server.register(cors, {
    origin: true,
  });

  server.get('/health', async () => {
    return { status: 'ok' };
  });

  server.get('/api/apps', async () => {
    return [
      { id: 'counter', name: 'Counter', description: 'A simple counter app' },
    ];
  });

  const port = Number(process.env.PORT || 5174);
  const host = process.env.HOST || '0.0.0.0';

  try {
    await server.listen({ port, host });
    server.log.info(`Server listening on http://${host}:${port}`);
  } catch (err) {
    server.log.error(err);
    process.exit(1);
  }
}

start();