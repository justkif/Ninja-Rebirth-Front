export default function Ninja({ ninja }) {
    return (
        <div className='shadow-lg rounded-xl cursor-pointer'>
            <img src={ninja.imageurl} className='rounded-t-xl' style={{ width: '100%', height: 'auto', aspectRatio: '252/339' }}/>
            <div className='font-bold text-[16px] p-2'> {ninja.name} </div>
        </div>
    );
}
