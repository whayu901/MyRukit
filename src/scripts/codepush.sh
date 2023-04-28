#!/bin/bash


set -x # all executed commands are printed to the terminal
set -e # immediately exit if any command has a non-zero exit status

DEPLOYMENT_NAME=`echo "${DEPLOYMENT_NAME}" | head -1`
FIX_DEPLOYMENT_NAME="${DEPLOYMENT_NAME//[^[:alnum:]]/_}"
BRANCH_POSTFIX="${BRANCH//[^[:alnum:]]/_}"

FIX_DEPLOYMENT_NAME="${FIX_DEPLOYMENT_NAME}-${BRANCH_POSTFIX}"

if [ -z "$DEPLOYMENT_NAME" ]; then
    echo "Please sure that DEPLOYMENT_NAME exists"
    exit 1
fi

if [ -z "$APPCENTER_ACCESS_TOKEN" ]; then
    echo "Please sure that APPCENTER_ACCESS_TOKEN exists"
    exit 1
fi

if [ "$PLATFORM" != "ios" ] && [ "$PLATFORM" != "android"  ]
then
    echo "Please sure that you set PLATFORM env variable (ios | android)"
    exit 1
fi

APPCENTER_PROJECT_NAME="$APPCENTER_PROJECT_NAME_ANDROID"

if [ "$PLATFORM" == "ios" ]; then
    APPCENTER_PROJECT_NAME="$APPCENTER_PROJECT_NAME_IOS"
fi

DESCRIPTION="{\"description\": \"$DESCRIPTION\", \"sha\": \"$SHA\", \"actor\": \"$ACTOR\", \"isBinary\": $IS_BINARY, \"branch\": \"$BRANCH\", \"timestamp\": \"$TIMESTAMP\" }"


if [ "$DEPLOYMENT_NAME" == "Production" ]; then
    appcenter codepush release-react -a "$APPCENTER_PROJECT_NAME" -d "$DEPLOYMENT_NAME" --description "$DESCRIPTION"
fi

if [ "$DEPLOYMENT_NAME" != "Production" ]; then
    export NODE_OPTIONS=--openssl-legacy-provider
    appcenter codepush deployment add -a "$APPCENTER_PROJECT_NAME"  "$FIX_DEPLOYMENT_NAME" || true 

    if [ "$PLATFORM" == "ios" ]; then
        appcenter codepush release-react -a "$APPCENTER_PROJECT_NAME" -d "$FIX_DEPLOYMENT_NAME" --xcode-project-file "./ios/hijrabank.xcodeproj/project.pbxproj" -p "./ios/hijrabank/Info.plist" --description "$DESCRIPTION"
    fi
    if [ "$PLATFORM" == "android" ]; then
        appcenter codepush release-react -a "$APPCENTER_PROJECT_NAME" -d "$FIX_DEPLOYMENT_NAME" --description "$DESCRIPTION"
    fi
    
fi