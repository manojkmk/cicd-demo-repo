#!/bin/bash

# Stop the application via PM2
pm2 delete node-app || true
