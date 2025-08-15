import { recipies } from "../recipeAPI"
import { RecipeCard } from "./RecipeCard"

export const RecipeList = () => {
    return (
        <>
          <div>
      {recipies.map((recipe, index) => (
        <RecipeCard
          key={index}
          title={recipe.title}
          img={recipe.img}
          instructions={recipe.instructions}
        />
      ))}
    </div>
        </>
    )
}