import React, {useState} from 'react';

const Add = () => {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');

    const sendPost = (e: React.FormEvent) => {
        e.preventDefault();
        console.log(title, description);
        setTitle('');
        setDescription('');
    }

    return (
        <div>
            <h2>Add new Post</h2>
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