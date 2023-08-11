class Pregunta {
    constructor(id, texto, opciones, categoriaId, respuestaCorrecta) {
        this.id = id;
        this.texto = texto;
        this.opciones = opciones;
        this.categoriaId = categoriaId;
        this.respuestaCorrecta = respuestaCorrecta;
    }
}

export { Pregunta, preguntas };
