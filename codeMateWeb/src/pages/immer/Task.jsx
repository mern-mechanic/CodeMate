import React from 'react';

const Task = ({ task, setSelectedTask, boardIndex, taskIndex }) => {
    const handleTaskClick = () => {
        setSelectedTask({ boardIndex, taskIndex });
    };

    return (
        <div onClick={handleTaskClick} key={task.id} className="card bg-base-200 p-3">
            <h3 className="font-semibold">{task.title}</h3>
            <p className="text-sm text-gray-600">{task.description}</p>

            <div className="mt-2 flex gap-2 flex-wrap">
                {task.status === 'completed' && (
                    <span className="badge badge-success">Completed</span>
                )}
                {task.status === 'pending' && <span className="badge badge-warning">Pending</span>}
                {task.status === 'in-progress' && (
                    <span className="badge badge-info">In Progress</span>
                )}

                <span className="badge badge-outline capitalize">{task.priority}</span>
            </div>
        </div>
    );
};

export default Task;
