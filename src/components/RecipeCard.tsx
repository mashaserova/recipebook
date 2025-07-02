import React from 'react';
import type { Recipe } from '../types/types';

interface RecipeCardProps {
    recipe: Recipe;
}

const RecipeCard: React.FC<RecipeCardProps> = ({ recipe }) => {
    return (
        <div className="border rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
            <img src={recipe.image} alt={recipe.title} className="w-full h-48 object-cover" />
            <div className="p-4">
                <h3 className="text-xl font-bold mb-2">{recipe.title}</h3>
                <p
                    className="text-gray-600"
                    dangerouslySetInnerHTML={{ __html: recipe.summary.substring(0, 100) + '...' }}
                />
            </div>
        </div>
    );
};
export default RecipeCard;
