import React, {useEffect, useState} from 'react';
import {useNavigate, useParams} from "react-router-dom";
import axiosApi from "../../axiosApi.ts";

const Editpost = () => {
    const {id} = useParams<{id: string}>();
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        const getPostForEditPage = async () => {
            const response = await axiosApi.get(`/posts/${id}.json`);
            setTitle(response.data.title);
            setDescription(response.data.description);
        }
        getPostForEditPage();
    }, [id]);

    const saveChanges = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
            setLoading(true);

            await axiosApi.put(`/posts/${id}.json`, {
                title: title,
                description: description,
                date: new Date().toISOString(),
            });
            navigate("/");
        } catch (e) {
            console.error(e);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div>
            <h1>Edit post</h1>

            {loading && (
                <div className="text-center my-3">
                    <div className="spinner-border text-primary" role="status">
                        <span className="visually-hidden">Sending</span>
                    </div>
                </div>
            )}

            <form onSubmit={saveChanges}>
                <div>
                    <label htmlFor="title" className='form-label'>Title</label>
                    <input
                        type="text"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        id='title'
                        className='form-control'
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

export default Editpost;