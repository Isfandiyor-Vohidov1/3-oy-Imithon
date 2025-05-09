export const logger = (req, res, next) => {
  const start = Date.now();

  res.on('finish', () => {
    const duration = Date.now() - start;
    console.log(`\n ${req.method} ${req.originalUrl}`);
    console.log(`   Status: ${res.statusCode}`);
    console.log(`   Duration: ${duration} ms`);
    console.log(`   IP: ${req.ip}`);
    console.log('--------------------');
  });

  next();
};
