var pool = require("../controllers/db");

//pool.query("drop table login_clueminati,login_arsenal,registration,question_clueminati,session_clueminati")

pool.query(
   "CREATE TABLE IF NOT EXISTS login_clueminati (rollno int PRIMARY KEY ,cur_id int default 1 ,password varchar (50), score int default 1000,curhint int default 0, total_hit int default 0, wrong_hit int default 0 )",
  (err, result) =>{
    if (err) throw err;
  }
);


pool.query(
    "CREATE TABLE IF NOT EXISTS login_arsenal (rollno int PRIMARY KEY ,password varchar (50), coin int default 0)",
   (err, result) =>{
     if (err) throw err;
   }
 );

 pool.query(
  "CREATE TABLE IF NOT EXISTS question_clueminati (question varchar (150),id int PRIMARY KEY,answer varchar (150), hint1 varchar (300),hint2 varchar (300),hint3 varchar (300) , flag int default 0)",
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

  exports.updatelogin_arsenal = (rollno, password, callback) => {
    return pool.query(
      "Insert into login_arsenal (rollno,password) values ($1,$2) on conflict do nothing",
      [rollno, password],
      callback
    );
  };