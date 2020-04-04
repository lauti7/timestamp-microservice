
const fromDateStringOrUnix = (req, res) => {


  if (req.params.date.length >=10) {
    const unix = parseInt(req.params.date)
    console.log(req.params.date.length);
    let utc;
    if (req.params.date.length === 10) {
      console.log('áca');
      utc = new Date(unix * 1000)
      utc = utc.toUTCString()
    } else {
      utc = new Date(unix).toUTCString()
    }
    return res.status(200).json({unix, utc})
  } else {
    const date = new Date(req.params.date)

    const unix = date.getTime()
    const utc = date.toUTCString();
    
    return res.status(200).json({unix, utc})
  }


}



module.exports = {
fromDateStringOrUnix
}
