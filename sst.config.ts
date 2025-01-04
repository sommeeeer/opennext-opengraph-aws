/// <reference path="./.sst/platform/config.d.ts" />

export default $config({
  app(input) {
    return {
      name: 'opennext-opengraph-aws',
      removal: input?.stage === 'production' ? 'retain' : 'remove',
      protect: ['production'].includes(input?.stage),
      home: 'aws',
    };
  },
  async run() {
    new sst.aws.Nextjs('MyWeb', {
      environment: {
        VERCEL_PROJECT_PRODUCTION_URL: 'd1wsqonazj3igh.cloudfront.net',
      },
    });
  },
});
