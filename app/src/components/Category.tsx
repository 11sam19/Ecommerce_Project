import React from 'react';
import './styles/mainstyle.css'
const Category = () => {
    return (
        <>
        <div className="main-container">
            <h4>Categories</h4>
            <p>Add Categories</p>
            <form className="add_form">
                <input type="text" name="categories" /><br />
                <input type="file" id="myFile" name="filename"/><br />
                <button>Cancle</button>
                <button>Add</button>
            </form>
        </div>
        </>
    );
}

export default Category;