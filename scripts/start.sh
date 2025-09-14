#!/bin/bash

cd /home/ec2-user/app

# Install dependencies
npm install

# Start the app using PM2 with a specific name
pm2 start index.js --name node-app
