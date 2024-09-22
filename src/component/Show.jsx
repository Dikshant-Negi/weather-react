import { useContext} from 'react';
import DataContext from './DataContext';
import './style.css'
function Show() {
    const data = useContext(DataContext);
    // const [condition,setcondition]=useState("")
    if (!data) {
        return <p>Loading...</p>;
    }

    return (
        <div >
            <ul >
                <li className='show-container' key="temp">
                    <span className='item1'>{data.location.name}</span>
                    <div className="item2">
                        <img className='weather-icon'src={data.current.condition.icon} alt="" />
                        <div className="temperature-info">
                            <span >{data.current.condition.text}</span>
                        </div>
                    </div>
                    <span className='item1'>Temperature: {data.current.temp_c}°C</span>
                </li>
            </ul>
        </div>
    );
}

export default Show;
