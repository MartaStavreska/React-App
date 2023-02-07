import MealsSummary from "./MealsSummary";
import AvalibleMeals from "./AvalibleMeals";
import { Fragment } from "react";
const Meals = () => {
  return (
    <Fragment>
      <MealsSummary></MealsSummary>
      <AvalibleMeals></AvalibleMeals>
    </Fragment>
  );
};
export default Meals;
