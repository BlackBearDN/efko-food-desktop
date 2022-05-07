import {useContext} from "react";
import {observer} from "mobx-react-lite";

import "./style.scss"

import {Context} from "../../index";
import Loader from "../../components/Loader";

const FoodPage = observer(() => {
  const {store} = useContext(Context)

  return (
    <div className={"foodPage"}>
      {
        store.isLoading && <Loader />
      }
      <div className={"productsBlock"}>
        <div className={"productsBlock__header"}>
          <h3>Список продуктов</h3>
        </div>
        <div className={"productsBlock__productsList"}>
          {
            store.productsStore.products.map((product, index) => {
              return (
                <button key={product._id} onClick={() => store.productsStore.activeProductIndex = index} className={index === store.productsStore.activeProductIndex ? "activeProduct" : ""}>{product.name}</button>
              )
            })
          }
        </div>
      </div>
      <div className={"productInfoBlock"}>
        {
          store.productsStore.activeProductIndex !== null ?
            <div className={"productInfoBlock__productInfo"}>
              <h3>Информация о продукте: <span>{store.productsStore.products[store.productsStore.activeProductIndex].name}</span></h3>
              <div className={"productInfoBlock__productInfo_group productGroup-1"}>
                <p>Калорийность: <span>{store.productsStore.products[store.productsStore.activeProductIndex].calories} ккал/на 1 гр.</span></p>
              </div>
              <div className={"productInfoBlock__productInfo_group productGroup-2"}>
                <p>НЖК: <span>{store.productsStore.products[store.productsStore.activeProductIndex].params.njk}</span></p>
                <p>МНЖК: <span>*</span></p>
                <p>Омега-3: <span>*</span></p>
                <p>Омега-6: <span>*</span></p>
                <p>Углеводы: <span>{store.productsStore.products[store.productsStore.activeProductIndex].params.carbohydrates}</span></p>
                <p>Белки: <span>{store.productsStore.products[store.productsStore.activeProductIndex].params.proteins}</span></p>
                <p>Жиры: <span>*</span></p>
              </div>
              <div className={"productInfoBlock__productInfo_group productGroup-3"}>
                <p>Треонин: <span>* гр.</span></p>
                <p>Изолейцин: <span>*</span></p>
                <p>Метионин: <span>*</span></p>
                <p>Цистин: <span>*</span></p>
                <p>Аргинин: <span>*</span></p>
                <p>Валин: <span>*</span></p>
              </div>
              <div className={"productInfoBlock__productInfo_group productGroup-4"}>
                <p>Цена: <span>{store.productsStore.products[store.productsStore.activeProductIndex].price} руб./1 гр.</span></p>
              </div>
            </div>
            :
            <div className={"productInfoBlock__notSelectedProduct"}>
              <h3>Выберите один продукт из списка</h3>
            </div>
        }
      </div>
    </div>
  );
})

export default FoodPage;
