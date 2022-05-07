import { useContext } from "react";
import { observer } from "mobx-react-lite";

import './style.scss';

import { Context } from "../../index";

const ProductsList = observer(() => {
  const {store} = useContext(Context)

  return (
    <div className={"productsList"}>
      <div className={"productsList_header"}>
        <h3>Список продуктов</h3>
      </div>
      <div className={"productsList_list"}>
        {
          store.productsStore.viewedProducts.map((product) => {
            return (
              <>
                {
                  store.cartStore.cartProducts.find(cartProduct => cartProduct._id === product._id) ?
                    <button className={"productsList_list_removeButton"} onClick={() => store.cartStore.deleteProductFromCart(product._id)} key={product._id}>{product.name}</button>
                    :
                    <button className={"productsList_list_addButton"} onClick={() => store.cartStore.addProductToCart(product._id)} key={product._id}>{product.name}</button>
                }
              </>
            )
          })
        }
      </div>
    </div>
  );
});

export default ProductsList;
