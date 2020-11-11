//animales con peso menor a 1000
db.dinosaurios.find({"tamaño.pesoToneladas": {$gt:4}})

//todos los animales cuyo año sea 12000 y cuya dieta no sea omnívora (uso de $and (explícito), $eq y $ne)
db.dinosaurios.find({$and: [ {años: {$eq: 12000}} , {dieta:{$ne: "omnívoro"}} ]})

//todos los animales que no vivan menos de 10000 años ni cuyo nombre acabe por 'o' (uso de $nor, $lt y $regex)
db.dinosaurios.find({$nor: [{años:{$lt:10000}} , {tipo: {$regex:/o$/}}]})

//Todos los animales que pesen entre 9 y 1 T y los que tengan una altura superior a 5 m 
//(uso de $or, $and(implícito), $gte, $lte y $gt)
db.dinosaurios.find({$or: [ {"tamaño.pesoToneladas":{$gte:1 , $lte:9}} , {"tamaño.alturaMetros":{$gt:5}} ] })

//Todos los animales que no son ni omnívoros ni herbívoros (uso de $not y $in)
db.dinosaurios.find({dieta: {$not: {$in: ["omnívoro" , "herbívoro"]}} })

//Todos los animales que no son ni carnívoros ni herbívoros (uso de $nin)
db.dinosaurios.find({dieta: {$nin: ["carnívoro", "herbívoro"]} })

//Todos los animales que tenga en su nombre una e despues cualquier letra y despues una i,
//un ejemplo de este tipo de palabra sería 'casa' ($uso de $regex)
db.dinosaurios.find({tipo: {$regex:/e.i/} })