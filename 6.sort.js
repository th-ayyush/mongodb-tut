db.inventory.insertMany([
    { item: "journal", qty: 25, tags: ["blank", "red"], size: { h: 14, w: 21, uom: "cm" } },
    { item: "mat", qty: 85, tags: ["gray"], size: { h: 27.9, w: 35.5, uom: "cm" } },
    { item: "mousepad", qty: 25, tags: ["gel", "blue"], size: { h: 19, w: 22.85, uom: "cm" } }
 ])

 db.inventory.find().sort({qty:-1})//descending order of qty and +1 for ascending

 db.inventory.find().skip(1)//skip the first document

 db.inventory.find().limit(2)//limits the number of document in the option
