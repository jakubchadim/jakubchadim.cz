#!/usr/bin/env bash

cd public
git add .
git commit -am 'Deploy'
git push origin gh-pages
