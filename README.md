# Checklistomania
[![Build Status](https://travis-ci.org/18F/checklistomania.svg?branch=master)](https://travis-ci.org/18F/checklistomania)
[![Coverage Status](https://coveralls.io/repos/18F/checklistomania/badge.svg?branch=master&service=github)](https://coveralls.io/github/18F/checklistomania?branch=master)

This tool is a checklist manager with some neat-O features:
* Focus on what is actionable: central page is a simple list of things you can take action on now, in order of urgency.
* Checklists are centrally defined, allowing any member to subscribe to the authoritative checklist
* Checklist items deadlines can be set according to a fixed date or relative to completion of other items
* All members of team can view other peoples checklists, so admins can see everyone's status at a glance

Here's some screenshots to give you a sense of the look & feel:

The tasks tab provides a centralized place for all your todo items:
![Todos](/public/img/tasks.png?raw=true "Tasks")

The checklists tab is where you assign yourself a new pre-defined checklist:
![Checklists](/public/img/checklists.png?raw=true "Checklists")

The users tab is where you can view the status of other team members action items, helpful if you want a hint or if you are an admin keeping track of where everyone is:
![Users](/public/img/users.png?raw=true "Users")

# Requirements
- Mongodb
- nodejs

# Setup
Install dependecies with:
```
$ npm install
```

Add a .env file with your [Auth0](https://auth0.com) app's info.
```
AUTH0_DOMAIN=YOUR_ACCOUNT.auth0.com
AUTH0_CLIENT_ID=
AUTH0_CLIENT_SECRET=
SESSION_SECRET=
```

Run locally with:
```
$ npm start
```

And visit [http://localhost:3000/](http://localhost:3000/)

## Install
Host your own version of the dashbaord on Heroku using the Heroku button.

In order to deploy to Heroku you will need an Auth0 Account.

[![Deploy](https://www.herokucdn.com/deploy/button.png)](https://dashboard.heroku.com/new?template=https%3A%2F%2Fgithub.com%2Fauth0-samples%2Fchecklistomania)

For 18Fers: this is deployed on cloud.gov. Get started on cloud.gov by following the instructions [here](https://docs.cloud.gov/). Ask for more details in #checklistomania channel in slack.

### Public domain

This project is in the worldwide [public domain](LICENSE.md). As stated in [CONTRIBUTING](CONTRIBUTING.md):

> This project is in the public domain within the United States, and copyright and related rights in the work worldwide are waived through the [CC0 1.0 Universal public domain dedication](https://creativecommons.org/publicdomain/zero/1.0/).
>
> All contributions to this project will be released under the CC0 dedication. By submitting a pull request, you are agreeing to comply with this waiver of copyright interest.
