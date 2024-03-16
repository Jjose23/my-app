import { useState } from "react";
import "./CheckoutForm.css"
// Formulario usado para tomar los datos del comprador
const CheckoutForm = ({ onConfirm }) => {
    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
    const [email, setEmail] = useState('');

    const handleConfirm = (event) => {
        event.preventDefault();

        const userData = {
            name,
            phone,
            email
        };

        onConfirm(userData);
    };

    return (
        <div className="FormContainer">
            <form onSubmit={handleConfirm} className="Form">
                <label className="Label">
                    Name
                    <input className="Input" type="text" placeholder="Enter your name" value={name} onChange={({ target }) => setName(target.value)} required/>
                </label>
                <label className="Label">
                    Phone
                    <input className="Input" type="number" placeholder="Enter your phone" value={phone} onChange={({ target }) => setPhone(target.value)} required/>
                </label>
                <label className="Label">
                    Email
                    <input className="Input" type="email" placeholder="Enter your email" value={email} onChange={({ target }) => setEmail(target.value)} required/>
                </label>
                <button type="submit" className="btn btn-info">Confirm</button>
            </form>
        </div>
    );
};

export default CheckoutForm;
