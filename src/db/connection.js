const {Client} = require('pg')

const connectionStr=`postgres://qznazbhg:hgOvFBUcM343u3aK-oBeoVPIZ3vcWkyZ@heffalump.db.elephantsql.com/qznazbhg`;

const dbClient = new Client(connectionStr)

module.exports= {dbClient}