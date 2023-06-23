#!/usr/bin/env bash

npx tailwindcss -i ./src/styles/main.css -o ./static/main.css
webpack --config webpack-config.js

