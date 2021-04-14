import React, { Fragment, useEffect, useState } from 'react';

import EditList from './EditList';

const ListLists = () => {

    const [lists, setLists] = useState([]);

    const getLists = async () => {
        try {
            const response = await fetch('http://localhost:5000/list', {
                method: 'GET',
                headers: { 'Content-Type': 
                'application/json'}
            })
            const jsonData = await response.json();
            setLists(jsonData);
        } catch (err) {
            console.error(err.message);
        }
    };

    const deleteList = async (id) => {
        try {
            await fetch(`http://localhost:5000/list/${id}`, {
                method: 'DELETE',
                headers: { 'Content-Type':
                'application/json'}
            })
            
            setLists(lists.filter(list => list.id !== id ))
        } catch (err) {
            console.error(err.message);
        }
    }

    useEffect(() => {
        getLists();
    }, []);

    return (
        <Fragment>
            {' '}
            <table className='table mt-5 text-center'>
            <thead>
                <tr>
                    <th>Lists</th>
                    <th>Edit</th>
                    <th>Delete</th>
                </tr>
            </thead>
            <tbody>
                {lists.map(list =>(
                    <tr key={list.id}>
                        <td>{list.name}</td>
                        <td><EditList list={list} /></td>
                        <td>
                            <button className="btn btn-danger" onClick={() => deleteList(list.id)} >
                                Delete
                            </button></td>
                    </tr>
                ))}
            </tbody>
            </table>
        </Fragment>
    ); 
};

export default ListLists;