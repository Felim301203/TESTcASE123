import axios from 'axios';
import { useState, useEffect } from 'react';
import './home.css';
import { useNavigate } from 'react-router-dom';
function Home() {
    const [data, setData] = useState([]);

    const nav = useNavigate()

    const handleClick = () => {
        nav('/add');
    }
    const updateClick = (id) => {
        nav(`/update/${id}`)
    }
    const getData = async () => {
        try {
            const response = await axios.get('https://api.insoftapp.com/api_recruit/api/get_barang', {
                headers: {
                    'Authorization': 'Bearer 496e736f66745f417369615f54656b6e6f6c6f6769'
                }
            });

            
            const responseData = response.data.data
            setData(responseData);
            console.log(responseData);
        } catch (error) {
            console.error("Error fetching data: ", error);
        }
    };

    useEffect(() => {
        getData();
    }, []);

    return (
        <>
        
        <h2>List Data Barang</h2>
        <button className='add' onClick={handleClick}>Add</button>
        <ul>
           {data.map((item) => {
             return <li key={item.id_barang}>{item.name}
             <div> 
                <button className='update' onClick={() => updateClick(item.id_barang)} >Update</button> 
                <button className='delete' >delete</button>
             </div>
             </li>
           })}
        </ul>
        </>
    );
}

export default Home;
