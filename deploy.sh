#!/bin/bash

set -e

BUCKET=i.boris.co

ng build --prod --build-optimizer

echo Uploading new files
env/bin/aws s3 sync dist/resume-web s3://$BUCKET/ --delete --acl public-read
