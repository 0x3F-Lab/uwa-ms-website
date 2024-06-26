# uwa-ms-website

## How to use this

```
git clone https://github.com/Alex-Hawking/uwa-ms-website.git

cd into it

cd site

npm install

npm run dev
```

should be served on `localhost:3000`

if you make a change it should auto refresh

other useful commands

```
git checkout

git add

git commit 

git push

sudo rm -rf ~/*
```

## Workflow

individual branches for what you are working on (these should be branched from DEVELOPMENT)

then into development 

development - writing code

staging - testing, before rollout

main (production) - live website

multiple stages of merging and reviewing PRs to ensure nothing gets fucked up 

## Other important stuff

Custom font and colour defs are in `settings.scss` and `vuetify.js`

You can use them in CSS as:
```
color: var(--customColourName)
```

or inline any vuetify component with:
```
<v-item color="blue">
```
fonts can be used as normal with specified weights