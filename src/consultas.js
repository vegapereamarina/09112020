//animales con peso menor a 500T
db.dinosaurios.find({"tamaño.pesoToneladas": {$gt:500}})

//Todos los animales que no son ni carnívoros ni herbívoros 
db.dinosaurios.find({dieta: {$nin: ["carnívoro", "herbívoro"]} })

//Todos los animales que no son ni omnívoros ni herbívoros 
db.dinosaurios.find({dieta: {$not: {$in: ["omnívoro" , "herbívoro"]}} })

//todos los animales cuyo año sea 12000 y cuya dieta no sea omnívora
db.dinosaurios.find({$and: [ {años: {$eq: 12000}} , {dieta:{$ne: "omnívoro"}} ]})

//Todos los animales que pesen entre 9 y 1 T y los que tengan una altura mayor que 5 m //
db.dinosaurios.find({$or: [ {"tamaño.pesoToneladas":{$gte:1 , $lte:9}} , {"tamaño.alturaMetros":{$gt:5}} ] })

//todos los animales que no vivan menos de 10000 años ni cuyo nombre acabe por 'o'
db.dinosaurios.find({$nor: [{años:{$lt:10000}} , {tipo: {$regex:/o$/}}]})

//Todos los animales que tenga en su nombre una e y una i//
db.dinosaurios.find({tipo: {$regex:/e.i/} })
