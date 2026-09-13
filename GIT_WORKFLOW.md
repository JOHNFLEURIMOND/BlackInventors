# Git Branching, Integration & Release Workflow

This document defines the repository's source-control workflow for development, integration, validation, releases, and production hotfixes.

The workflow is designed to keep production history stable while allowing development to proceed through isolated, reviewable changes.

## 1. Workflow Principles

The repository uses:

- `main` as the production branch
- `develop` as the integration branch for the next release
- short-lived `feat/*`, `fix/*`, `refactor/*`, `chore/*`, `docs/*`, and `test/*` branches for isolated development
- `hotfix/*` branches created from `main` for urgent production fixes
- Pull Requests to integrate validated work into `develop`
- release Pull Requests to promote tested work from `develop` into `main`

The workflow favors small branches, focused commits, automated validation, reviewable Pull Requests, and explicit production promotion.

### Repository rules

1. Do not perform normal feature development directly on `main` or `develop`.
2. Create short-lived branches from the correct integration branch.
3. Keep commits focused on one coherent change.
4. Review the working-tree diff before staging.
5. Review the staged diff before committing.
6. Run the repository's applicable validation checks before opening a Pull Request.
7. Do not merge Pull Requests with failing required CI checks.
8. Do not force-push shared branches such as `main` or `develop`.
9. Do not rewrite shared branch history.
10. Delete short-lived branches after their work is safely integrated.

---

## 2. Branch Model

```text
LOCAL DEVELOPMENT

feat/*
fix/*
refactor/*
chore/*
docs/*
test/*
    |
    | Pull Request
    | Prefer squash merge
    v

DEVELOPMENT / INTEGRATION

develop
    |
    | Release Pull Request
    | Prefer merge commit
    v

PRODUCTION

main
```

### Branch responsibilities

| Branch       | Purpose                                                      |
| ------------ | ------------------------------------------------------------ |
| `main`       | Stable, production-ready code                                |
| `develop`    | Integrated development work for the next release             |
| `feat/*`     | New features                                                 |
| `fix/*`      | Non-production bug fixes                                     |
| `refactor/*` | Internal code improvements without intended behavior changes |
| `chore/*`    | Tooling, dependencies, maintenance                           |
| `docs/*`     | Documentation-only work                                      |
| `test/*`     | Testing-focused work                                         |
| `hotfix/*`   | Urgent production fixes created directly from `main`         |

`local` is not normally a permanent branch. Your local environment is your machine, and you usually work locally on one of the short-lived branches above.

---

## 3. Golden Rule for Creating Branches

A new branch starts from the commit or branch you specify.

Prefer being explicit:

```bash
git switch -c feat/example-feature develop
```

Read this as:

> Create a new branch named `feat/example-feature` starting from `develop`, then switch to it.

Avoid relying only on your current location:

```bash
git switch -c feat/example-feature
```

That command creates the branch from whatever commit you are currently on, which can be easy to forget.

For normal development:

```bash
git switch -c feat/example-feature develop
```

For a bug fix:

```bash
git switch -c fix/example-bug develop
```

For an urgent production hotfix:

```bash
git switch -c hotfix/example-production-fix main
```

---

## 4. Starting New Work

Before starting an issue, make sure the working tree is in a safe state:

```bash
git status -sb
```

Switch to `develop`, update your knowledge of the remote, and fast-forward safely:

```bash
git switch develop
git fetch --prune origin
git status -sb
git pull --ff-only origin develop
```

Then create the issue branch explicitly from `develop`:

```bash
git switch -c feat/example-feature develop
```

Verify the new branch:

```bash
git status -sb
git branch -vv
git log develop..HEAD --oneline
git diff --stat develop...HEAD
```

For a brand-new branch, the last two commands should normally produce no output.

### Why `--ff-only`?

```bash
git pull --ff-only origin develop
```

`--ff-only` means **fast-forward only**.

Git updates the local branch only when it can move the branch pointer forward without creating a merge commit. If local and remote history have diverged, Git stops and lets you inspect the situation instead of making an automatic merge decision.

---

## 5. Daily Development Loop

While working on a short-lived branch, inspect before changing and validate before committing.

### Check branch and working-tree state

```bash
git status -sb
```

### See unstaged changes

```bash
git diff
```

### See a compact file summary

```bash
git diff --stat
```

### Check for whitespace errors

```bash
git diff --check
```

No output from `git diff --check` means Git found no whitespace errors in the current diff. It does **not** mean the code is functionally correct.

### Run project validation

Use the scripts that actually exist in the repository. For a typical JavaScript/TypeScript application this may include:

```bash
npm run lint
npm run typecheck
npm test
npm run build
```

Do not claim a check passed unless it was actually run.

---

## 6. Staging Changes Safely

Do not make `git add .` the automatic first move. Inspect the working tree first:

```bash
git status --short
git diff
git diff --stat
```

### Stage specific files

Prefer explicit staging when the working tree contains multiple concerns:

```bash
git add path/to/file
```

Multiple intentional files can be staged together:

```bash
git add path/to/file-one path/to/file-two
```

### Stage interactively with `git add -p`

```bash
git add -p
```

`-p` is the short form of:

```text
--patch
```

Patch mode lets you review changes in small sections called **hunks** and decide which ones belong in the next commit.

Common patch-mode responses include:

| Key | Meaning                                       |
| --- | --------------------------------------------- |
| `y` | Stage this hunk                               |
| `n` | Do not stage this hunk                        |
| `s` | Split the hunk into smaller hunks if possible |
| `q` | Quit patch mode                               |
| `?` | Show help for the available patch commands    |

This is especially useful when one file contains changes that belong in different commits.

### Stage all changes only when appropriate

```bash
git add .
```

Use this only when **every** working-tree change intentionally belongs in the same commit.

### Inspect the staging area

```bash
git status --short
git diff --staged
git diff --staged --check
```

`git diff --staged` and `git diff --cached` are equivalent.

Do not commit until the staged patch matches what you intend to include.

### Unstage a file without discarding its changes

```bash
git restore --staged path/to/file
```

This removes the file from the staging area but keeps your working-tree edits.

---

## 7. Creating Focused Commits

Example:

```bash
git commit -m "feat(client): establish UI foundation"
```

Recommended Conventional Commit prefixes:

```text
feat:
fix:
refactor:
chore:
docs:
test:
ci:
build:
```

Examples:

```text
feat(client): add earthquake filtering
fix(server): validate malformed USGS responses
refactor(client): simplify Redux selectors
chore: update TypeScript dependencies
docs: document API architecture
test(server): add integration coverage
ci: add Node validation workflow
build: configure production asset handling
```

### Commit guidance

A good commit should:

- represent one coherent change
- avoid unrelated formatting or cleanup
- include tests when behavior changes
- leave the repository in a buildable, reviewable state when practical
- use a message that describes the outcome rather than the editing process

Before committing:

```bash
git diff --staged --stat
git diff --staged
git diff --staged --check
```

---

## 8. Publishing a Branch

The first time you push a new branch:

```bash
git push -u origin feat/example-feature
```

Breakdown:

```text
git push
-u                    = --set-upstream
origin                = remote repository
feat/example-feature  = branch being pushed
```

`-u` establishes a tracking relationship:

```text
local branch
    <->
origin/branch
```

After that, future pushes can usually be:

```bash
git push
```

And future fast-forward pulls can usually be:

```bash
git pull --ff-only
```

---

## 9. Pull Requests and Merge Strategy

Normal feature work should target `develop`, not `main`.

Example:

```bash
gh pr create \
  --base develop \
  --head feat/example-feature \
  --title "feat(client): describe the feature" \
  --body "Refs #123"
```

Use `Refs #123` for an integration PR when you do not want issue completion to be confused with production promotion.

### Feature branch flow

```text
feat/example-feature
        |
        | Pull Request
        | validation + review
        | squash merge
        v
     develop
```

### Recommended feature merge strategy: Squash and merge

For short-lived `feat/*`, `fix/*`, `refactor/*`, `chore/*`, `docs/*`, and `test/*` branches, prefer **Squash and merge** into `develop`.

Benefits:

- keeps integration history focused on completed units of work
- avoids preserving temporary fixup commits
- makes `develop` easier to inspect and revert

Delete the short-lived branch after the PR is merged and no longer needed.

---

## 10. Promoting Development to Production

When `develop` contains tested, release-ready work, create a release Pull Request:

```bash
gh pr create \
  --base main \
  --head develop \
  --title "release: promote develop to production"
```

Flow:

```text
feature branches
      |
      v
   develop
      |
      | release validation
      | release Pull Request
      | merge commit
      v
     main
```

### Recommended release merge strategy: Merge commit

Prefer a **merge commit** when promoting `develop` into `main`.

This preserves the relationship between the integration branch and the production release, making release comparisons and synchronization easier to reason about.

`main` should represent stable, production-ready history.

---

## 11. Tagging a Production Release

After the release PR is merged:

```bash
git switch main
git fetch --prune origin
git pull --ff-only origin main
```

Create an annotated version tag:

```bash
git tag -a v1.1.0 -m "Release v1.1.0"
```

Push the tag:

```bash
git push origin v1.1.0
```

Use a consistent release-versioning strategy for the project.

---

## 12. Hotfix Workflow

Urgent production fixes start from `main`, not `develop`.

```bash
git switch main
git fetch --prune origin
git pull --ff-only origin main
git switch -c hotfix/production-api-error main
```

Implement and validate the fix, then open a Pull Request into `main`.

```text
hotfix/*
   |
   | Pull Request
   v
  main
```

After the production fix is merged, synchronize the production history back into `develop` through a separate PR:

```text
hotfix/*
   |
   v
  main
   |
   | synchronization PR
   v
 develop
```

Do not independently reimplement the fix on both branches. Synchronizing the merged production history reduces the risk of `main` and `develop` receiving subtly different fixes.

---

## 13. Repository Status Commands

### Current branch and working tree

```bash
git status -sb
```

Breakdown:

```text
-s / --short   short-format status
-b / --branch  include branch and tracking information
```

### Show only the current branch name

```bash
git branch --show-current
```

### Show branches and upstream tracking

```bash
git branch -vv
```

`-v` means verbose. Repeating it as `-vv` shows additional tracking/upstream information.

Example:

```text
* develop  abc1234 [origin/develop] latest commit
  main     def5678 [origin/main] stable release
```

### Update knowledge of the remote repository

```bash
git fetch origin
```

This downloads current remote branch and commit information without changing your working files.

### Fetch and remove stale remote-tracking references

```bash
git fetch --prune origin
```

`--prune` removes local remote-tracking references for remote branches that no longer exist.

It does not delete your normal local branches.

---

## 14. Reading Git History

### Compact history

```bash
git log --oneline -10
```

`--oneline` prints each commit in a compact one-line format.

`-10` limits the output to ten commits.

### Visual repository graph

```bash
git log --graph --oneline --decorate --all -15
```

| Option       | Meaning                                |
| ------------ | -------------------------------------- |
| `--graph`    | Draw branch/merge relationships        |
| `--oneline`  | Show each commit on one line           |
| `--decorate` | Show branch, tag, and `HEAD` labels    |
| `--all`      | Include history from all refs/branches |
| `-15`        | Limit output to 15 commits             |

Read the command as:

> Show repository history as a graph, keep each commit compact, show branch and tag labels, include all refs, and stop after 15 commits.

### Latest commit only

```bash
git log -1 --oneline --decorate
```

---

## 15. Understanding `HEAD`

`HEAD` represents your current checked-out position.

Example:

```text
HEAD -> feat/example-feature
```

means your working copy is currently on:

```text
feat/example-feature
```

`origin/HEAD` is different. It represents the remote repository's default branch reference.

---

## 16. Comparing Branches

### Commits on the current branch that are not in `develop`

```bash
git log develop..HEAD --oneline
```

Read it as:

> Show commits reachable from my current branch that are not reachable from `develop`.

### Commits in `develop` but not `main`

```bash
git log main..develop --oneline
```

This is useful before promoting development to production.

### Summary of changes introduced by the feature branch

```bash
git diff --stat develop...HEAD
```

The three-dot comparison is useful for Pull Request-style comparisons because Git compares the current branch against the merge base it shares with `develop`.

### Full feature diff

```bash
git diff develop...HEAD
```

---

## 17. `..` vs `...`

These look similar but have different meanings.

### Two dots with `git log`

```bash
git log main..develop
```

Means:

> Show commits reachable from `develop` that are not reachable from `main`.

### Three dots with `git diff`

```bash
git diff main...develop
```

Means roughly:

> Compare `develop` with the common ancestor where `main` and `develop` diverged.

This is useful for understanding what a branch introduced relative to its starting point.

---

## 18. Commands, Arguments, Options, and Flags

Git commands usually have this shape:

```text
git <subcommand> [options] [arguments]
```

Example:

```bash
git log --graph --oneline --decorate --all -15
```

Breakdown:

```text
git          program
log          Git subcommand
--graph      long option / flag
--oneline    long option / flag
--decorate   long option / flag
--all        long option / flag
-15          numeric short-form option
```

Another example:

```bash
git push -u origin develop
```

```text
git          program
push         subcommand
-u           short option / flag
origin       argument: remote
develop      argument: branch
```

Git documentation generally uses the word **option**, though developers commonly say **flag** or **switch**.

### Important: options are often subcommand-specific

The same short letter can mean different things for different Git subcommands.

For example, always interpret an option in the context of the command using it:

```bash
git add -p
```

means patch mode for `git add`, while other Git subcommands may define their own options.

When unsure:

```bash
git <subcommand> --help
```

Example:

```bash
git add --help
```

---

## 19. Common Short and Long Options Legend

This legend intentionally keeps both forms visible so commands are easier to learn instead of becoming a collection of mysterious punctuation.

| Short | Long             | Common command/context | Meaning                                                 |
| ----- | ---------------- | ---------------------- | ------------------------------------------------------- |
| `-p`  | `--patch`        | `git add -p`           | Interactively choose hunks to stage                     |
| `-u`  | `--set-upstream` | `git push -u`          | Set the branch's upstream/tracking relationship         |
| `-c`  | `--create`       | `git switch -c`        | Create a branch and switch to it                        |
| `-d`  | `--delete`       | `git branch -d`        | Safely delete a local branch Git considers merged       |
| `-D`  | forced delete    | `git branch -D`        | Delete a local branch even if Git considers it unmerged |
| `-v`  | `--verbose`      | several commands       | Show more detail                                        |
| `-s`  | `--short`        | `git status -s`        | Show compact status output                              |
| `-b`  | `--branch`       | `git status -b`        | Include branch/tracking information                     |
| `-m`  | `--message`      | `git commit -m`        | Provide a commit message on the command line            |
| `-a`  | `--all`          | `git commit -a`        | Stage modified/deleted tracked files before committing  |
| `-n`  | `--no-verify`    | commit/push contexts   | Skip configured verification hooks; use sparingly       |
| `-1`  | numeric limit    | `git log -1`           | Limit output to one commit                              |
| `-10` | numeric limit    | `git log -10`          | Limit output to ten commits                             |

### Important cautions

Be especially careful with:

```bash
git branch -D branch-name
```

Prefer:

```bash
git branch -d branch-name
```

for normal cleanup.

Also avoid casually using:

```bash
git commit -a
```

because it can stage tracked modifications that you did not intend to include. Explicit staging is usually easier to review.

Avoid using:

```bash
git commit --no-verify
```

or:

```bash
git push --no-verify
```

simply to bypass failing checks. Fix or understand the failing validation instead.

---

## 20. Shell Syntax Used with Git

Not everything in a terminal command is Git syntax. The shell also interprets operators and special characters.

### `&&` means "run the next command only if the previous command succeeded"

```bash
git status && git diff
```

Conceptually:

```text
Run git status

If successful:
    run git diff
```

While learning or debugging, separate commands are often easier to inspect.

### `||` means "run the next command if the previous command failed"

Example often used with searches:

```bash
git grep -n "pattern" || true
```

`git grep` returns a non-zero status when it finds no matches. `|| true` prevents that expected "no matches" result from causing a longer shell command sequence to stop.

It does not change Git data.

### `\` continues a command onto the next line

```bash
git grep -nE \
  'pattern-one|pattern-two' \
  -- 'components/**'
```

The backslash tells the shell that the command continues on the next line.

### `--` separates options from paths or other positional arguments

Example:

```bash
git grep -n "Footer" -- 'components/**'
```

This makes it explicit that what follows should be interpreted as path specifications rather than command options.

---

## 21. Recovery and Safety

Git is much easier to work with when recovery commands are familiar before they are urgently needed.

### Unstage a file without discarding the edits

```bash
git restore --staged path/to/file
```

### Discard an unstaged change to a tracked file

```bash
git restore path/to/file
```

This discards the working-tree modification. Inspect the diff before running it.

### Return to the previous branch

```bash
git switch -
```

### Temporarily store unfinished work

```bash
git stash push -m "describe unfinished work"
```

List stashes:

```bash
git stash list
```

Reapply the most recent stash:

```bash
git stash pop
```

Inspect the working tree afterward because stash application can produce conflicts.

### Abort an unresolved merge

```bash
git merge --abort
```

### Abort an unresolved rebase

```bash
git rebase --abort
```

### Inspect recent movements of `HEAD`

```bash
git reflog
```

`git reflog` is often the safest first diagnostic tool after an accidental reset, rebase, branch move, or detached-HEAD mistake.

### High-risk operations

Do not use these casually:

```text
git reset --hard
git clean -fd
git branch -D
git push --force
git push --force-with-lease
```

Understand exactly what will be discarded or rewritten before using them.

Never force-push `main` or `develop` as part of the normal workflow.

---

## 22. Cleaning Up Old Branches

First verify whether unique commits remain:

```bash
git log develop..branch-name --oneline
```

Check for code differences:

```bash
git diff develop...branch-name
```

If the branch has been safely integrated and is no longer needed:

```bash
git branch -d branch-name
```

Delete the remote branch when appropriate:

```bash
git push origin --delete branch-name
```

Refresh stale remote-tracking references:

```bash
git fetch --prune origin
```

---

## 23. Avoid These Mistakes

### Creating a branch from the wrong starting point

Risky when you have not confirmed your current commit:

```bash
git switch -c feat/new-feature
```

Safer:

```bash
git switch -c feat/new-feature develop
```

### Accidentally working directly on `develop`

Before modifying files:

```bash
git status -sb
```

Confirm you are on the intended short-lived branch.

### Accidentally promoting unfinished work to `main`

Normal development:

```text
feat/* -> develop
fix/* -> develop
refactor/* -> develop
```

Production promotion:

```text
develop -> main
```

Production hotfix:

```text
hotfix/* -> main -> develop
```

### Blindly staging everything

Avoid defaulting to:

```bash
git add .
```

when the working tree contains unrelated changes.

Prefer:

```bash
git add path/to/file
```

or:

```bash
git add -p
```

Then verify:

```bash
git diff --staged
```

### Bypassing hooks because they fail

Do not reach immediately for:

```bash
git commit --no-verify
```

A failing hook may be identifying a real problem. Understand the failure before bypassing repository safeguards.

---

## 24. Recommended Repository Protections

For repositories that support branch protection or rulesets, consider protecting `main` and `develop` with policies such as:

- require Pull Requests before merging
- require applicable CI checks to pass
- block force pushes
- block branch deletion
- require conversation resolution where review is used
- restrict direct production changes

The exact settings should reflect the project and team size. A personal repository does not need enterprise bureaucracy, but production branches should still be difficult to damage accidentally.

---

## 25. Quick Start Cheat Sheet

### Start a new feature

```bash
git switch develop
git fetch --prune origin
git pull --ff-only origin develop
git switch -c feat/my-feature develop
```

### Verify the branch

```bash
git status -sb
git branch -vv
git log develop..HEAD --oneline
```

### Work and inspect

```bash
git status --short
git diff
git diff --stat
git diff --check
```

### Stage and inspect

Preferred:

```bash
git add path/to/file
git diff --staged
```

Interactive:

```bash
git add -p
```

Remember:

```text
-p = --patch
```

### Validate

```bash
npm run lint
npm run typecheck
npm test
npm run build
```

Use only the validation scripts that actually exist in the repository.

### Commit and push

```bash
git commit -m "feat(client): describe the change"
git push -u origin feat/my-feature
```

### Open a PR into development

```bash
gh pr create \
  --base develop \
  --head feat/my-feature \
  --title "feat(client): describe the change" \
  --body "Refs #123"
```

### After the first push

```bash
git push
```

is usually enough because the upstream branch has already been configured.

---

## 26. Pick-Up-Where-I-Left-Off Commands

When returning to the repository after time away:

```bash
git fetch --all --prune

printf '\n=== STATUS ===\n'
git status -sb

printf '\n=== CURRENT BRANCH ===\n'
git branch --show-current

printf '\n=== BRANCH TRACKING ===\n'
git branch -vv

printf '\n=== LATEST COMMIT ===\n'
git log -1 --oneline --decorate

printf '\n=== RECENT HISTORY ===\n'
git log --graph --oneline --decorate --all -15

printf '\n=== CURRENT BRANCH VS DEVELOP ===\n'
git log develop..HEAD --oneline

printf '\n=== CHANGES VS DEVELOP ===\n'
git diff --stat develop...HEAD

printf '\n=== DEVELOP VS PRODUCTION ===\n'
git log main..develop --oneline

printf '\n=== OPEN ISSUES ===\n'
gh issue list --state open --limit 100

printf '\n=== PULL REQUEST STATUS ===\n'
gh pr status
```

This answers:

1. Is the working tree clean?
2. What branch am I on?
3. What does it track?
4. What changed recently?
5. What commits are unique to my current branch?
6. What code changes does the branch introduce?
7. What is waiting in `develop` that is not yet in production?
8. What issues and Pull Requests remain?

---

## 27. Mental Model

Think of the repository as a controlled integration and release pipeline:

```text
ISSUE
  |
  v
SHORT-LIVED BRANCH
feat/* / fix/* / refactor/*
  |
  | validate + review
  v
PULL REQUEST
  |
  | squash merge
  v
INTEGRATION
 develop
  |
  | release validation
  v
RELEASE PULL REQUEST
  |
  | merge commit
  v
PRODUCTION
  main
  |
  v
VERSION TAG / DEPLOYMENT
```

The important rule is:

> Code moves forward through controlled integration and release steps. Unfinished local work does not jump directly into production.

---

## 28. Generic Example

For a normal feature:

```text
main
  |
develop
  |
feat/example-feature
```

Create the branch from `develop`:

```bash
git switch -c feat/example-feature develop
```

Work should happen on:

```text
feat/example-feature
```

The feature Pull Request should target:

```text
develop
```

A later release Pull Request promotes:

```text
develop -> main
```

This keeps production stable while development continues independently.

---

## 29. Command Reference Summary

| Goal                             | Command                                          |
| -------------------------------- | ------------------------------------------------ |
| Show status                      | `git status -sb`                                 |
| Show current branch              | `git branch --show-current`                      |
| Show tracking branches           | `git branch -vv`                                 |
| Fetch remote updates             | `git fetch --prune origin`                       |
| Fast-forward local branch        | `git pull --ff-only origin <branch>`             |
| Create branch from explicit base | `git switch -c <new-branch> <base-branch>`       |
| Show unstaged diff               | `git diff`                                       |
| Show diff summary                | `git diff --stat`                                |
| Check whitespace                 | `git diff --check`                               |
| Stage a file                     | `git add <path>`                                 |
| Interactively stage hunks        | `git add -p`                                     |
| Show staged diff                 | `git diff --staged`                              |
| Unstage a file                   | `git restore --staged <path>`                    |
| Commit                           | `git commit -m "message"`                        |
| First push + upstream            | `git push -u origin <branch>`                    |
| Later push                       | `git push`                                       |
| Compare feature commits          | `git log develop..HEAD --oneline`                |
| Compare feature code             | `git diff develop...HEAD`                        |
| Show repository graph            | `git log --graph --oneline --decorate --all -15` |
| Delete merged local branch       | `git branch -d <branch>`                         |
| Delete remote branch             | `git push origin --delete <branch>`              |
| Previous branch                  | `git switch -`                                   |
| Abort merge                      | `git merge --abort`                              |
| Abort rebase                     | `git rebase --abort`                             |
| Recovery history                 | `git reflog`                                     |
