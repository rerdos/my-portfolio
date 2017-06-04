# My Portfolio
It's a cool looking portfolio website that could suit any programmer's needs.

[DEMO](http://www.richarderdos.com)

## Setup

Make sure you have `yarn` installed. To do this run `npm install -g yarn`.

1. Use node v7.10.0
2. Run `yarn` to install the dependencies
3. Run `yarn dev` to run the devserver with hot reload
4. Project should be running on `http://localhost:8080/`

## Create a build

1. Use node v7.10.0
2. Run `yarn` to install the dependencies
3. Run `yarn build` to bundle a build
4. Your build should be in the `.build` folder

## FAQs

### Can I use it for my own portfolio?

Sure. This project is under [MIT licence](https://github.com/rerdos/my-portfolio/blob/master/LICENSE), so feel free to fork and modify it to suit your needs.

### How can I modify essential data?

First you need to know a bit about [JSON](http://www.json.org/)s, once you got that you can take a look into `/src/data` folder that contains quite a lot `.json` files.

You need to modify each to fully personalize your portfolio.

#### Changing meta data

In order to change meta data and title you need to modify `/src/index.html`.

#### Change location

In order to change the location in the sidebar you need to modify the Google Maps URL in `/src/app/location/location.html`.

#### Change image and CV

In order to change your image and CV you need to take a look into `/src/static`.

### How can I deploy?

Unfortunately there is no deployment process. You need to create a build manually by running `yarn build` and copy the content of the newly generated `/.build` folder to your website.