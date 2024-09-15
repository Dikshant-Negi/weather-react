import { useContext } from 'react';
import DataContext from './DataContext';

function Show() {
    const data = useContext(DataContext);

    if (!data) {
        return <p>Loading...</p>;
    }

    return (
        <div>
            <ul>
                <li key="temp">
                    <span>Temperature: {data.current.temp_c}°C</span>
                    <span>Location: {data.location.country}</span>
                </li>
            </ul>
        </div>
    );
}

export default Show;
