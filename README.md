# Personal Portfolio

## Description

Frontend of a fullstack app that connects investors and investment advisors.
The goal of this aplication was to make my first fullstack app using Next.js.

## Table of contents

- [Overview](#overview)
    - [Built with](#built-with)
    - [Design](#design)
        - [User flow](#user-flow)
        - [Screenshots](#screenshots)
    - [Deploy links](#deploy-links)
- [Project Structure](#project-structure)
    - [Scripts](#scripts)
    - [Dependencies](#dependencies)
    - [Dev dependencies](#dev-dependencies)
    - [Installation](#installation)
    - [Architecture](#architecture)
- [The process](#the-process)
    - [What I learned](#what-i-learned)
    - [Continued development](#continued-development)
    - [Useful resources](#useful-resources)
- [Acknowledgments](#acknowledgments)
    - [Author](#author)

## Overview

### Built with

#### React related
- Next.js
- Typescript
- React context

#### Others
- Styled components
- Radix UI


### Design

#### User flow


#### Screenshots
![]()

### Deploy links

- Frontend deploy: [Live App](https://easybank-investments.vercel.app/)

## Project structure

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Scripts

dev: Starts the development environment.
build: Used to build the application for production.
Executes ESLint for linting and automatic correction.
Execute the scripts with npm run, yarn or pnpm.

- `dev`: Starts the development environment.
- `build`: Used to build the application for production.
- `lint`: Executes ESLint for linting and automatic correction.

Run the scripts with `npm run`, `yarn` or `pnpm`.

## Dependencies

- ````@hookform/resolvers````: ^3.3.4,
- ````@radix-ui/react-dialog````: ^1.0.5,
- ````@radix-ui/react-dropdown-menu````: ^2.0.6,
- ````@radix-ui/react-icons````: ^1.3.0,
- ````axios````: ^1.6.7,
- ````babel-plugin-styled-components````: ^2.1.4,
- ````nanoid````: ^5.0.5,
- ````next````: 14.1.0,
- ````react````: ^18,
- ````react-dom````: ^18,
- ````react-feather````: ^2.0.10,
- ````react-hook-form````: ^7.50.1,
- ````react-toastify````: ^10.0.4,
- ````styled-components````: ^6.1.8,
- ````yarn````: ^1.22.21,
- ````zod````: ^3.22.4

## Dev dependencies

- ``@swc/plugin-styled-components``: ^1.5.116,
- ``@testing-library/jest-dom``: ^6.4.0,
- ``@testing-library/react``: ^14.1.2,
- ``@types/node``: ^20,
- ``@types/react``: ^18,
- ``@types/react-dom``: ^18,
- ``autoprefixer``: ^10.0.1,
- ``eslint``: ^8,
- ``eslint-config-next``: 14.1.0,
- ``jest``: ^29.7.0,
- ``jest-environment-jsdom``: ^29.7.0,
- ``new-component``: ^5.0.2,
- ``postcss``: ^8,
- ``tailwindcss``: ^3.3.0,
- ``typescript``: ^5"

## Installation

1. Clone the frontend repo:

```bash
git clone git@github.com:brunomoleta/portfolio.git
```

2. Install the dependencies:

```bash
pnpm install 

# or 

yarn install
```

## Architecture

```
portfolio/
│
├── node_modules/         Dependencies installed in your local environment.
│
├── public/               Public files.
│
├── lib/                  Includes a file to set up Styled-components.
│
├── src/                  Source code
│   ├── app/              Routes;
│   ├── assets/           Static resources such as images, logos and illustrations;
│   ├── components/       React components;
│   ├── providers/        Componentes de gerenciamento de estado global;
│   ├── schemas/          Data validation context;
│   ├── hooks/            Hook functions;
│   ├── services/         API communication service, data and helper functions.
│   ├── styled-components/Styled-components components;
│   ├── types/            Component types;
│   └── ...
```

## The process


### What I learned



### Continued development


### Useful resources

- [Josh Cameau's blog](https://www.joshwcomeau.com/) - The best frontend blog I know by far;
- [Radix UI](https://www.radix-ui.com/) - It saved me time from developing components such as the Dropdown and the modal
  dialog;

## Acknowledgments

### Author

- Github - [Bruno Moleta](https://github.com/brunomoleta)
- Frontend Mentor - [@brunomoleta](https://www.frontendmentor.io/profile/brunomoleta)
- LinkedIn - [@brunomoleta](https://www.linkedin.com/in/bruno-moleta-santos/)
- Email - brunomoleta@pm.me 