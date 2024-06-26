import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import './add.css';

function Add() {
    const [id, setIdCategory] = useState(0);
    const [name, setName] = useState('');
    const [price, setPrice] = useState(0);
    const [unit, setUnit] = useState('');

    const nav = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post(
                "https://api.insoftapp.com/api_recruit/api/create",
                '',
                {
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': 'Bearer 496e736f66745f417369615f54656b6e6f6c6f6769',
                        'id_category': id,
                        'name': name,
                       'price': price,
                        'unit': unit

                    }
                }
            );

            if (response.status === 200) {
                nav('/');
            }
        } catch (error) {
            console.log(error.message);
        }
    };

    return (
        <div className="form">
            <form onSubmit={handleSubmit}>
                <h2>Tambah Barang</h2>
                
                <div className="form-child">
                    <label>ID Category:</label>
                    <input type="number" value={id} onChange={(e) => setIdCategory(parseInt(e.target.value))} />
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

export default Add;
