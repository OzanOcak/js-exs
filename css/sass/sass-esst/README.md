## SASS

```console
yarn create vite
mv style.css style.scss
yarn add -D sass
```

```sass

$bg: #ead2a8;

body {
  background: $bg;
-----------------------

@use "variables" as var;
@use "base";

h1{
    color:var.$primary;
}
```
