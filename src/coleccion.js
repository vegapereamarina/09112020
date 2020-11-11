//Creo la coleccion materiales e inserto documentos usando un InsertMany
db.dinosaurios.drop()

db.dinosaurios.insertMany([
    { tipo: "mosasaurus", dieta: "carnívoro", años: 20000, tamaño:{pesoToneladas: 20, alturaMetros: 17}},
    { tipo: "neuquensaurus", dieta: "herbívoro", años: 12000, tamaño:{pesoToneladas: 16, alturaMetros: 3}},
    { tipo: "omeisaurus", dieta: "herbívoro", años: 14000 , tamaño:{pesoToneladas:9, alturaMetros: 4}},
    { tipo: "ornithomimus", dieta: "omnívoro", años: 15000, tamaño:{pesoToneladas: 0.17, alturaMetros: 3}}, 
    { tipo: "othnielia", dieta: "omnívoro", años: 10000, tamaño:{pesoToneladas: 0.01, alturaMetros: 2}},
    { tipo: "pelicaninimus", dieta: "omnívoro", años: 13000, tamaño:{pesoToneladas: 0.042, alturaMetros:2.5}}, 
    { tipo: "piatnitzkysaurus", dieta: "herbívoro", años: 9000, tamaño:{pesoToneladas: 3, alturaMetros: 5.1}}, 
    { tipo: "polacantus", dieta: "carnivora", años: 8000, tamaño:{pesoToneladas: 2.8, alturaMetros: 4.3}}, 
    { tipo: "proceratosaurus", dieta: "carnívoro", años: 12000, tamaño:{pesoToneladas:0.2, alturaMetros: 2.4}}, 
    { tipo: "pteranodon", dieta: "omnívoro", años: 11000, tamaño:{pesoToneladas:3.2, alturaMetros: 1.2}} 
])