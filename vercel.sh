if [[ "$VERCEL_GIT_COMMIT_REF" == "master" ]] || [[ "$VERCEL_GIT_COMMIT_REF" == "develop" ]]; then 
  exit 0
else 
  exit 1
fi