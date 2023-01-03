# Full Flow Pressure Cleaning Website

Full Flow Pressure Cleaning Website is built using Nuxt as the frontend application
and Strapi and the backend.

### Backend
The backend has been created to:
- Easily add new images
- Stores the text content for each page, making it easy to update
- Has the page SEO meta data, which can be updated easily

The backend is deployed on Heroku with a Heroku PG add on, 
since this app only has a small amount of data

### Frontend
The frontend is built into static files. And whilst being built will
call the backend to retrieve all the data it needs. This means 
that the backend is only ever called at deployment time and saves server time.

