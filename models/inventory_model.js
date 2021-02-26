'use strict'; 

const Pool = require('pg').Pool
const pool = new Pool({
  user: 'Brend',
  host: 'localhost',
  database: 'inventory_app',
  password: 'brendonh',
  port: 5432,
});

const getInventory = () => {
    return new Promise(function(resolve, reject) {
      pool.query('SELECT * FROM inventory_items ORDER BY id ASC', (error, results) => {
        if (error) {
          reject(error)
        }
        resolve(results.rows);
      })
    }) 
  }
  const createItem = (body) => {
    return new Promise(function(resolve, reject) {
      const { name, description, serialNum } = body
      pool.query('INSERT INTO inventory_items (name, description, serialNum) VALUES ($1, $2, $3) RETURNING *', [name, description, serialNum], (error, results) => {
        if (error) {
          reject(error)
        }
        resolve(`A new Item has been added added: ${results.rows[0]}`)
      })
    })
  }
  const deleteItem = () => {
    return new Promise(function(resolve, reject) {
      const id = parseInt(request.params.id)
      pool.query('DELETE FROM inventory_items WHERE id = $1', [id], (error, results) => {
        if (error) {
          reject(error)
        }
        resolve(`Item deleted with ID: ${id}`)
      })
    })
  }
  
  module.exports = {
    getInventory,
    createItem,
    deleteItem,
  }