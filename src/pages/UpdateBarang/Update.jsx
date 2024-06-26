import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function Update() {
    const [idCategory, setIdCategory] = useState(0);
    const [name, setName] = useState('');
    const [price, setPrice] = useState(0);
    const [unit, setUnit] = useState('');

    const { idBarang } = useParams();

    const getDataById = async (id) => {
        try {
            const response = await axios.get('https://api.insoftapp.com/api_recruit/api/find_barang', {
                headers: {
                    'Authorization': 'Bearer 496e736f66745f417369615f54656b6f6c6f6769',
                    'id_barang': id
                }
            });

            if (response.status === 200) {
                const data = response.data;
                setIdCategory(data.id_category);
                setName(data.name);
                setPrice(data.price);
                setUnit(data.unit);
            }
        } catch (error) {
            console.log(error.message);
        }
    };

    useEffect(() => {
        if (idBarang) {
            getDataById(parseInt(idBarang));
        }
    }, [idBarang]);

    return (
        <div className="form">
            <form>
                <h2>Edit Barang</h2>
                
                <div className="form-child">
                    <label>ID Category:</label>
                    <input type="number" value={idCategory} onChange={(e) => setIdCategory(parseInt(e.target.value))} />
                </div>
                <div className="form-child">
                    <label>Name:</label>
                    <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
                </div>
                <div className="form-child">
                    <label>Price:</label>
                    <input type="number" value={price} onChange={(e) => setPrice(parseFloat(e.target.value))} />
                </div>
                <div className="form-child">
                    <label>Unit:</label>
                    <input type="text" value={unit} onChange={(e) => setUnit(e.target.value)} />
                </div>
                
                <button type="submit">Add</button>
            </form>
        </div>
    );
}
