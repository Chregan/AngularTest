## Angular Programming Task

In order to be considered for the AngularJs/Phonegap position, you must complete the following steps.

*Note: This task should take no longer than 1-2 hours at the most.*


## Task

1. Fork this repository (if you don't know how to do that, Google is your friend)
2. Create a *build* folder to contain your code.
3. In the *build* directory, scaffold a basic Angular app using [Yeoman](http://yeoman.io/) or similar. Then create a module that does the following:
	- Connect to the [Github API](http://developer.github.com/)
	- Find the [joyent/node](https://github.com/joyent/node) repository
	- Find the most recent commits (choose at least 25 or more of the commits)
4. Create a view that uses the above module to display the recent commits by author.
	- If the commit hash ends in a number, color that row to light blue (#E6F1F6).
	- Add a search input at the top that filters the results
5. Package the above using cordova for Android to produce a debug APK
5. Commit and Push your code as well as the APK file to your new repository

## Once Complete
1. Commit and Push your code to your new repository
2. Send us a pull request, we will review your code and get back to you


## Gurnoor

I built is using IONIC framework which is basically an update of cordova phonegap.

## Where is .apk file

1. You can find it in folder called root/build/CordovaApp-debug.apk that can be install on android.

## Pre-requirements
'You need to install corodva ionic framework.

1. Open command prompt 
2. Execute npm install -g cordova ionic - this will install latest corodva globally in your system


## How to build this app

1. Open command prompt and cd to root of the repository e.g cd angulartest
2. Execute ionic build android - it will generate a build .apk file in root/platforms/android/amt-build/CordovaApp-debug.apk
