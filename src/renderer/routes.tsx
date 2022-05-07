import {Route, Switch} from "react-router";

import GeneralPage from "./pages/GeneralPage";
import NotFoundPage from "./pages/NotFoundPage";
import FoodPage from "./pages/FoodPage";
import DashesPage from "./pages/DashesPage";

const Routes = () => {
  return (
    <>
      <Switch>
        <Route path={"/"} component={GeneralPage} exact />
        <Route path={"/food"} component={FoodPage} />
        <Route path={"/dashes"} component={DashesPage} />
        <Route component={NotFoundPage} />
      </Switch>
    </>
  );
};

export default Routes;
