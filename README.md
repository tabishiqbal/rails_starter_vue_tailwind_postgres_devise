# README

The goal of this project is just to save time on the same several steps to set up this application configuration. If you ever want to start a rails app, fork/clone this repository instead of `rails new app` to save about an hour.

## Relevant Versions Used (Modifiable)
* Ruby 2.6.3
* Rails 6.0.1
* Node 12.13.0
* Tailwindcss ^1.1.3
* Vue ^2.6.10

## Initial Setup
We need to install all dependencies and create the database.

1. Fork the repository
2. Clone it to your local machine
3. `cd` into the directory
4. `bundle` (installs all gems)
5. `yarn` (installs all packages)
6. `rails db:create`

## Running the App
1. `rails s`
2. Open new tab in Terminal and `bin/webpack-dev-server`

## Other Notes/Considerations
You are mostly starting from scratch with these tools besides for the basic installation, so there are very few assumptions or defaults if any.
* See Tailwind Docs (https://tailwindcss.com)
* See Vue Docs (https://vuejs.org)
* See Devise Docs (https://github.com/plataformatec/devise)
