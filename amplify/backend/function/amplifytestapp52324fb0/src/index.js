

/**
 * @type {import('@types/aws-lambda').APIGatewayProxyHandler}
 */
exports.handler = async (event) => {
    console.log(`EVENT: ${JSON.stringify(event)}`);
	
	const custId = event.pathParameters.custId;
	const cust = { 'custId': custId, 'custName': "Customer " + custId };

    return {
        statusCode: 200,
    //  Uncomment below to enable CORS requests
      headers: {
          "Access-Control-Allow-Origin": "*",
          "Access-Control-Allow-Headers": "*"
      }, 
	  body: JSON.stringify(cust),
    };
};
