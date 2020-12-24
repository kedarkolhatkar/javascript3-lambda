import { S3Client, ListBucketsCommand } from '@aws-sdk/client-s3';

async function listObjects() {
  try {
    console.log('listObjects called');
    const client = new S3Client({ region: 'us-east-1' });
    const command = new ListBucketsCommand({});
    const results = await client.send(command);
    console.log(`results: ${JSON.stringify(results)}`);
  } catch (error) {
    console.error(error);
  }
}

async function waitFor() {
  console.log('waitFor called');
  return Promise.resolve('success');
}

const handler = async (event) => {
  console.log('Lambda function called');
  console.log(`event: ${JSON.stringify(event)}`);
  await waitFor();
  await listObjects();
  console.log('executing after waitFor');
};

export { handler };
