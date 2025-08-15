import { FaBookmark } from "react-icons/fa";

const Blog = ({ blog, addBookmark, markedAsReadHandler}) => {
    const { title, cover, author, author_img, reading_time, posted_date, hashtags } = blog;
    return (
        <div className="mb-10">
            <img className="rounded-md" src={cover} alt={title} />
            <div className="flex justify-between my-5 items-center">
                <div className="flex gap-6">
                    <div className="w-14 h-14 overflow-hidden rounded-full">
                        <img src={author_img} className="f" alt={author} />
                    </div>
                    <div>
                        <h3 className="text-2xl">{author}</h3>
                        <p>{posted_date}</p>
                    </div>
                </div>
                <div className="flex gap-2">
                    <span>{reading_time} min read</span>
                    <button onClick={() => addBookmark(blog)}><FaBookmark></FaBookmark></button>
                </div>
            </div>
            <div className="flex flex-col gap-5">
                <h1 className="text-2xl font-bold">{title}</h1>
                <p>
                    {
                        hashtags.map((hash, idx) => <span key={idx}><a href="#">{hash} </a></span>)
                    }
                </p>
                
            </div>
            <button onClick={() => markedAsReadHandler(reading_time)} className="text-purple-500 mt-5 hover:text-purple-600">Mark As Read</button>
        </div>
    );
};

export default Blog;