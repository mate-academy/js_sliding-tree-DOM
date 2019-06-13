# Base template for Gulp

Template to start from before starting frontend projects.

## Install template

- Create empty repository for your project. [learn how](#) _need a link here_
- Clone boilerplate into project directory and navigate there.
```bash
$ git clone https://github.com/mate-academy/gulp-template.git project-name
$ cd project-name
```
- Change remote repository to recently created
```bash
$ git remote set-url origin github-link-of-project
```
- Install dependencies
```bash
$ npm install
```

All packages will be installed after executing the script above.

## Development mode 

```bash
$ npm run start
```

## Build the project

```bash
$ npm run build
```

## Linters

To check codestyle manually execute command:
```bash
$ npm run lint
```
This command will check codestyle for html/scss/js files in `/src`. Also, 
linters run on `pre-commit` hook and during development.

- Follow [the simplified JS styleguide](https://mate-academy.github.io/style-guides/javascript-standard-modified)
- Follow [HTML, CSS styleguide](https://mate-academy.github.io/style-guides/htmlcss.html)

## Deploy on gh-pages

- Build the project
```bash
$ npm run build
```
- Commit and push all recent changes
```bash
$ git add .
$ git commit -m 'commit message'
$ git push origin branch-name
```
- Execute `npm run deploy`. This command will push the `/dist` folder to branch
  `gh-pages` in your remote repository. 
- Enable `gh-pages` for your repository. [learn how](#) _need a link here_

## Project structure

- `src/` - directory for html, css, sass, js, image, fonts files
- `dist/` - directory for built pages

You should be writing code in `src/` directory.

### Livereload and syncronization with browsers

Task `$ npm run start`

When task is executed, gulp starts local web server BrowserSync and opens index.html.  

[About BrowserSync](http://www.browsersync.io/)  

Server uses `dist/` as a project root.
