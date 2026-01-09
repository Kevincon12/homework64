import React, {useEffect, useState} from 'react';
import {Link, useNavigate, useParams} from "react-router-dom";
import axiosApi from "../../axiosApi.ts";

interface PostsInterface {
    date: string;
    description: string;
    title: string;
    id: string;
}

const PostReadMore = () => {
    const {id} = useParams<{id: string}>();
    const [loading, setLoading] = useState(false);
    const [post, setPost] = useState<PostsInterface | null>(null);

    const navigate = useNavigate();

    const deletePost = async () => {
        setLoading(true);

        try {
            await axiosApi.delete(`/posts/${id}.json`);
            navigate('/');
        } catch (e) {
            console.log(e);
        } finally {
            setLoading(false);
        }
    }

    useEffect(() => {
        const getCurrentPost = async () => {
            setLoading(true);

            try {
                const response = await axiosApi.get(`/posts/${id}.json`);
                setPost({ id, ...response.data });
            } catch (e) {
                console.error(e);
            } finally {
                setLoading(false);
            }
        }

        getCurrentPost();

    }, [id]);

    return (
        <div>
            {loading && (
                <div className="text-center my-3">
                    <div className="spinner-border text-primary" role="status">
                        <span className="visually-hidden">Sending</span>
                    </div>
                </div>
            )}

            {post && (
                <div className="card p-4 mt-3 shadow-sm">
                    <h1 className="card-title mb-3">Post Info</h1>
                    <h3 className="mb-2">{post.title}</h3>
                    <p className="mb-3">{post.description}</p>
                    <p className="text-muted">{new Date(post.date).toLocaleString()}</p>

                    <div className="d-flex gap-2 mt-3">
                        <button
                            className="btn btn-warning"
                            onClick={deletePost}
                        >Delete post</button>
                        <Link
                            to={`/posts/${post.id}/edit`}
                            className="btn btn-secondary"
                        >Edit post</Link>
                    </div>
                </div>
            )}
        </div>
    );
};

export default PostReadMore;