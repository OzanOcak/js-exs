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

### useDispatch :

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

---

### useSelector :

we can select data from state to query

```js
const Cart = () => {
  const { cartProductIds } = useSelector((state) => state.cart)
  const cartProductData = productList.products.filter((product) => cartProductIds.includes(product.id))
  ...
  return(
    {cartProductData.map((product) => (
            <div key={product.id} className="row">
  )
```

---

### redux-thunk

```console
npx json-server './src/data/productList.json'
```

```js
export const fetchAllProducts = createAsyncThunk(
  "fetch-all-products",
  async (apiUrl) => {
    const response = await fetch(apiUrl);
    // console.log(await response.json())
    return response.json();
  }
);
```

then add it reducer in store.js and finally we can fetch url by calling function on home.js

Now we can directly select the state

```js
const Home = () => {
  const state = useSelector((state) => state);
  const { cart, products } = state;
  ...
  {!cart.cartProductIds.includes(product.id) && (
        <button
```
