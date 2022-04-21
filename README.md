### Author: Martand Singh
### facebook: https://www.facebook.com/codemakerz
### email: martandsays@gmail.com

## AWS S3 bucket to Kinesis data stream using lambda functions

### Aim
In this tutorial we will try to implement a basic data pipeline using S3 bucket, lambda functions & kinesis data stream. 
![m drawio (2)](https://user-images.githubusercontent.com/32331579/164473789-96de49f9-5bf3-421f-ae89-2b661ee18bf4.png)

Every time you upload a new file to bucket, lambda function(producer.js) will notice that and push the content of that file to kinesis data stream which can be used further by another lambda function(consumer.js).

### AWS Services Used
1. S3 Bucket
2. AWS Lambda functions (node.js sdk)
3. Kinesis data stream
4. Cloudwatch

### Instructions
1. Create custom role for the demo
2. Create 2 lambda functions. 1 Producer & 1 Consumer (Consumer1)
3. Create S3 bucket -> add lambda function to configuration
4. Create Kinesis Stream instance
5. Edit producer code - it will get S3 object and push to kinesis data stream
6. Edit consumer code - it will read the kinesis stream. you can do any custom activity like save to db or datalake. for demo purpose I will log the data
7. Add trigger to consumer lambda function
8. Test the pipeline. Upload file and check the cloudwatch logs

### Youtube Videos
#### Playlist
https://www.youtube.com/watch?v=8EOS26MqPfU&list=PLUD3Fp3WhxlNv0euAsABB3-wZRIzu1o6I


#### Step 1

[![IMAGE ALT TEXT HERE](https://img.youtube.com/vi/8EOS26MqPfU/0.jpg)](https://www.youtube.com/watch?v=8EOS26MqPfU)

In this video, we will create a custom IAM role for our application.

#### Step 2
In this tutorial, we will create 2 lambda functions (producer.js, consumer.js) & AWS S3 bucket. We will use node js sdk for the development.
https://www.youtube.com/watch?v=8EOS26MqPfU&list=PLUD3Fp3WhxlNv0euAsABB3-wZRIzu1o6I&index=2

#### Step 3
Here, we will create kinesis data stream instance & add code to our producer & consumer js.
https://www.youtube.com/watch?v=8EOS26MqPfU&list=PLUD3Fp3WhxlNv0euAsABB3-wZRIzu1o6I&index=3

#### Step 4
This is the final step, where we will test our data pipeline & monitor cloudwatch log & kinesis monitoring.
https://www.youtube.com/watch?v=8EOS26MqPfU&list=PLUD3Fp3WhxlNv0euAsABB3-wZRIzu1o6I&index=4
