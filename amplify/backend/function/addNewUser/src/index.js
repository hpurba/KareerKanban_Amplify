var aws = require('aws-sdk');
var ddb = new aws.DynamoDB();

exports.handler = async (event, context) => {

    // console.log(JSON.stringify(event, null, 2));
    // event.Records.forEach(record => {
    //     console.log(record.eventID);
    //     console.log(record.eventName);
    //     console.log('DynamoDB Record: %j', record.dynamodb);
    // });


    let date = new Date();

    const tableName = process.env.TABLE_NAME;
    const region = process.env.REGION;



    console.log(JSON.stringify(event, null, 2));
    console.log("LOG FROM INDEX.JS: TABLENAME, REGION, USERNAM, EMAIL, DATA");
    console.log(tableName);
    console.log(region);
    console.log(event.userName);
    console.log(event.request.userAttributes.email);
    console.log(date.toISOString())
    console.log("END OF LOG FROM INDEX.JS");

    aws.config.update({ region: region });

    if (event.request.userAttributes.sub) {

        let params = {
            Item: {
                'username': { S: event.userName },
                'email': { S: event.request.userAttributes.email },
                'createdAt': { S: date.toISOString() },
            },
            TableName: tableName
        };

        // Call DynamoDB
        try {
            await ddb.putItem(params).promise()
            console.log("Success");
        } catch (err) {
            console.log("Error", err);
        }

        console.log("Success: Everything executed correctly");
        context.done(null, event);

    } else {
        // Nothing to do, the user's email ID is unknown
        console.log("Error: Nothing was written to DynamoDB");
        context.done(null, event);
    }
};



// exports.handler = event => {
//   //eslint-disable-line
//   console.log(JSON.stringify(event, null, 2));
//   event.Records.forEach(record => {
//     console.log(record.eventID);
//     console.log(record.eventName);
//     console.log('DynamoDB Record: %j', record.dynamodb);
//   });
//   return Promise.resolve('Successfully processed DynamoDB record');
// };







// var aws = require('aws-sdk');
// var ddb = new aws.DynamoDB();

// exports.handler = async (event, context) => {

//     let date = new Date();

//     if (event.request.userAttributes.sub) {

//         let params = {
//             Item: {
//                 'id': {S: event.request.userAttributes.sub},
//                 '__typename': {S: 'User'},
//                 'name': {S: event.request.userAttributes.name},
//                 'email': {S: event.request.userAttributes.email},
//                 'createdAt': {S: date.toISOString()},
//                 'updatedAt': {S: date.toISOString()},
//             },
//             TableName: process.env.API_{YOUR_APP_NAME}_USERTABLE_NAME
//         };

//         // Call DynamoDB
//         try {
//             await ddb.putItem(params).promise()
//             console.log("Success");
//         } catch (err) {
//             console.log("Error", err);
//         }

//         console.log("Success: Everything executed correctly");
//         context.done(null, event);

//     } else {
//         // Nothing to do, the user's email ID is unknown
//         console.log("Error: Nothing was written to DynamoDB");
//         context.done(null, event);
//     }
// };