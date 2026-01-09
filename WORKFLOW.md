# Development Workflow Guide

## Branch Structure

- **`main`** - Production branch (deploys to metronomeframeworks.com)
- **`dev`** - Development/staging branch (gets preview URLs)
- **Feature branches** - For specific features (also get preview URLs)

## Development Workflow

### 1. Working on Changes (Development)

Always work on the `dev` branch for testing:

```bash
# Switch to dev branch
git checkout dev

# Make your changes to files...

# Stage and commit changes
git add .
git commit -m "Description of changes"

# Push to GitHub
git push
```

**Result:** Vercel automatically creates a preview URL (e.g., `metronome-frameworks-git-dev-mgelberg.vercel.app`)

### 2. Testing Changes

- Check the Vercel dashboard or GitHub commit for the preview URL
- Test your changes thoroughly on the preview URL
- Make additional commits to `dev` as needed

### 3. Deploying to Production

Once you're satisfied with changes on `dev`:

#### Option A: Using Pull Request (Recommended)

```bash
# Create a PR from dev to main
gh pr create --base main --head dev --title "Deploy: [brief description]"

# Review the PR on GitHub, then merge it
gh pr merge --squash
```

#### Option B: Direct Merge

```bash
# Switch to main branch
git checkout main

# Merge dev into main
git merge dev

# Push to production
git push

# Switch back to dev
git checkout dev
```

**Result:** Changes deploy to metronomeframeworks.com

## Quick Reference Commands

```bash
# Check which branch you're on
git branch

# Switch branches
git checkout dev          # Go to dev
git checkout main         # Go to main

# Create a new feature branch
git checkout -b feature-name
git push -u origin feature-name

# View commit history
git log --oneline -10

# Undo last commit (keeps changes)
git reset --soft HEAD~1
```

## Vercel Configuration

- **Production Branch:** `main` → metronomeframeworks.com
- **Preview Branches:** All other branches → automatic preview URLs
- **Domain:** metronomeframeworks.com points to `main` only

## Best Practices

1. **Never push directly to `main`** - always test on `dev` first
2. **Use descriptive commit messages**
3. **Test preview URLs** before merging to production
4. **Keep `dev` in sync** with `main` after production deployments:
   ```bash
   git checkout dev
   git merge main
   git push
   ```

## Rollback in Emergency

If you need to revert production:

```bash
git checkout main
git revert HEAD        # Creates new commit that undoes last change
git push
```

## Getting Help

- View Vercel deployments: https://vercel.com/mgelbergs-projects/metronome-frameworks
- View GitHub repo: https://github.com/mgelberg/metronome-frameworks
