# Apostrophe 3 Starter project

This project builds on the latest Apostrophe realeases, adding a set of custom-developed _pages_, _widgets_, _pieces_ and other modules, all providing primitive to complex building blocks needed in the design of rich, modern websites.

Apostrophe 3 is well-equiped for immediate use, particularly with the ecosystem of officially developed modules, but misses some functionality useful to non-developer end-users. This boilerplate project aims to bridge that gap by providing a rich choice of components which end users can immediately use in building complex website layouts. All custom modules have user simplicity as the primary goal, with developer flexibility as a secondary, but important, concern.

While this starter project aims to be relatively unopinionated, to succeed in its primary mission, it is necessary to settle on, and build upon, a well-developed, tested, maintained and well-supported framework. That framework is [Bootstrap](https://getbootstrap.com/), currently on version 5.2. In extension of all that Bootstrap affords us, the Block-Element-Modifier [BEM](http://getbem.com/) methodology is used, both in creation of derivative functionality and in replacement of native Bootstrap CSS which often breaks both inheritance and cascading properties of CSS --- see [problems from cascading](https://www.phase2technology.com/blog/used-and-abused-css) --- leading to unmaintainable styling code which is difficult to reason about, maintaing and extend. This set of choices does make the starter project somewhat opinionated and possibly straightjacketing, although all _classes_ and _style declarations_ on components may be overridden as desired.


## Get started

Install dependencies: `npm install`

## Running the project

Run `npm run dev` to build the Apostrophe UI and start the site up. Remember, this is during alpha development, so we're all in "dev mode." The `dev` script will watch for saves in client-side CSS and Javascript and trigger a build and page refresh if they are detected. It will also restart the app when server-side code is saved.

## Making it your own

This boilerplate is designed so you can install and start running it right away. If you are starting a project that will go into production one day, there are a few things you should be sure to check:

- [ ] **Update the shortname.** The `shortname` option in `app.js` is used for the database name (unless another is given in the `@apostrophecms/db` module). You should change this to an appropriate project name before you start adding any users or content you would like to keep.
- [ ] **Update the Express.js session secret.** The secret is set to `undefined` initially in the `modules/@apostrophecms/express/index.js` file. You should update this to a unique string.
- [ ] **Decide if you want hot reloading on.** This boilerplate uses nodemon to restart the app when files are changed. In `modules/apostrophecms/asset/index.js` there is an option enabled to refresh the browser on restart. If you like this, do nothing. If you don't, remove the option or set it to `false`. The option has no effect when the app is in production.
- [ ] **Update the `className` options in `app.js`.** This option is set for core widget types to provide CSS styling hooks. It is namespaced with `bp-` for "boilerplate." You will likely want to update that to match your general CSS class naming practices.

## You really want the docs

Right now, [all the juicy info is in the A3 docs](https://a3.docs.apostrophecms.org), so head over there and start reading! This boilerplate project is a fun introduction to the UI, but you'll want to know more to really try it out.

