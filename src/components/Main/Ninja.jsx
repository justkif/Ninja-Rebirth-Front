export default function Ninja({ ninja }) {
    return (
        <div className="shadow-lg rounded-xl cursor-pointer">
            <img src="https://img.lazcdn.com/g/p/17b05fb99ddb3ca4bf9b1fbddbde0f06.jpg_720x720q80.jpg_.webp" className="rounded-t-xl"/>
            <div className="font-bold text-[16px] p-2"> {ninja.name} </div>
        </div>
    );
}
