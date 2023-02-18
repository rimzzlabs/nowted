# <p align="center">Zippy</p>

## Info

A starter template using react typescript that implements file-based routing

- Status: work in progress

### Troubleshooting

#### Git Hooks not running

When Git Hooks not running, run this command on your terminal, and reload your Editor

```sh
chmod +x .husky/pre-commit
```

#### Commiting files

This repo use conventional-commit for a better commit message, to mark the file as staged, you normally run `git add {path/to/file}`.

But please do not run the `git commit`, run this command instead, you will be prompted by cz to describe your change on this current commit:

```sh
yarn commit
```
