var pool = require("../controllers/db");

// pool.query("drop table login_clueminati,registration,session_clueminati")

pool.query(
   "CREATE TABLE IF NOT EXISTS login_clueminati (rollno int PRIMARY KEY ,cur_id int default 1 ,password varchar (50), score int default 1000,curhint int default 0, total_hit int default 0, wrong_hit int default 0 )",
  (err, result) =>{
    if (err) throw err;
  }
);


pool.query(
  "CREATE TABLE IF NOT EXISTS session_clueminati (rollno int primary key ,f int default 0,count int default 0)",
 (err, result) =>{
   if (err) throw err;
 }
);

exports.updatesession_clueminati = (rollno, password, callback) => {
  return pool.query(
    "Insert into session_clueminati (rollno) values ($1) on conflict do nothing ",
    [rollno],
    callback
  );
};

exports.updatelogin_clueminati = (rollno, password, callback) => {
    return pool.query(
      "Insert into login_clueminati (rollno,password) values ($1,$2) on conflict do nothing ",
      [rollno, password],
      callback
    );
  };

