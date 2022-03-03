import {Route, Switch} from "react-router";

import GeneralPage from "./pages/GeneralPage";
import NotFoundPage from "./pages/NotFoundPage";
import FoodPage from "./pages/FoodPage";

const Routes = () => {
  return (
    <>
      <Switch>
        <Route path={"/"} component={GeneralPage} exact />
        <Route path={"/food"} component={FoodPage} />
        <Route component={NotFoundPage} />
      </Switch>
    </>
  );
};

export default Routes;
