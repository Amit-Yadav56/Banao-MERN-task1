import React from 'react';

const PostCard = ({ type, title, description, author, views, date, location, linkText, linkUrl }) => {
  return (
    <div className="border border-gray-300 rounded-lg overflow-hidden bg-white mb-6">
      <div className="bg-gray-100 p-4">
        <span className="font-bold">{type}</span>
      </div>
      <div className="p-6">
        <h2 className="text-lg font-semibold mb-4">{title}</h2>
        <p className="text-gray-700 mb-4">{description}</p>
        <div className="flex items-center mb-4">
          <img className="w-10 h-10 rounded-full mr-3" src={author.image} alt={author.name} />
          <span>{author.name}</span>
        </div>
      </div>
      <div className="flex justify-between items-center bg-gray-100 p-4 border-t border-gray-300">
        <span>{views} views</span>
        {date && <span>{date}</span>}
        {location && <span>{location}</span>}
        {linkText && (
          <a href={linkUrl} className="text-blue-500 hover:underline">
            {linkText}
          </a>
        )}
      </div>
    </div>
  );
};

export default PostCard;
