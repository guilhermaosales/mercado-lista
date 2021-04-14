import React, { Fragment, useState } from 'react';

const EditList = ({ list }) => {

    const [name, setName] = useState(list.name);

    const updateName = async e => {
        e.preventDefault();
        try {
            const body = { name };
            await fetch(`http://localhost:5000/list/${list.id}`, {
                method: 'PUT',
                headers: { 'Content-Type':'application/json'},
                body: JSON.stringify(body)
            })
            window.location = '/';
        } catch (err) {
            console.error(err.message);
        }
    };

    return (
        <Fragment>
            <button type="button" className="btn btn-warning" data-toggle="modal" data-target={`#id${list.id}`}>
                Rename
            </button>
        
            <div class="modal" id={`id${list.id}`} onClick={() => setName(list.name)}>
                <div class="modal-dialog">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h4 class="modal-title">Rename list</h4>
                            <button type="button" className="close" data-dismiss="modal" onClick={() => setName(list.name)}>
                                &times;</button>
                        </div>
                    
                        <div class="modal-body">
                            <input type="text" className="form-control" value={name} onChange={e => setName(e.target.value)}/>
                        </div>
                    
                        <div class="modal-footer">
                            <button type="button" className="btn btn-warning" data-dismiss="modal" onClick={e => updateName(e)}>Edit </button>
                            <button type="button" className="btn btn-danger" data-dismiss="modal" onClick={() => setName(list.name)}>Close</button>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}

export default EditList;