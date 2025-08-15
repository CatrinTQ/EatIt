import { Link } from "react-router-dom";
import { recipies } from "../recipeAPI";
import "./RecipePage.scss";

export const RecipePage = () => {
  return (
    <div className="recipe-page">
      <div className="recipe-row">
        <span>Recept</span>
        <input type="text" />
        <span>Sök</span>
      </div>

      <div className="recipe-grid">
        
        {recipies.map((recipe, index) => (
          <Link to={"/recipe/" + recipe.description}><div key={index} className="recipe-card">
            <div className="recipe-image">
              <img src={recipe.img} alt={recipe.title} />
            </div>
            <p>{recipe.title}</p>
          </div>
          </Link>
        ))}
      </div>
    </div>
  );
};
