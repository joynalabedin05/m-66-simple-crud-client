import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Update = () => {
    const loadedUser = useLoaderData();
    const handleUpdate = (event)=>{
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const updatedUser = {name, email};
        console.log(updatedUser);
        fetch(`http://localhost:5000/users/${loadedUser._id}`, {
            method: 'PUT',
            headers:{
                'content-type': 'application/json'
              },
            body: JSON.stringify(updatedUser)  
        })
        .then(res=>res.json())
        .then(data=>{
            console.log(data);
            if(data.modifiedCount>0){
                alert('data updated succefully');
            }
        })
    }
    return (
        <div>
           <h2>update: {loadedUser.name}</h2> 
           <form onSubmit={handleUpdate}>
            <input type="text" name="name" defaultValue={loadedUser?.name} id="" /> <br />
            <input type="email" name="email" defaultValue={loadedUser?.email} id="" /> <br />
            <input type="submit" value="update" />
           </form>
        </div>
    );
};

export default Update;