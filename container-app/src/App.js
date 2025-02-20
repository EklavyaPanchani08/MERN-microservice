import React, { Suspense } from "react";
const ProductList = React.lazy(() => import("productApp/ProductList"));

const App = () => {
  return (
    <div>
      <h1>Main Container App</h1>
      <Suspense fallback={<div>Loading Product List...</div>}>
        <ProductList />
      </Suspense>
    </div>
  );
};

export default App;