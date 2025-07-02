import React, { useState, useEffect } from 'react';
import SearchBar from '../components/SearchBar';
import RecipeCard from '../components/RecipeCard';
import { type RecipeList } from '../types/types';

export const Home: React.FC = () => {
    const [recipes, setRecipes] = useState<RecipeList>([]);
    const [searchTerm, setSearchTerm] = useState<string>('');
    const [loading, setLoading] = useState<boolean>(true);
    const [page, setPage] = useState<number>(1);

    useEffect(() => {
        const mockRecipes: RecipeList = [
            {
                id: 1,
                title: 'Паста Карбонара',
                image: 'https://example.com/pasta.jpg',
                summary: 'Классическая итальянская паста с беконом, яйцами и сыром.',
            },
            {
                id: 2,
                title: 'Салат Цезарь',
                image: 'https://example.com/caesar.jpg',
                summary: 'Свежий салат с курицей, сухариками и соусом Цезарь.',
            },
        ];

        setRecipes(mockRecipes);
        setLoading(false);
    }, []);

    const filteredRecipes = recipes.filter((recipe) =>
        recipe.title.toLowerCase().includes(searchTerm.toLowerCase())
    );

    const loadMore = () => {
        setPage((prev) => prev + 1);
    };

    return (
        <div className="container mx-auto px-4 py-8">
            <h1 className="text-3xl font-bold mb-8">Рецепты</h1>

            <SearchBar searchTerm={searchTerm} onSearchChange={setSearchTerm} />

            {loading ? (
                <p>Загрузка...</p>
            ) : (
                <>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {filteredRecipes.map((recipe) => (
                            <RecipeCard key={recipe.id} recipe={recipe} />
                        ))}
                    </div>

                    {filteredRecipes.length > 0 && (
                        <button
                            onClick={loadMore}
                            className="mt-8 px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
                        >
                            {page} Загрузить еще
                        </button>
                    )}
                </>
            )}
        </div>
    );
};

export default Home;
