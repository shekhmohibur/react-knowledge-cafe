import profile from '../../assets/images/profile.png'
const Header = () => {
    return (
        <div>
            <div className='flex justify-between container mx-auto items-center'>
                <h1 className="text-3xl font-bold">Knowledge Cafe</h1>
                <img src={profile} alt="Profile" />
            </div>
            <hr />
        </div>
        
    );
};

export default Header;