import React, {useEffect, useState} from 'react';
import axiosApi from "../../axiosApi.ts";
import {Link} from "react-router-dom";

interface PostsInterface {
    date: string;
    description: string;
    title: string;
    id: string;
}

const Home = () => {
    const [posts, setPosts] = useState<PostsInterface[]>([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const getAllPosts = async () => {
            setLoading(true);

            try {
                const response = await axiosApi.get("/posts.json");
                const responseData = response.data;


                const postsFromFirebase: PostsInterface[] = [];
                if (responseData) {
                    for (const id in responseData) {
                        postsFromFirebase.push({id, ...responseData[id]})
                    }
                }
                postsFromFirebase.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
                setPosts(postsFromFirebase);

            } catch (e) {
                console.log(e);
            } finally {
                setLoading(false);
            }
        }

        getAllPosts()
    }, []);

    return (
        <div className='container mt-2'>
            <h1 className='fw-bold'>All posts</h1>

            {loading && (
                <div className="text-center my-3">
                    <div className="spinner-border text-primary" role="status">
                        <span className="visually-hidden">Sending</span>
                    </div>
                </div>
            )}

            {posts.map((post) => (
                <div key={post.id} className='card mt-3 p-3 shadow-sm'>
                    <p>Created on: {post.date}</p>
                    <p><strong>Title:</strong> {post.title}</p>
                    <Link
                        to={`/posts/${post.id}`}
                        className='btn btn-primary btn-sm mt-2'
                        style={{ width: 'fit-content' }}
                    >Read more {'>>>>'}</Link>
                </div>
            ))}
        </div>
    );
};

export default Home;