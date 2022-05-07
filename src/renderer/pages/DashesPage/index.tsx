import { useContext } from "react";
import { observer } from "mobx-react-lite";

import './style.scss';

import { Context } from "../../index";
import Loader from "../../components/Loader";
import ProductsList from "../../components/ProductsList";
import DashCard from "../../components/DashCard";

const DashesPage = observer(() => {
  const {store} = useContext(Context)

  return (
    <div className={'dashesPage'}>
      {
        store.isLoading && <Loader />
      }
      <div className={'dashesPage__listBlock'}>
        <ProductsList />
        <div className={'dashesPage__listBlock_dashes'}>
          <div className={'dashesPage__listBlock_dashes_header'}>
            <h3>Список блюд</h3>
          </div>
          <div className={'dashesPage__listBlock_dashes_list'}>
            {
              store.dashesStore.viewedDashes ?
                store.dashesStore.viewedDashes.map((dash) => <DashCard _id={dash._id} name={dash.name} photoUrl={dash.photoUrl && dash.photoUrl} />)
                :
                <p className={'dashesPage__listBlock_dashes_list_empty'}>Список блюд пуст</p>
            }
          </div>
        </div>
      </div>
      {
        store.dashesStore.viewedDash ?
          <div className={'dashesPage__dashBlock'}>
            <div className={'dashesPage__dashBlock_header'}>
              <h3>{store.dashesStore.viewedDash.name}</h3>
              {
                store.dashesStore.viewedDash.photoUrl && <img src={store.dashesStore.viewedDash.photoUrl} alt={store.dashesStore.viewedDash.name} />
              }
            </div>
            <div className={'dashesPage__dashBlock_products'}>
              <h4>Состав</h4>
              {
                store.dashesStore.viewedDash.products.map((product) =>
                  <p key={product._id + '$'}>{product.name}</p>
                )
              }
            </div>
            <div className={'dashesPage__dashBlock_params'}>
              <p>Калории: {store.dashesStore.viewedDash.calories}</p>
              <p>Белки: {store.dashesStore.viewedDash.params.proteins}</p>
              <p>НЖК: {store.dashesStore.viewedDash.params.njk}</p>
              <p>Углеводы: {store.dashesStore.viewedDash.params.carbohydrates}</p>
            </div>
            <div className={'dashesPage__dashBlock_footer'}>
              {
                store.dashesStore.viewedDash.recipeUrl && <a target={'_blank'} href={store.dashesStore.viewedDash.recipeUrl}>Рецепт</a>
              }
            </div>
          </div>
          :
          <div className={'dashesPage__dashBlock'}>
            <p className={'dashesPage__dashBlock_helpText'}>Выберите блюдо для получения полной информации о нем</p>
          </div>
      }
    </div>
  );
});

export default DashesPage;
