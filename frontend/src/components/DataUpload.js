import React, { useState } from 'react';
import axios from 'axios';
import { createTask } from '../api/tasks';

const DataUpload = () => {
    const [file, setFile] = useState(null);
    const [error, setError] = useState(null);

    const handleFileChange = (event) => {
        setFile(event.target.files[0]);
        setError(null);
    };
const handleUpload = () => {
    const formData = new FormData();
    formData.append('file', file);
    axios.post('http://localhost:8000/upload', formData)
    .then((response) => {
        console.log(response);
        const newTask = { id: response.data.id, title: 'New Task', completed: false };
        createTask(newTask).then((task)=> {
            console.log('Task created:', task);
        });
    })
    .catch((error) => {
        setError(error.message);
    });
};

return(
    <div>
        <input type="file" onChange={handleFileChange} />
        <button onClick={handleUpload}>Upload</button>
        {error && <p>{error}</p>}
    </div>
 );
};
export default DataUpload;