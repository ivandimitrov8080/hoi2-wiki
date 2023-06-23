#!/usr/bin/env bash

npm i
npx tailwindcss -i ./src/styles/main.css -o ./static/main.css
webpack --config webpack-config.js

