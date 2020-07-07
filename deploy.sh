#!/usr/bin/env sh

# Abort on errors
set -e

# Build client
cd client
npm run build

# Navigate into the build output directory
cd dist

git init
git add -A
git commit -m 'Deploy pictionary.io'

# Deploying to https://<USERNAME>.github.io/<REPO>
git push -f git@github.com:etuong/pictionary.io.git master:gh-pages

cd ../../