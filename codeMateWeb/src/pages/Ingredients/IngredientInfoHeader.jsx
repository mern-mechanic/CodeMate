import React, { useState } from 'react';

const IngredientInfoHeader = ({ ingredients }) => {
    console.log('Rendering Ingredients Headers component');
    return (
        <>
            <header className="w-full max-w-md bg-white shadow-md rounded-2xl p-4 mb-6 flex justify-between items-center">
                <h1 className="text-xl font-semibold">🧂 Ingredients List</h1>
                <span className="text-sm text-gray-500">Total: {ingredients.length}</span>
            </header>
        </>
    );
};

export default React.memo(IngredientInfoHeader);
