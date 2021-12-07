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

            // OLD Implementation
            // const columns = ["Aspirations", "Drafted", "Submitted", "Interviewed", "Offer"];
                    // 'board': { S: JSON.stringify(columns)},
                    
            // Create starter board        
            const board = {"columns":[{"id":1,"title":"Backlog","cards":[{"id":1,"title":"Add card","description":"Add capability to add a card in a column"}]},{"id":2,"title":"Doing","cards":[{"id":2,"title":"Drag-n-drop support","description":"Move a card between the columns"}]}]}
            
            let starterBoard = {
                Item: {
                    'username': {S: event.userName },
                    'board': {S: JSON.stringify(board)},
                    'createdAt': {S: date.toISOString()},
                    'updatedAt': {S: date.toISOString()},
                },
                TableName: 'UserBoard-c3wgdpl33rh6hlaxfc4z5cqmxa-dev'
            }
            // Call DynamoDB
            try {
                await ddb.putItem(starterBoard).promise()
                console.log("Success");
            } catch (err) {
                console.log("Error creating starter board", err);
            }


        } catch (err) {
            console.log("Error creating user", err);
        }

        console.log("Success: Everything executed correctly");
        context.done(null, event);

    } else {
        // Nothing to do, the user's email ID is unknown
        console.log("Error: Nothing was written to DynamoDB");
        context.done(null, event);
    }
};


// var aws = require('aws-sdk');
// var ddb = new aws.DynamoDB();

// exports.handler = async (event, context) => {

//     // console.log(JSON.stringify(event, null, 2));
//     // event.Records.forEach(record => {
//     //     console.log(record.eventID);
//     //     console.log(record.eventName);
//     //     console.log('DynamoDB Record: %j', record.dynamodb);
//     // });


//     let date = new Date();

//     const tableName = process.env.TABLE_NAME;
//     const region = process.env.REGION;



//     console.log(JSON.stringify(event, null, 2));
//     console.log("LOG FROM INDEX.JS: TABLENAME, REGION, USERNAM, EMAIL, DATA");
//     console.log(tableName);
//     console.log(region);
//     console.log(event.userName);
//     console.log(event.request.userAttributes.email);
//     console.log(date.toISOString())
//     console.log("END OF LOG FROM INDEX.JS");

//     aws.config.update({ region: region });

//     if (event.request.userAttributes.sub) {

//         let params = {
//             Item: {
//                 'username': { S: event.userName },
//                 'email': { S: event.request.userAttributes.email },
//                 'createdAt': { S: date.toISOString() },
//             },
//             TableName: tableName
//         };

//         // Call DynamoDB
//         try {
//             await ddb.putItem(params).promise()
//             console.log("Success");

//         } catch (err) {
//             console.log("Error creating user", err);
//         }

//         console.log("Success: Everything executed correctly");
//         context.done(null, event);

//     } else {
//         // Nothing to do, the user's email ID is unknown
//         console.log("Error: Nothing was written to DynamoDB");
//         context.done(null, event);
//     }
// };
