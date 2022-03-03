import {useContext} from "react";

import "./style.scss"

import {Context} from "../../index";

const GeneralPage = () => {
  const {store} = useContext(Context)


  return (
    <div className={"generalPage"}>
      <div className={"settingsBlock"}>
        <div className={"settingsBlock__productsList"}>
          <div className={"settingsBlock__productsList_header"}>
            <h3>Список продуктов</h3>
          </div>
          <div className={"settingsBlock__productsList_list"}>
            {
              store.productsStore.products.map((product) => {
                return (
                  <button key={product.name}>{product.name}</button>
                )
              })
            }
          </div>
        </div>
        <div className={"settingsBlock__paramsList"}>
          <div className={"settingsBlock__paramsList_header"}>
            <h3>Параметры подбора</h3>
          </div>
        </div>
      </div>
      <div className={"resultBlock"}>
        <div className={"resultBlock__header"}>
          <h3>Результат</h3>
        </div>
      </div>
    </div>
  );
};

export default GeneralPage;
