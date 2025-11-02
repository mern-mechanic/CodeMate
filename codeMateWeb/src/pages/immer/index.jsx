import React from 'react';
import { mockBoards } from './mockData';
import Board from './Board';
import EditBoard from './EditBoard';
import { useImmer } from 'use-immer';
import { Link } from 'react-router-dom';

const Immer = () => {
    const [boardData, setBoardData] = useImmer(mockBoards);
    const [selectedTask, setSelectedTask] = React.useState();

    return (
        <div className="bg-base-200 min-h-screen p-6">
            <Link to="/chart" className="btn btn-ghost mb-4">
                Go to Chart
            </Link>
            <h1 className="text-3xl font-bold mb-6 text-center text-primary">My Todo Boards</h1>

            <div className="grid gap-6 md:grid-cols-3">
                {boardData.map((board, boardIndex) => (
                    <Board
                        boardIndex={boardIndex}
                        setSelectedTask={setSelectedTask}
                        key={board.id}
                        board={board}
                    />
                ))}
            </div>

            <EditBoard
                boardData={boardData}
                setBoardData={setBoardData}
                selectedTask={selectedTask}
                setSelectedTask={setSelectedTask}
            />
        </div>
    );
};

export default Immer;
