export default function Ninja(props) {
    return (
        <div className="shadow-lg rounded-xl cursor-pointer">
            <img src="https://cdn3.iconfinder.com/data/icons/meteocons/512/n-a-512.png" className="rounded-t-xl"/>
            <div className="font-bold text-[16px] p-2"> {props.ninja.name} </div>
        </div>
    )
}