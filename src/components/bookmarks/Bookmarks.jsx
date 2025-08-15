import Bookmark from "../bookmark/bookmark";
const Bookmarks = ({ bookmarks, readingTime}) => {
    return (
        <div className="md:w-1/3 p-5">
            <h2 className="text-indigo-700 font-semibold text-center p-5 mb-3 bg-indigo-100 rounded-md">Spent time on read: {readingTime} min</h2>
            <div className="bg-gray-200 rounded-md">
                
                <h2 className="text-center font-semibold py-5">Bookmarked Blogs: {bookmarks.length}</h2>
                {
                    bookmarks.map(bookmark => <Bookmark key={bookmark.id} bookmark={bookmark}></Bookmark>)
                }
                <br />
            </div>

        </div>
    );
};

export default Bookmarks;