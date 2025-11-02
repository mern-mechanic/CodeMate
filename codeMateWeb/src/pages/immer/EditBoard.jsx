import React from 'react';

const EditBoard = ({ boardData, setBoardData, selectedTask }) => {
    const handleTitleChange = (e) => {
        setBoardData((boardData) => {
            boardData[selectedTask.boardIndex].tasks[selectedTask.taskIndex].title = e.target.value;
        });
    };

    return (
        <div>
            <h2 className="text-2xl font-bold mt-[50px] mb-4 text-center">
                Edit Board -{' '}
                {selectedTask
                    ? `${boardData[selectedTask.boardIndex]?.name} [ ${
                          boardData[selectedTask.boardIndex]?.tasks[selectedTask.taskIndex]?.title
                      } ]`
                    : 'None Selected'}
            </h2>
            <input
                onChange={handleTitleChange}
                value={
                    selectedTask
                        ? boardData[selectedTask.boardIndex]?.tasks[selectedTask.taskIndex]?.title
                        : ''
                }
                type="text"
                placeholder="Edit Task Title"
                className="input input-bordered w-full"
            />
            <button className="btn btn-primary w-full mt-4">Save Changes</button>
        </div>
    );
};

export default EditBoard;
