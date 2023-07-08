import React, { useState } from "react";
import './form.css'

const Form = () => {
    const [fullName, setFullName] = useState({
        fname: '',
        lname: '',
        email: '',
        phone: '',
        password: '',
        hot: ""
    });

    const inputEventt = (event) => {
        console.log(event.target.value);
        // setFullName(event.target.name);

        // const value = event.target.value;
        // const name = event.target.name;
        const { value, name } = event.target;//forarray destructuring;
        setFullName((preValue) => {
            if (name === 'fname') {
                return {
                    fname: value,
                    lname: preValue.lname,
                    email: preValue.email,
                    phone: preValue.phone,
                    password: preValue.password,
                    hot: preValue.hot,
                };

            } else if (name === 'lname') {
                return {
                    fname: preValue.fname,
                    lname: value,
                    email: preValue.email,
                    phone: preValue.phone,
                    password: preValue.password,
                    hot: preValue.hot,
                };

            } else if (name === 'email') {
                return {
                    fname: preValue.fname,
                    lname: preValue.lname,
                    email: value,
                    phone: preValue.phone,
                    password: preValue.password,
                    hot: preValue.hot,
                };

            } else if (name === 'phone') {
                return {
                    fname: preValue.fname,
                    lname: preValue.lname,
                    email: preValue.email,
                    phone: value,
                    password: preValue.password,
                    hot: preValue.hot,
                };
            } else if (name === 'password') {
                return {
                    fname: preValue.fname,
                    lname: preValue.lname,
                    email: preValue.email,
                    phone: preValue.phone,
                    password: value,
                    hot: preValue.hot,

                }
            }
        }

        )
    }


    const onSubmits = (event) => {
        event.preventDefault();// for form default me refresh na ho
        alert("form submitted");
        // setFullName("");

    }

    return (<>
        <div className="container">
            <form onSubmit={onSubmits}>
                <div className="heading">
                    <h2>Hello</h2>

                    <h1>  {fullName.fname}  {fullName.lname} {fullName.email} {fullName.phone}  {fullName.password} {fullName.hot}</h1></div>
                <div className="container2">
                    <div className="firstcontainer">
                        <label htmlFor="vessel" >Name(s)<span>*</span></label>
                        <input type="text" placeholder="Enter your name" onChange={inputEventt} value={fullName.fname} name='fname' required />
                        <label htmlFor="quantity" >LastName<span>*</span></label>
                        <input type="text" placeholder="Enter your last name" onChange={inputEventt} value={fullName.lname} name='lname' required />

                    </div>

                    <div className="secondcontainer">
                        <label htmlFor="offer" >Email...<span>*</span></label>
                        <input type="email" placeholder=" Enter  your email" onChange={inputEventt} value={fullName.email} name='email' required />
                        <label htmlFor="offer" className="phone">               Phone<span>*</span></label>
                        <input type="phone" placeholder="Enter your phone number" onChange={inputEventt} value={fullName.phone} name='phone' required />

                    </div>

                    <div className="thirdcontainer">
                        <label htmlFor="offer" >Password<span>*</span></label>
                        <input type="number" className="pass" placeholder="Enter your password" onChange={inputEventt} value={fullName.password} name='password' required />

                    </div>
                </div>
                {/* <button onClick={onSubmits}> Submit </button>// */}
                <button type="submit" > Submit Me </button>
                {/* </div> */}
            </form>
        </div>

    </>
    );
}

export default Form;
