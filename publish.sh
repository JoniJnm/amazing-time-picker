#!/usr/bin/env bash

set -e # exist on error

npm run build
cd dist/amazing-time-picker
npm init --scope=@JoniJnm
npm publish --access public
