import React, { useState, useEffect } from 'react';

const LazyLoader = () => {
    return (
        <div className="flex bg-white items-center justify-center h-[100vh]">
            <div className="flex flex-col items-center gap-4">
                <div className="w-12 h-12 border-8 border-blue-700 border-dotted rounded-full animate-spin border-t-transparent"></div>
                <h2 className="text-xl font-semibold text-blue-800">loading...</h2>
            </div>
        </div>
    );
};

export default LazyLoader;
