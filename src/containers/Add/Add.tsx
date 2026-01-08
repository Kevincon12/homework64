import React, {useState} from 'react';
import axiosApi from "../../axiosApi.ts";
import {useNavigate} from "react-router-dom";

const Add = () => {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    const sendPost = async (e: React.FormEvent) => {
        e.preventDefault();

        const postData = {
            title: title,
            description: description,
            date: new Date().toISOString()
        };

        setLoading(true);

        try {
            await axiosApi.post('/posts.json', postData);
            navigate('/');

            setTitle('');
            setDescription('');
        } catch (e) {
            console.error(e);
        } finally {
            setLoading(false);
        }

    }

    return (
        <div>
            <h2>Add new Post</h2>

            {loading && (
                <div className="text-center my-3">
                    <div className="spinner-border text-primary" role="status">
                        <span className="visually-hidden">Sending</span>
                    </div>
                </div>
            )}



            <form onSubmit={sendPost}>
                <div>
                    <label htmlFor="title" className='form-label'>Title</label>
                    <input
                        className='form-control'
                        type='text'
                        id="title"
                        placeholder="Title"
                        value={title}
                        onChange={(e: React.ChangeEvent<HTMLInputElement>) => setTitle(e.target.value)}
                        required
                    />
                </div>

                <div className="mb-3">
                    <label htmlFor="description" className='form-label'>Description</label>
                    <textarea
                        className='form-control'
                        id="description"
                        rows={5}
                        placeholder="Write something..."
                        value={description}
                        onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => setDescription(e.target.value)}
                        required
                    />
                </div>

                <button className='btn-primary' type='submit'>Save</button>
            </form>
        </div>
    );
};

export default Add;