// RecipeDetail.tsx
import { useParams } from "react-router-dom";
import { recipies } from "../recipeAPI";
import { RecipeCard } from "./RecipeCard";
import "./OneRecipe.scss";
import { Link } from "react-router-dom";

export const OneRecipe = () => {
  const { id } = useParams();
  const index = Number(id);
  const recipe = recipies[index];

  return (
    <div className="one-recipe">
    <Link to="/" className="back-link" aria-label="Tillbaka">← Tillbaka</Link>

      <RecipeCard
        title={recipe.title}
        description={recipe.description}
        img={recipe.img}
        ingredients={recipe.ingredients}
        instructions={recipe.instructions}
      />
    </div>
  );
};
