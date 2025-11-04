import React from 'react';

const IngredientList = ({ ingredients, deleteIngredient }) => {
    console.log('Rendering Ingredients List component');
    return (
        <div className="w-full max-w-md bg-white rounded-2xl shadow-md p-4 mb-6">
            {ingredients.length === 0 ? (
                <p className="text-gray-500 text-center">No ingredients added yet.</p>
            ) : (
                <ul className="space-y-2">
                    {ingredients.map((item, index) => (
                        <li
                            key={index}
                            className="flex justify-between items-center bg-gray-50 px-3 py-2 rounded-lg"
                        >
                            <span>{item}</span>
                            <button
                                onClick={() => deleteIngredient(index)}
                                className="text-red-500 hover:text-red-700 text-sm font-medium"
                            >
                                ✕
                            </button>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default React.memo(IngredientList);
