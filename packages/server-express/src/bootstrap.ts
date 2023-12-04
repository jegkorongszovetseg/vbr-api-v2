export default function createApp(options = {}): void {
  console.log('INIT')
  const {
    app: { app, server },
    router,
    socket,
  } = options;

  socket?.(server);
  app.use(router);
}
