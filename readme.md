# Welcome to the Anythink Market repo

To start the app use Docker. It will start both frontend and backend, including all the relevant dependencies, and the db.

Please find more info about each part in the relevant Readme file ([frontend](frontend/readme.md) and [backend](backend/README.md)).

## Development

When implementing a new feature or fixing a bug, please create a new pull request against `main` from a feature/bug branch and add `@vanessa-cooper` as reviewer.

## First setup

At Anythink, our engineers work with a development environment that's hosted in the cloud called Github Codespace. No need to install anything on your own computer! It takes about a minute to boot. Once it's up and ready you can start working directly in the browser or use VS Code to connect to the codespace in the cloud.

1. [Create a new github codespace](https://github.com/codespaces/new?hide_repo_select=true&ref=main&repo=552239833). (No need to change anything in the default options, just click on the Create codespace button and wait for it to boot)
2. Once the Vscode window is open and you have terminal access. You can run `docker-compose` up in your codespace's terminal to load Anythink's backend and frontend.
3. After the backend server is up, make sure you test it by pointing your browser to https://obelusfamily-anythink-market-3yia1-r7jqqg9769v3xwr5-3000.githubpreview.dev/api/ping
4. Now, it’s time to check the frontend and make sure it’s connected to the backend. If everything is working properly, you’ll be able to create a new user on https://obelusfamily-anythink-market-3yia1-r7jqqg9769v3xwr5-3001.githubpreview.dev/register
5. Create one (choose a cool nickname and everything) and you’ll be able to move to the next task.
6. It looks like your environment is ready! 😀


**[TODO 05/01/2018 @vanessa-cooper]:** _It's been a while since anyone ran a fresh copy of this repo. I think it's worth documenting the steps needed to install and run the repo on a new machine?_

**[TODO 05/03/2018 @codeyourfaceoff]:** _We shuold probably update the github codespace links to be more dynamic for each new user._
