var pool = require("../controllers/db");

pool.query(
  "CREATE TABLE IF NOT EXISTS registration (rollno int PRIMARY KEY ,password varchar (50),name varchar (50),email varchar (50))",
  (err, result) => {
    if (err) console.log(err);
  }
);

exports.getrollno = (rollno, callback) => {
  return pool.query(
    "select * from  registration WHERE rollno = $1",
    [rollno],
    callback
  );
};

exports.updatedetails = (rollno, password, name, email, callback) => {
  return pool.query(
    "Insert into registration (rollno,password,name,email) values ($1,$2,$3,$4) on conflict do nothing ",
    [rollno, password, name,email],
    callback
  );
};
