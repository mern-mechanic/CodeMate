import React, { memo, useState } from 'react';

const AddIngredient = ({ addIngredient }) => {
    const [newIngredient, setNewIngredient] = useState('');

    console.log('Rendering Add Ingredients component');
    return (
        <div className="w-full max-w-md bg-white rounded-2xl shadow-md p-4 flex gap-3">
            <input
                type="text"
                placeholder="Add new ingredient..."
                value={newIngredient}
                onChange={(e) => setNewIngredient(e.target.value)}
                className="flex-1 border rounded-lg p-2 outline-none focus:ring focus:ring-blue-200"
            />
            <button
                onClick={() => addIngredient(newIngredient)}
                className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700"
            >
                Add
            </button>
        </div>
    );
};

export default memo(AddIngredient);
