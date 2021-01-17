#!/usr/bin/env bash
EXERCISE_NAME="$1"
mkdir -p "$EXERCISE_NAME"/0-start/
mkdir -p "$EXERCISE_NAME"/1-finish/
rsync -av exercise-template/0-start/ "$EXERCISE_NAME"/0-start/
echo "# $EXERCISE_NAME" > "$EXERCISE_NAME"/0-start/README.md
rsync -av "$EXERCISE_NAME"/0-start/ "$EXERCISE_NAME"/1-finish/
git add "$EXERCISE_NAME"