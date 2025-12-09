// Ejercicio 2 - TypeScript
// Enumerar género de películas y país de la película y mostrarlos por consola

// Enumeración para los géneros de películas
enum GeneroPelicula {
  Accion = "Acción",
  Comedia = "Comedia",
  Drama = "Drama",
  Terror = "Terror",
  CienciaFiccion = "Ciencia ficción"
}

// Enumeración para los países de las películas
enum PaisPelicula {
  Venezuela = "Venezuela",
  Argentina = "Argentina",
  EEUU = "Estados Unidos",
  Espana = "España",
  Mexico = "México"
}

// Tipo/Interface para representar una película
interface Pelicula {
  titulo: string;
  genero: GeneroPelicula;
  pais: PaisPelicula;
}

// Arreglo de películas usando los enums
const peliculas: Pelicula[] = [
  {
    titulo: "Misión Especial",
    genero: GeneroPelicula.Accion,
    pais: PaisPelicula.EEUU
  },
  {
    titulo: "Risas en Familia",
    genero: GeneroPelicula.Comedia,
    pais: PaisPelicula.Argentina
  },
  {
    titulo: "Historias de Vida",
    genero: GeneroPelicula.Drama,
    pais: PaisPelicula.Venezuela
  },
  {
    titulo: "Noche de Susto",
    genero: GeneroPelicula.Terror,
    pais: PaisPelicula.Espana
  },
  {
    titulo: "Viaje a las Estrellas",
    genero: GeneroPelicula.CienciaFiccion,
    pais: PaisPelicula.Mexico
  }
];

// Mostrar la información en consola
console.log("Listado de películas:\n");

peliculas.forEach((peli, indice) => {
  console.log(`${indice + 1}. Título: ${peli.titulo}`);
  console.log(`   Género: ${peli.genero}`);
  console.log(`   País: ${peli.pais}`);
  console.log("-----------------------------");
});
