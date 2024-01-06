#!/usr/bin/env bash
rm -rf dist
npm run build
cd dist
git init
git add .
git commit -m deploy
git remote add origin git@github.com:wuwenxing0912/react18.git
git push -f origin master:master
cd -
