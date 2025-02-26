export default function Ninja({ ninja }) {
    return (
        <div className='shadow-lg rounded-xl cursor-pointer'>
            <img src={ninja.imageurl} className='rounded-t-xl' style={{ width: '100%', height: '1000px', objectFit: 'cover' }}/>
            <div className='font-bold text-[16px] p-2'> {ninja.name} </div>
        </div>
    );
}
