#!/bin/bash
set -e
set -u

cd "$(dirname "$0")"

./prep_repo_for_deploy.sh

npm install --only=prod
npm run build

mkdir -p /apps/historiska-politiska-namn.codeandstuff.se
sudo rsync -a ./build/* /apps/historiska-politiska-namn.codeandstuff.se

