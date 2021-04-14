const pool = require('../config/db');

exports.createList = async(req, res) => {
    try {
        const { name } = req.body;
        const list = await pool.query(
            'INSERT INTO list (name) VALUES($1) RETURNING *',
            [name]
        );
        res.json(list.rows[0]);

    } catch (err) {
        console.log(err.message);
    }
};

exports.getList = async(req, res) => {
    try {
        const list = await pool.query(
          'SELECT * FROM list'  
        );
        res.json(list.rows);
    } catch (err) {
        console.log(err.message);
    }
};

exports.getListById = async(req, res) => {
    try {
        const { id } = req.params;
        const listDb = await pool.query(
            'SELECT * FROM list WHERE id = $1', [id]
        );
        res.json(listDb.rows[0]);
    } catch (err) {
        console.log(err);
    }
};

exports.updateListById = async(req, res) => {
    try {
        const { id } = req.params;
        const { name } = req.body;
        await pool.query(
            'UPDATE list SET name = $1 WHERE id = $2',
            [name, id]
        );
        res.status(201).send({ message: `List ${id} updated!`});
    } catch (err) {
        console.log(err);
    }
};

exports.deteleListById = async(req, res) => {
    try {
        const { id } = req.params;
        await pool.query(
            'DELETE FROM list WHERE id = $1',
            [id]
        );
        res.status(201).send({ message: `List ${id} deleted!`});
    } catch (err) {
        console.log(err);
    }
    
};