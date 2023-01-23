
# NLW Copa

Built during the 3th edition of NLW made by Rocketseat (NLW Cup).

A football guessing app where the user makes his guess and stores it in the database, being able to access later.
## Installation


Clone and install the dependencies for `nlw-copa` locally:

Web

```bash
  git clone git@github.com:Lerpardo/copa-web.git
```

Server

```bash
  git clone git@github.com:Lerpardo/copa-server.git
```

Mobile

```bash
  git clone git@github.com:Lerpardo/copa-mobile.git
```
## Deployment

To  run the server

```bash
  npm run dev
```
Port `:4444`

Open [localhost](http://localhost:4444) to acess server.






## Technologies used in its development 🧑‍💻

- [Prisma]()
- [Expo]()
- [Typescipt]()
- [Sqlite]()
- [Auth2]()
## Features

- User registration api.
- Guess registration.
- Access to pools.
- Mobile access.


## Lessons Learned

In this project, I used the Web API Spotfy to access data.

## Run Locally

### Web

```bash
  cd copa-web
  npm start
```
Open [localhost](http://localhost:3000) to view.

### Mobile
Download App or Emulator

[Android](https://play.google.com/store/apps/details?id=host.exp.exponent&pli=1) or [IOS](https://apps.apple.com/br/app/expo-go/id982107779)

```bash
  cd copa-mobile
  npx expo start
```



## Feedback

If you have any feedback, please reach out to us at ls6182315@gmail.com


## Screenshots

![App Screenshot](https://via.placeholder.com/468x300?text=App+Screenshot+Here)


## Endpoints

- A serem refatorados
  - GET `/pools/count`
  - GET `/users/count` 
  - GET `/guesses/count` 
  - POST `/pools`

