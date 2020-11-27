#!/usr/bin/env bash

npm run build
cd dist
npm init --scope=@JoniJnm
npm publish --access public
