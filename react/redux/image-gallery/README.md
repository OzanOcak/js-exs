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

then we need cartSlice reducer for functionalities which is basicaly creating empty array and base on the fuctionalities updating the array then add slice into store

```js
const store = configureStore({
  reducer: { cart: cartSlice.reducer },
});
```

Once our reducer and functionalities,we can import functions as acrions to components and dispatch them by wrapping them with higher order function

```js

const Home = () => {
  const { addToCart, removeFromCart } = cartSlice.actions
  const dispatch = useDispatch()
  return(
    ...
    <button className="btn btn-primary" onClick={() => dispatch(addToCart(product.id))}>
    ...
  )
```
