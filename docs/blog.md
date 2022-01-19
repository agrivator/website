# Guide on adding a new blog

This website is build using 11ty a static site generator(SSG) meaning to generate new changes we need to build it again.

## To add a new blog

1. Open [blogs folder](../src/blogs).
2. Add a new markdown file with properties

---yml
title:
description:
date:
tags:

- key
  cover: <image url or file in static folder>
  author:
  name:
  email:
  avatar:

---

3. Write your body in markdown and save it.
4. Commit it and netlify will automatically build it.

## Netlify CMS

1. Website data management and blog writing can be also controlled by netlify cms which is configured.
2. Go to blogs section in netlify cms and write the required files and your good to go.
3. Netlfy will commit and build the new website for you.

## Testing locally netlify cms

1. Start the dev server as in Readme
2. Run the command

```sh
npx netlify-cms-proxy-server
```

3. Open `http://localhost:8080/admin`
