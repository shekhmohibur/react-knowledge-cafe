const bookmark = ({bookmark}) => {
    const {title} = bookmark;
    return (
        <div>
            <a className="bg-white px-2 py-3 mx-5 block mb-3 rounded-md hover:bg-slate-200 transition" href="#">{title}</a>
        </div>
    );
};

export default bookmark;