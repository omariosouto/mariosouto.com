# mariosouto.com

> ![GitHub deployments](https://img.shields.io/github/deployments/omariosouto/mariosouto.com/Production%20%E2%80%93%20mariosouto-com?label=vercel&logo=vercel&logoColor=white) [![Maintainability](https://api.codeclimate.com/v1/badges/c2d854cddeea8f212e0e/maintainability)](https://codeclimate.com/github/omariosouto/mariosouto.com/maintainability) 

Monorepo for my personal projects, also used as a playground for new ideas related to Front End and other projects in general.

## Getting started

- Clone the repository
- Install the dependencies:

```sh
yarn install
```

## Development

- For normal dev mode for my website, just run:

```sh
yarn dev:web
```

- For devmode and debug `@skynexui/components` inside my website run:

> In one terminal

```sh
yarn libs:build:watch
```

> And in another terminal window

```sh
yarn link @skynexui/components && yarn dev:web
```

> For remove the debug mode, just run:

```sh
yarn libs:unlink && yarn install && yarn dev:web
```


## Projects in this monorepo
| Status | Project |
| --- | --- |
| ![GitHub deployments](https://img.shields.io/github/deployments/omariosouto/mariosouto.com/Production%20%E2%80%93%20mariosouto-com?label=vercel&logo=vercel&logoColor=white) | [Site](https://mariosouto.com/)  |

## Other Projects

| Kind | Project |
| --- | --- |
| [![npm](https://img.shields.io/npm/dw/@skynexui/components?color=orange&label=%40skynexui%2Fcomponents)](https://skynexui.dev) | [@skynexui/components](https://skynexui.dev) |
| [![Awesome](https://cdn.rawgit.com/sindresorhus/awesome/d7305f38d29fed78fa85652e3a63e154dd8e8829/media/badge.svg)](https://github.com/sindresorhus/awesome) | [Developer Guide DevSoutinho](https://github.com/omariosouto/awesome-dev-guide-devsoutinho) |
| ![YouTube Channel Subscribers](https://img.shields.io/youtube/channel/subscribers/UCzR2u5RWXWjUh7CwLSvbitA?style=social) | [YouTube Channel](https://youtube.com/c/DevSoutinho) |

## Tools used here

### Decoration
- [Shields.io](https://shields.io)

### Infra & CI/CD
- [Vercel](http://vercel.com/home)
- [Turborepo](https://turborepo.org)
- [Codeclimate](https://codeclimate.com/github/omariosouto/mariosouto.com)

### Web
- [ReactJS](https://pt-br.reactjs.org)
- [NextJS](https://nextjs.org)
- [SkynexUI](https://skynexui.dev)
