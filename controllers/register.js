const { getrollno, updatedetails,getemail } = require("../models/registration");
const {updatelogin_clueminati, updatesession_clueminati}  = require("../models/login");

exports.getdetails = async (req, res, next) => {
  try {
    if (req.body.rollno>=100000000 && `${req.body.rollno}`.length === 9 && req.body.password && req.body.name && req.body.email && isNaN(req.body.name)) {
      const getdata = await getrollno(req.body.rollno);
      const getdata_email = await getemail(req.body.email);
      if (getdata.rowCount > 0 || getdata_email.rowCount > 0) {
        res.render("layout/registration", {
          message: "User already exists!",
        })
      } else {
        const updatedata = await updatedetails(
          req.body.rollno,
          req.body.password,
          req.body.name,
          req.body.email
        )
        const updateclueminati = await updatelogin_clueminati(
          req.body.rollno,
          req.body.password
        )
       
        const updatesession= await
        updatesession_clueminati(req.body.rollno)
        
        res.render("layout/registration", {
          message: "Successfully Registered!",
        })
      }
    } else  res.render("layout/registration", {
      message: "Invalid Credentials!",
    })
  } catch (err) {
    next(err)
  }
};
