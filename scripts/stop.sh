#!/bin/bash

# Get the PID of the running Node.js app
PID=$(pgrep -f 'node index.js')

if [ -n "$PID" ]; then
    echo "Stopping existing node process with PID: $PID"
    kill -9 $PID
else
    echo "No running node process found."
fi
