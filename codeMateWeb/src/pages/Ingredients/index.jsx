import React, { memo, useCallback, useState } from 'react';
import IngredientList from './IngredientList';
import IngredientInfoHeader from './IngredientInfoHeader';
import AddIngredient from './AddIngredient';

const Ingredients = () => {
    console.log('Rendering Ingredients Index component');
    const [ingredients, setIngredients] = useState(['Tomato', 'Onion', 'Garlic']);

    const addIngredient = useCallback(
        (newIngredient) => {
            if (newIngredient.trim() !== '') {
                setIngredients([...ingredients, newIngredient.trim()]);
            }
        },
        [ingredients]
    );

    const deleteIngredient = useCallback(
        (indexToDelete) => {
            setIngredients(ingredients.filter((_, index) => index !== indexToDelete));
        },
        [ingredients]
    );

    return (
        <div className="min-h-screen bg-gray-100 flex flex-col items-center p-6">
            <IngredientInfoHeader ingredients={ingredients} />
            <IngredientList ingredients={ingredients} deleteIngredient={deleteIngredient} />
            <AddIngredient addIngredient={addIngredient} />
        </div>
    );
};

export default Ingredients;
