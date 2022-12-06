```console
npm install -g typescript
touch index.html main.ts
tsc main.ts
tsc -w  main.ts
```

typescript compiler will create main.js file, with -w flag, we can also keep watching the changings.

```console
mkdir build src
tsc -init
```

src folder will keep the files, while build folder will keep the output files.
tsc -init command will create **tsconfig.json** file

```json
{
"rootDir": "./src",
"outDir": "./build/js"
},
"include":["src"]
```

this json change will create js folder under build if it is not exit when tsc command run
now whenever we create ts file, it will automatically create within js folder and as well as at the top folder so we need add include in order to avoid from creating js file outside of source of src.
we also need to manually delete js files inside build/js if we delete ts file.

- ts compiler will compile to js code and they will be keep running without error however tsc will give warnings, in case we dont want warnings, we can either comment out "noEmitOnError" in tsconfig.json or **tsc -w --noEmitOnError** by giving glag,
