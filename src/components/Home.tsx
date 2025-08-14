import { useEffect, useState } from "react";

interface IRecipe {
    idMeal: number;
    strMeal: string;
    strInstructions: string;
}


export const Home = () => {
    const [hasFetched, setHasFetched] = useState(false);
    const [recipes, setRecipes] = useState<IRecipe[]>([]);

    useEffect(() => {
        const getData = async () => {
            try {
                const response = await fetch('www.themealdb.com/api/json/v1/1/search.php?f=a');
                const data = await response.json(); 
                setRecipes(data);
            } catch (error) {
                console.error('Error fetching repos', error);
            } finally {
                setHasFetched(true);
            }
        };

        if (!hasFetched) {
            getData();
        }
    }, [hasFetched]);

    return <> <section>
        {recipes.map(recipe => (
            <p key={recipe.idMeal}>{recipe.strMeal}</p>
        ))}
    </section>
    </>
}