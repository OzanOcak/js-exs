## redux-toolkit

```console
yarn add react-redux @reduxjs/toolkit react-router-dom node-sass
```

data/store.js

```javascript
import { configureStore } from "@reduxjs/toolkit";

const store = configureStore({
  reducer: {},
});

export default store;
```

index.js

```js
<provider store={store}>
  <App />
</provider>
```
