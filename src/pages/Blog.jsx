import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { blog_data, comments_data } from '../assets/assets';
import Navbar from '../components/Navbar';
import { assets } from '../assets/assets';
import Moment from 'moment';
import Footer from '../components/Footer';
import Loader from '../components/Loader';

const Blog = () => {
  const { id } = useParams();
  const [data, setData] = useState(null);
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState('');
  const [newName, setNewName] = useState('');

  const fetchBlogData = async () => {
    const blog = blog_data.find((item) => item._id === id);
    setData(blog);
  };

  const fetchComments = async () => {
    setComments(comments_data);
  };

  const handleCommentSubmit = () => {
    if (newComment.trim() === '') return;

    const newEntry = {
      name: newName || 'Anonymous',
      content: newComment,
      createdAt: new Date(),
    };

    setComments([...comments, newEntry]);
    setNewComment('');
    setNewName('');
  };

  useEffect(() => {
    fetchBlogData();
    fetchComments();
  }, []);

  return data ? (
    <div className='relative'>
      {/* Background Gradient */}
      <img
        src={assets.gradientbackground}
        alt=''
        className='absolute -top-20 -z-10 opacity-50 w-full'
      />

      {/* Navbar */}
      <Navbar />

      {/* Blog Meta */}
      <div className='text-center mt-20 text-gray-600'>
        <p className='text-primary py-4 font-medium'>
          Published On {Moment(data.createdAt).format('MMMM Do YYYY, h:mm:ss a')}
        </p>

        <h1 className='text-2xl sm:text-5xl font-semibold max-w-2xl mx-auto text-gray-800'>
          {data.title}
        </h1>

        {/* Subtitle rendered as HTML */}
        <h2
          className='my-5 max-w-lg mx-auto text-gray-700'
          dangerouslySetInnerHTML={{ __html: data.subTitle }}
        />

        <div className='flex justify-center mb-6'>
          <p className='py-1 px-4 rounded-full border text-sm border-primary/35 bg-primary/5 font-medium text-primary'>
            Micheal Brown
          </p>
        </div>
      </div>

      {/* Blog Content */}
      <div className='max-w-3xl mx-5 md:mx-auto my-10'>
        <img
          src={data.image}
          alt=''
          className='w-full max-w-3xl rounded-3xl mb-5 mx-auto'
        />

        <div
          className='rich-text'
          dangerouslySetInnerHTML={{ __html: data.description }}
        />

        {/* Comments Section */}
        <div className='mt-14 mb-20'>
          <p className='font-semibold text-gray-700 mb-3'>
            Comments ({comments.length})
          </p>

          {/* All Comments */}
          <div className='flex flex-col gap-5 mb-10'>
            {comments.map((item, index) => (
              <div
                key={index}
                className='relative bg-primary/5 border border-primary/10 max-w-xl rounded text-gray-600 p-4'
              >
                <div className='flex items-center gap-2 mb-2'>
                  <img src={assets.user_icon} alt='' className='w-6' />
                  <p className='font-medium'>{item.name}</p>
                </div>

                <p className='text-sm ml-8 pb-6'>{item.content}</p>

                <div className='absolute right-4 bottom-3 text-xs text-gray-500'>
                  {Moment(item.createdAt).fromNow()}
                </div>
              </div>
            ))}
          </div>

          {/* New Comment Box */}
          <div className='bg-primary/5 border border-primary/10 p-5 rounded max-w-xl'>
            <p className='font-semibold mb-3'>Leave a Comment</p>

            <input
              type='text'
              placeholder='Your name'
              className='w-full mb-3 px-3 py-2 border rounded outline-none text-sm'
              value={newName}
              onChange={(e) => setNewName(e.target.value)}
            />

            <textarea
              placeholder='Write your comment...'
              className='w-full mb-3 px-3 py-2 border rounded outline-none text-sm resize-none'
              rows='4'
              value={newComment}
              onChange={(e) => setNewComment(e.target.value)}
            ></textarea>

            <button
              className='bg-primary text-white px-4 py-2 rounded text-sm hover:bg-primary/90'
              onClick={handleCommentSubmit}
            >
              Submit
            </button>
          </div>
        </div>

        {/* Social Share Section */}
        <div className='my-24 max-w-3xl mx-auto'>
          <p className='font-semibold my-4'>Share this Article on Social Media</p>

          <div className='flex gap-4'>
            {/* Facebook */}
            <a
              href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
                window.location.href
              )}`}
              target='_blank'
              rel='noopener noreferrer'
            >
              <img src={assets.facebook_icon} alt='Facebook' width={50} />
            </a>

            {/* Twitter */}
            <a
              href={`https://twitter.com/intent/tweet?url=${encodeURIComponent(
                window.location.href
              )}&text=${encodeURIComponent(data.title)}`}
              target='_blank'
              rel='noopener noreferrer'
            >
              <img src={assets.twitter_icon} alt='Twitter' width={50} />
            </a>

            {/* LinkedIn (using Google Plus icon for now) */}
            <a
              href={`https://www.linkedin.com/shareArticle?mini=true&url=${encodeURIComponent(
                window.location.href
              )}&title=${encodeURIComponent(data.title)}`}
              target='_blank'
              rel='noopener noreferrer'
            >
              <img src={assets.googleplus_icon} alt='LinkedIn' width={50} />
            </a>
          </div>
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  ) : (
    <Loader />  
  );
};

export default Blog;
