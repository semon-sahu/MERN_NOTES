const empModel = require("../models/empModel");

const empdata = async (req, res) => {
  console.log(req.body);
  const { empno, empname, empdep, empsal } = req.body;
  //  const{empno, empname,empdep,empsal}=req.body;
  const data = await empModel.create({
    empno: empno,
    empname: empname,
    empdep: empdep,
    empsal: empsal,
  });

  res.send(data);
  // console.log(data);
};

module.exports = {
  empdata,
};
