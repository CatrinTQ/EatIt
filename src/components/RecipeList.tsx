import { recipies } from "../recipeAPI"
import { RecipeCard } from "./RecipeCard"
import "./RecipeList.css";

export const RecipeList = () => {
    return (
        <>
          <div className="oneRecipe">
      {recipies.map((recipe, index) => (
        <RecipeCard
          key={index}
          title={recipe.title}
          img={recipe.img}
          ingredients={recipe.ingredients}
          instructions={recipe.instructions}
        />
      ))}
    </div>
        </>
    )
}