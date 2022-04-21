exports.handler = async (event) => {
    // TODO implement
  console.log(JSON.stringify(event));
  for(const record of event.Records){
    const data = JSON.parse(Buffer.from(record.kinesis.data, "base64"));
    // do you work like email alert, save to db or anything you want
    console.log("LOGS BY CONSUMER 1 - S3 TO KINESIS");
    console.log(data)
  }
    
};
