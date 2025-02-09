import React, { useState } from 'react';
import axios from 'axios';
import { createTask } from '../api/tasks';


interface TaskProps {
    id: number;
    title: string;
    completed: boolean;
}


const DataUpload: React.FC <TaskProps> = () => {
    const [file, setFile] = useState<File | null>(null);
    const [error, setError] = useState<string | null>(null);

    const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        if (event.target.files && event.target.files.length > 0) {
            setFile(event.target.files[0]);
        } else {
            setFile(null);
        }
        setError(null);
    };
const handleUpload = () => {
    const formData = new FormData();
    if (file) {
        formData.append('file', file);
    } else {
        setError('No file selected');
        return;
    }
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