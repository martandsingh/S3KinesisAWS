const AWS = require('aws-sdk');
AWS.config.update({
    'region': 'us-east-1'
});
const s3 = new AWS.S3();
const kinesis = new AWS.Kinesis();

exports.handler = async (event) => {
  console.log("Hello world")
  var bucket = event.Records[0].s3.bucket.name;
  var key = event.Records[0].s3.object.key; // filename
  var params = {
    Bucket: bucket,
    Key: key
  }
  await s3.getObject(params).promise().then(async(data) => {
    const dataString = data.Body.toString(); // coming as buffer, convert to string
    //send to kinesis
    const payLoad = {
      data: dataString
    }
    console.log(payLoad);
    await sendToKinesis(payLoad, key);
  }, error => {
    console.log(error)
  })
  
};

async function sendToKinesis(payload, partitionKey){
  const params = {
    Data: JSON.stringify(payload),
    PartitionKey: partitionKey,
    StreamName: "kinesis-analytics-89"
  }
  await kinesis.putRecord(params).promise().then(response => {
    console.log(response)
  }, error => {
    console.log(error)
  })
}