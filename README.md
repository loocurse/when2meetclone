# when2meet clone
This project is a clone of the website [when2meet](when2meet.com). We decided to do a clone of it as it is a very useful product that helps people find a common time to meet. However, it is also very aesthetically unappealing and therefore, we wanted to improve the UI.

## Installation

### Step 1: Clone and install dependencies

To run the application, first clone it and install the dependencies
```
npm install
```

### Step 2: Create a mongodb database

See instructions [here](https://www.mongodb.com/basics/create-database).


### Step 3: Add environment variables

Clone the `.env.example` file

```
cp .env.example .env
```

Add the mongodb URI.

### Step 4: Run dev server

Afterwards, to run the development server:
```
npm run start
```


## Tech stack

### Front end
We decided to use vue.js as the front-end as in the original website, we noticed that the server side rendering of the page made it slow. To curb this, we wanted to do a Single Page Application (SPA) for the site. Also, state management is important in showing the

![when2meet](https://i.imgur.com/OmHqf1L.png)

### Backend

As the information needs to be stored on a persistent database, we decide to use mongodb. As future works could mean that we would want to absorb different data (e.g. google calendar integration), we would want to use a NoSQL database.

We use express as the server side library as it is unopinionated and simple.

## Improvements to current site
### UI
We improve the UI by adding simple styling and paginations

### Mobile friendly
We noticed that the original site was not mobile friendly as users would have to scroll horizontally to see the full page. We wanted to make this site responsive and mobile friendly.

