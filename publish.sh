#!/usr/bin/env bash

set -e # exist on error

npm run build
cd dist/amazing-time-picker
cp ../../README.md .
npm init --scope=@JoniJnm
npm publish --access public
