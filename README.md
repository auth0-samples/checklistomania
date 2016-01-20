# Checklistomania
[![Build Status](https://travis-ci.org/18F/checklistomania.svg?branch=master)](https://travis-ci.org/18F/checklistomania)
[![Coverage Status](https://coveralls.io/repos/18F/checklistomania/badge.svg?branch=master&service=github)](https://coveralls.io/github/18F/checklistomania?branch=master)

This tool is a checklist manager with some neat-O features:
* Focus on what is actionable: central page is a simple list of things you can take action on now, in order of urgency.
* Checklists are centrally defined, allowing any member to subscribe to the authoritative checklist
* Checklist items deadlines can be set according to a fixed date or relative to completion of other items
* All members of team can view other peoples checklists, so admins can see everyone's status at a glance

# Requirements
- Mongodb
- nodejs

# Setup
Install dependecies with:
```
>>> npm install
```

Use the developer github client information with: 
```
>>> export GITHUB_CLIENT_ID=c98d47c0bceedb0b45db
>>> export GITHUB_CLIENT_SECRET=f226a23fd3080703533771da9424dd6741c16543
```
Alternatively, you can setup your own credentials [here](https://github.com/settings/applications/new). 

Run locally with:
```
>>> npm start
```

And visit [http://localhost:3000/](http://localhost:3000/)

### Public domain

This project is in the worldwide [public domain](LICENSE.md). As stated in [CONTRIBUTING](CONTRIBUTING.md):

> This project is in the public domain within the United States, and copyright and related rights in the work worldwide are waived through the [CC0 1.0 Universal public domain dedication](https://creativecommons.org/publicdomain/zero/1.0/).
>
> All contributions to this project will be released under the CC0 dedication. By submitting a pull request, you are agreeing to comply with this waiver of copyright interest.
