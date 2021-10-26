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

const update = (req, res) => {
  const 
}

/*const addUser = (req,res)=>{

  const id = parseInt(req.params.id);

  pool.query('INSERT TO information WHERE user_id =$1',[id],(error,results)=>{
    if (error){
      throw error("couldn't load");
    }
  res.status(200).send(`User deleted with ID: ${id}`);

  } )
}*/

module.exports = {
  getInfo,
  create
};