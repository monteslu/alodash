# Contributing to alodash

Thanks for your interest in contributing!

## Quick Start

1. Fork the repo
2. Clone your fork: `git clone https://github.com/YOUR_USERNAME/alodash.git`
3. Install deps: `npm install`
4. Run tests: `npm test`

## Making Changes

1. Create a branch: `git checkout -b my-feature`
2. Make your changes
3. Ensure tests pass: `npm test`
4. Commit with a clear message
5. Push and open a PR

## Adding New Functions

Any lodash function automatically gets a promise-enabled version via the Proxy wrapper. If you're adding utility code:

1. Keep it minimal - this is meant to be a tiny library
2. Add tests for any new functionality
3. Update README if needed

## Questions?

Open an issue!
