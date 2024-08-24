db.inventory.find() //fetch all documents

db.inventory.find({qty:90})

db.inventory.find( { tags: { $in: [ "red", "D" ] } } )

//to pull single document not an array
db.inventory.findOne( { tags: { $in: [ "red", "D" ] } } )


//or operator
db.inventory.find( { status: "A", qty: { $lt: 30 } } )
//and operator

db.inventory.find( { $or: [ { status: "A" }, { qty: { $lt: 30 } } ] } )