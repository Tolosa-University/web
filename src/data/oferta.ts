// Oferta académica compartida entre páginas (grados, másteres, admisiones y generador).

export interface Programa {
  name: string;
  tag: string;
  duration: string;
  desc: string;
  salidas: string;
}

export const grados: Programa[] = [
  {
    name: 'Grado en Cultura General Aplicada',
    tag: 'Facultad de Saberes Humanos',
    duration: '4 años',
    desc: 'El programa estrella. Aprenderás capitales, ríos, reyes godos y el nombre científico del erizo. Al terminar, ninguna pregunta de concurso televisivo te pillará desprevenido.',
    salidas: 'Tertuliano · Guionista de trivial · Sabelotodo profesional',
  },
  {
    name: 'Grado en Consulta Enciclopédica',
    tag: 'Facultad de Documentación',
    duration: '4 años',
    desc: 'Antes se llamaba «buscar en la Wikipedia». Aquí lo elevamos a ciencia: cómo encontrar la fuente, distinguir el dato bueno del bulo y no perderte en la sección de «Véase también».',
    salidas: 'Documentalista · Verificador de datos · Bibliotecario de élite',
  },
  {
    name: 'Grado en Cálculo Mental Clásico',
    tag: 'Facultad de Números',
    duration: '3 años',
    desc: 'Sumar, restar y dividir la cuenta del bar sin sacar el móvil. Incluye módulo avanzado de reglas de tres y estimación de propinas bajo presión social.',
    salidas: 'Comercial · Árbitro de dardos · Tesorero de peña',
  },
  {
    name: 'Grado en Orientación sin GPS',
    tag: 'Facultad de Geografía',
    duration: '4 años',
    desc: 'El sol sale por el este, el musgo crece al norte y el mapa se dobla así. Recuperamos el arte perdido de llegar a un sitio sin que una voz te diga cuándo girar.',
    salidas: 'Guía de montaña · Cartógrafo · Repartidor legendario',
  },
  {
    name: 'Grado en Retórica y Debate de Sobremesa',
    tag: 'Facultad de Elocuencia',
    duration: '4 años',
    desc: 'Ganar discusiones con argumentos, no con volumen. Aprenderás a citar fuentes de memoria y a reconocer una falacia a diez metros de distancia.',
    salidas: 'Abogado · Presentador · Cuñado ilustrado',
  },
  {
    name: 'Grado en Memoria Prodigiosa',
    tag: 'Facultad de la Mente',
    duration: '5 años',
    desc: 'Palacios de la memoria, mnemotecnia y el arte de recordar cumpleaños sin que te lo recuerde una notificación. La nube más fiable es la que llevas puesta.',
    salidas: 'Actor · Historiador oral · Campeón de memoria',
  },
  {
    name: 'Grado en Historia Contada de Memoria',
    tag: 'Facultad de Saberes Humanos',
    duration: '4 años',
    desc: 'Desde los sumerios hasta ayer por la tarde, en orden y sin resúmenes automáticos. Aprenderás a explicar la caída de Roma en una cena sin aburrir a nadie.',
    salidas: 'Docente · Divulgador · Guía turístico',
  },
  {
    name: 'Grado en Bricolaje del Conocimiento',
    tag: 'Facultad de Oficios',
    duration: '3 años',
    desc: 'Cambiar un enchufe, cocinar sin receta y montar el mueble sin las instrucciones. Saber hacer cosas con las manos también es saberlo todo.',
    salidas: 'Manitas certificado · Restaurador · Vecino imprescindible',
  },
];

export const masteres: Programa[] = [
  {
    name: 'Máster en Saberlo Todo (habilitante)',
    tag: 'Facultad de Saberes Humanos',
    duration: '2 años',
    desc: 'El posgrado clásico de la casa. Habilita legalmente para empezar frases con «pues te lo explico» en cualquier país del espacio Schengen.',
    salidas: 'Enciclopedia andante · Comodín de la llamada · Jefe de estudios',
  },
  {
    name: 'Máster en Divulgación sin Exagerar',
    tag: 'Facultad de Elocuencia',
    duration: '1 año',
    desc: 'Contar la ciencia sin decir que «los científicos están aterrados». Incluye seminario intensivo de titulares que no traicionan al estudio que citan.',
    salidas: 'Divulgador honesto · Redactor científico · Rareza de internet',
  },
  {
    name: 'Máster en Fuentes Primarias y Notas al Pie',
    tag: 'Facultad de Documentación',
    duration: '2 años',
    desc: 'Para quienes leen la bibliografía por placer. Se sale sabiendo distinguir un «según un estudio» de un estudio de verdad, con nota al pie incluida.',
    salidas: 'Verificador de datos · Editor académico · Azote de bulos',
  },
  {
    name: 'Máster en Corrección de Desconocidos («Actually…»)',
    tag: 'Facultad de Elocuencia',
    duration: '1 año',
    desc: 'Sí, hay que corregir el dato. No, no hace falta arruinar la cena. Aprende a puntualizar con elegancia y a retirarte a tiempo de un hilo perdido.',
    salidas: 'Moderador de foros · Diplomático de sobremesa · Exdiscutidor de internet',
  },
  {
    name: 'Máster en Silencio Estratégico',
    tag: 'Facultad de la Mente',
    duration: '1 año',
    desc: 'El posgrado más difícil de aprobar: no opinar cuando no se sabe. Tasa de abandono del 94%, casi siempre en la primera sobremesa con familia.',
    salidas: 'Sabio discreto · Asesor de confianza · Persona que cae bien',
  },
  {
    name: 'Máster en Predicción Retrospectiva',
    tag: 'Facultad de Números',
    duration: '1 año',
    desc: 'Formación avanzada en «yo ya lo dije» y «esto se veía venir». Único programa donde los exámenes se corrigen después de saber las respuestas.',
    salidas: 'Analista de mercados · Comentarista deportivo del lunes · Historiador de barra',
  },
];

/** Títulos que ofrece el generador de diplomas (versiones cortas, sin coletillas). */
export const titulosDiploma: string[] = [
  ...grados.map((g) => g.name),
  'Máster en Saberlo Todo',
  'Doctorado Honoris Causa en Sabiduría General',
];
