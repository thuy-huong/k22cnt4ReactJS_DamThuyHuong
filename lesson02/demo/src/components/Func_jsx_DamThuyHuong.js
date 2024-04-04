import React from 'react';
import PropTypes from 'prop-types';

function Func_jsx_DamThuyHuong(props) {
    const users = {
        name:"Đàm Thúy Hường",
        age: 20
    }
    return (
        <div>
            <h2>Function component Demo</h2>
            <h3>
                Welcome to, {users.name} - {users.age}
            </h3>
            <hr/>
            <h3>Props: 
                <br/>
                FullName: {props.fullName}
                Age: {props.age}

            </h3>
        </div>
    );
}

export default Func_jsx_DamThuyHuong;