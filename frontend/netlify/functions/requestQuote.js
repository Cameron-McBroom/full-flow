const axios = require('axios');

exports.handler = async function (event, context) {
    console.log(event);
    console.log(context);

    const {body} = context;

    try {
        const response = await axios.post(`${process.env.API_BASE_URL}/quote-form-submission`, {data: body}, {
            headers: {
                Authorization:
                    `Bearer ${process.env.STRAPI_KEY}`
            }
        });
        console.log("Success Response: ", response)
        return {
            statusCode: 200,
            body: JSON.stringify(response.data)
        }
    } catch (e)
        {
            console.log("Failed with error: ", e)
            return {
                statusCode: 404,
                body: e.toString(),
            };
        }
    }

// const { data } = await axios.get('http://localhost:1337/articles', {
//     headers: {
//         Authorization:
//             'Bearer <API TOKEN>',
//     },
// });