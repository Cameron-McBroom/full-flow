'use strict';

/**
 *  quote-form-submission controller
 */

const email = process.env.SENDGRID_EMAIL_ADDRESS
const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::quote-form-submission.quote-form-submission', ({ strapi }) => ({

  async create(ctx) {

    let body = ctx.request.body;
    console.log("Would be sending an email here!! body: ", body);

    // Calling the default core action
    const response = await super.create(ctx);

    console.log("response: ", response);

    await strapi.plugins['email'].services.email.send({
      to: email,
      from: email,
      subject: 'New Quote Form Submission',
      text: 'New Quote Form Submission!',
      html: `
         <p> Name: ${body.data.name} </p>
         <p> Email: <a href="mailto:${body.data.email}"> ${body.data.email} </a> </p>
         <p> Phone: <a href="tel:${body.data.phone}"> ${body.data.phone} </a> </p>
         <p> Description: ${body.data.description} </p>
      `,
    });

    return response;
  }

}));
