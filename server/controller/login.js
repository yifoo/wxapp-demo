module.exports = (req,res)=>{
  console.log('请求来了',req.query.errMsg)
  res.json({data:'12'})
}