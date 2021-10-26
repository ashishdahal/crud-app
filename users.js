const Pool = require ('pg').Pool;
const pool = new Pool ({
  user : 'ash_dahal',
  host : 'localhost',
  database : 'users_info',
  port : '5432',
});

const getInfo = (req,res)=>{
  pool.query("SELECT * FROM information ORDER BY user_id ASC",(error,results)=>{if (error){
    throw error
  }
  res.status(200).json(results.rows)
})
};

const create = (req, res)=>{
  const query = `INSERT INTO information (name,email,joined_date) VALUES ('22', '22@gmail.com', '2015')`

  pool.query(query, (error, results) => {
if (error) {
  throw error
}
    res.status(201).send(`User added : {res.results}`)
  })
  //res.status(200).json({ message: 'Created'} )
};

const edit = (req, res) => {

  const id = parseInt(req.params.id);
  const query = `UPDATE information SET name = 'upAshish', email = 'upash@upash.com', joined_date = '1111' WHERE user_id = 1`
  pool.query(query,(error,results)=>{
    if (error) {
      throw error
    }
    res.status(200).send(`User updated : ${res.results}`)
  })
}

const remove = (req, res) => {
  const id = parseInt(req.params.id);
  const query = `DELETE FROM information WHERE user_id = 1`
  pool.query(query,(error,results)=>{
    if (error) {
      throw error
    }
    res.status(200).send(`User deleted : ${res}`)
  })
}

module.exports = {
  getInfo,
  create,
  edit,
  remove
};