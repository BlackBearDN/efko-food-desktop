import {useContext} from "react";
import { observer } from "mobx-react-lite";
import { Link } from "react-router-dom";

import "./style.scss"

import {Context} from "../../index";
import Loader from "../../components/Loader";
import ProductsList from "../../components/ProductsList";

const GeneralPage = observer(() => {
  const {store} = useContext(Context)

  const categories = [
    {
      name: 'milk',
      viewedName: 'Молочная продукция'
    },
    {
      name: 'meat',
      viewedName: 'Мясо'
    }
  ]

  return (
    <div className={"generalPage"}>
      {
        store.isLoading && <Loader />
      }
      <div className={"settingsBlock"}>
        <ProductsList />
        <div className={"settingsBlock__paramsList"}>
          <div className={"settingsBlock__paramsList_header"}>
            <h3>Параметры подбора</h3>
          </div>
          <div className={"settingsBlock__paramsList_mainParams"}>
            <div>
              <h3>Основной параметр: </h3>
              <button
                onClick={() => store.cartStore.ceilParam = 'price'}
                className={store.cartStore.ceilParam === 'price' ? 'activeCeilParamButton' : ''}
              >Стоимость</button>
              <button
                onClick={() => store.cartStore.ceilParam = 'calories'}
                className={store.cartStore.ceilParam === 'calories' ? 'activeCeilParamButton' : ''}
              >Калории</button>
              <button
                onClick={() => store.cartStore.ceilParam = 'weight'}
                className={store.cartStore.ceilParam === 'weight' ? 'activeCeilParamButton' : ''}
              >Вес</button>
            </div>
            <div>
              <h3>Основной параметр необходимо: </h3>
              <button
                onClick={() => store.cartStore.ceilFunc = 'min'}
                className={store.cartStore.ceilFunc === 'min' ? 'activeCeilFuncButton' : ''}
              >Минимизировать</button>
              <button
                onClick={() => store.cartStore.ceilFunc = 'max'}
                className={store.cartStore.ceilFunc === 'max' ? 'activeCeilFuncButton' : ''}
              >Максимизировать</button>
            </div>
            <div>
              <h3>Пол:</h3>
              <button
                className={store.userStore.userInfo.gender === 'male' ? 'activeGenderButton' : ''}
                onClick={() => store.userStore.userInfo.gender = 'male'}
              >Мужской</button>
              <button
                className={store.userStore.userInfo.gender === 'female' ? 'activeGenderButton' : ''}
                onClick={() => store.userStore.userInfo.gender = 'female'}
              >Женский</button>
            </div>
            <div>
              <h3>Возраст:</h3>
              <input
                onChange={(e) => store.userStore.userInfo.age = Number(e.currentTarget.value)}
                value={store.userStore.userInfo.age}
                min={0}
                type="number"
              />
              <h4>(полных лет)</h4>
            </div>
            <div>
              <h3>Вес:</h3>
              <input
                onChange={(e) => store.userStore.userInfo.weight = Number(e.currentTarget.value)}
                value={store.userStore.userInfo.weight}
                min={0}
                type="number"
              />
              <h4>(кг.)</h4>
            </div>
            <div>
              <h3>Активность:</h3>
              <button
                className={store.userStore.userInfo.lifestyle === 'low' ? 'activeGenderButton' : ''}
                onClick={() => store.userStore.userInfo.lifestyle = 'low'}
              >Низкая</button>
              <button
                className={store.userStore.userInfo.lifestyle === 'average' ? 'activeGenderButton' : ''}
                onClick={() => store.userStore.userInfo.lifestyle = 'average'}
              >Средняя</button>
              <button
                className={store.userStore.userInfo.lifestyle === 'high' ? 'activeGenderButton' : ''}
                onClick={() => store.userStore.userInfo.lifestyle = 'high'}
              >Высокая</button>
            </div>
          </div>
          <div className={"settingsBlock__paramsList_groupsSection"}>
            <h3>Группы продуктов</h3>
            <div className={"settingsBlock__paramsList_groupsSection_groups"}>
              {
                categories.map((category) =>
                  store.productsStore.viewedCategories.includes(category.name) ?
                    <button className={"activeGroupButton"} onClick={() => store.productsStore.removeViewedCategory(category.name)}>{category.viewedName}</button>
                    :
                    <button onClick={() => store.productsStore.addViewedCategory(category.name)}>{category.viewedName}</button>
                )
              }
            </div>
            {
              store.productsStore.viewedCategories.length !== 0 &&
              <button className={"settingsBlock__paramsList_groupsSection_viewAllButton"} onClick={() => store.productsStore.viewAllProducts()}><i className="fas fa-times" /></button>
            }
          </div>
          <div className={"settingsBlock__paramsList_footer"}>
            <button className={"settingsBlock__paramsList_footer_generateCartButton"} onClick={() => store.cartStore.generateCart()}>Сформировать корзину</button>
          </div>
        </div>
      </div>
      <div className={"resultBlock"}>
        <div className={"resultBlock__header"}>
          <h3>Результат</h3>
        </div>
        <div className={"resultBlock__content"}>
          {
            store.cartStore.cartResult ?
              <>
                {
                  store.cartStore.cartResult.productsInfo.map(productInfo => {
                    return (
                      <div className={"resultBlock__content_productInfo"}>
                        <h3>{productInfo.name}</h3>
                        <p>Кол-во: {productInfo.value.toFixed(3)} гр.</p>
                        <span>Цена за позицию: {productInfo.resultPrice.toFixed(2)} р.</span>
                        <details>
                          <summary>Питательные вещества</summary>
                          <p>Белки: {productInfo.resultParams.proteins.toFixed(3)}</p>
                          <p>НЖК: {productInfo.resultParams.njk.toFixed(3)}</p>
                          <p>Углеводы: {productInfo.resultParams.carbohydrates.toFixed(3)}</p>
                          <p>Калории: {productInfo.resultParams.calories.toFixed(3)}</p>
                        </details>
                      </div>
                    )
                  })
                }
              </>
              :
              <h4 className={"resultBlock__content_helpText"}>Выберите продукты из списка и нажмите "Сформировать корзину"</h4>
          }
        </div>
        <div className={"resultBlock__paramsSection"}>
          {
            store.cartStore.cartResult &&
              <>
                <h3>Итоги питательных веществ</h3>
                <div className={"resultBlock__paramsSection_params"}>
                  <p>Белки: {store.cartStore.cartResult.resultParams.proteins.toFixed(3)}</p>
                  <p>НЖК: {store.cartStore.cartResult.resultParams.njk.toFixed(3)}</p>
                  <p>Углеводы: {store.cartStore.cartResult.resultParams.carbohydrates.toFixed(3)}</p>
                  <p>Калории: {store.cartStore.cartResult.resultParams.calories.toFixed(3)}</p>
                </div>
              </>
          }
        </div>
        {
          store.cartStore.cartResult &&
          <div className={"resultBlock__footer"}>
            <Link to={'/dashes'} className={"resultBlock__footer_generateDashesButton"}>Подобрать блюда</Link>
            <h4>Итоговая цена: {store.cartStore.cartResult.allPrice.toFixed(2)} р.</h4>
          </div>
        }
      </div>
    </div>
  );
});

export default GeneralPage;
