import React from 'react';
import Task from './Task';

const Board = ({ board, setSelectedTask, boardIndex }) => {
    return (
        <div key={board.id} className="card bg-base-100 shadow-xl">
            <div className="card-body">
                <h2 className="card-title text-primary">{board.name}</h2>
                <div className="space-y-3">
                    {board.tasks.map((task, taskIndex) => (
                        <Task
                            boardIndex={boardIndex}
                            taskIndex={taskIndex}
                            setSelectedTask={setSelectedTask}
                            key={task.id}
                            task={task}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Board;
