# NPM

It's cool and all that I can use built in modules or write my own, but I'm pretty lazy, can't I get other people to write code for me?

Introducing [Node Package Manager (NPM)](https://docs.npmjs.com/getting-started/what-is-npm)! NPM comes bundled with your node install and is now [the largest package registry in the world!](https://developers.slashdot.org/story/17/01/14/0222245/nodejss-npm-is-now-the-largest-package-registry-in-the-world)

# Great so how do I use it?

Once you have found the package you are looking for using something like [npms](npms.io) or [npmjs](npmjs.com) simply install it by typing:
> `npm install <nameOfDependency>` or `npm i <nameOfDependency>`

I heard Facebook released their own package manger, Yarn, can I use that too? Yup, simply do a `yarn add <nameOfDependency>`.
Either way, once the install is finished, you will see you now have a `node_modules` folder in the route of your project. This is where all node dependencies live. This folder can get quite large so you don't want to check it in.

> But if I shouldn't check in my `node_modules` folder, how do my team members/ci-server/cd-server know what dependencies to use?

Enter the `package.json` file! This is a simple file that tracks our dependencies, their versions and does a fair bit of other awesome stuff that we will get into later. We could create this file manually for us, but there is a built in utility to do it, `npm init`. Before we run this command, lets tell npm a bit about ourselves.

# Set up your npm defaults

> Source: http://iamsim.me/set-your-npm-init-defaults/

* `npm config set init.author.name "Ryan Kotzen"`
* `npm config set init.author.email potz666@gmail.com`
* `npm config set init.author.url http://blog.exigentcoder.com`
* `npm config set init.license MIT`

These generally get saved to your userFolder/.npmrc file. You may also notice that this project has its own .npmrc file which will override your userSettings. For more info, [see this page](https://docs.npmjs.com/files/npmrc).

# Create your `package.json` file

Go ahead and type:

> npm init

Follow the onscreen wizard. You should now have a `package.json` file, yay! Go ahead and install moment

> e.g. `npm i moment`

You will notice nothing in your package.json file changed ... oops. This is because by default, `npm i` does not save to your `package.json` file, you need to add the flag `--save` So the full version of the command would be:

> e.g. `npm i moment --save`

Your `package.json` file will now have something like
```
"dependencies": {
  "moment": "^2.18.1"
}
```

That `^` symbol you see there is [semver wilcard](https://docs.npmjs.com/misc/semver). If people understood semver specifying a wildcard string would allow your app to stay fairly up to date automatically ... but humans do not understand semver, so please, do not use wildcards in your projects. Always check in the exact version string, npm has a useful flag to do this, `--save-exact` making our full install command:

> `npm i moment --save --save-exact`

This works but is a bit long, so we can simply change our global and/or local .npmrc file to have the following two lines:

```
save=true
save-exact=true
```

Allowing us once again to simply type

> e.g. `npm i moment`

Note that you can also install multiple dependencies at the same time. E.g.:

> e.g. `npm i moment lodash express`

This is all good and well, but how do I use a dependency once it has been installed?
See index.js

# Shrinkwrap - make mine to go!

Once you are ready to deploy your app type `npm shrinkwrap` and this will freeze all of your dependencies, and their dependencies, and their dependencies, and their dependencies, etc and write it to the `npm-shrinkwrap.json` file in the root of your app. When your server hosting node does a `npm install`, this file will be used to install the exact dependencies you had on your dev/ci/cd box.

# Global modules

Add the -g flag e.g. `npm i loadtest -g`. Often times this will add a new .cmd or bash command, hence why it should be in your path variables.

These get installed to `%USERPROFILE%\AppData\Roaming\npm`

Often an anti-pattern so ensure you are using this correctly.

# Dev Dependencies

Add the --save-dev flag e.g. `npm i mocha --save-dev`. This is for the packages you use during dev/ci/cd but which do not get installed to production. Examples include linting and testing.

# Scripts

`npm run <nameOfScript>` - Runs a script defined in your package.json. No need for gulp/grunt! Often used to kick off testing/linting etc.

`package.json`:

```
{
    ...
    "scripts":{
        ...
        "lint": "node_modules/.bin/eslint \"src/**/*.js\" \"test/**/*.js\" index.js --fix"
    }
}
```

> `npm run lint`

# Extra commands

* `npm outdated` - list outdated packages.
* `npm update` - Update packages, see the `npm-check` package.
* `npm dedupe` - Removes duplicate packages from the node-modules folder based on wildcards. See https://docs.npmjs.com/cli/dedupe.
* `npm link` - Used for modules development, allows you to link a specific module to a folder on your pc.
* `npm prune --production` - Removes dev dependencies.
* `npm t` | `npm test` - Runs the test command specified in your scripts of your package.json.