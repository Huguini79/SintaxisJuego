import { Component } from '@angular/core';

@Component
({
    selector: 'app-preguntas',
    templateUrl: 'preguntas.html',
    styleUrl: '../styles.css'
})

export class Preguntas 
{
    preguntas: any = 
    [
        {id: 1, pregunta: "¿Qué es un Sujeto?", adi: "1) Persona, animal o cosa que realiza la acción del verbo o de la que se dice algo en la oración 2) Forma parte del verbo 3) Sustantivo el cuál se puede transformar en adjetivo mediante los valores del SE", respuesta: "1", puntuacion: 0, realizado: 0},
        {id: 2, pregunta: "¿Qué es un Predicado?", adi: "1) Está dentro del sujeto 2) Es uno de los valores principales del SE 3) Es la parte de la oración que expresa la acción, el estado o la información que se dice del sujeto", respuesta: "3", puntuacion: 0, realizado: 0},
        {id: 3, pregunta: "¿Qué es un Verbo?", adi: "1) Núcleo de un Sujeto 2) Palabra que realiza la acción dentro del predicado 3) Es más o menos la 2, con la diferencia de que NUNCA puede estar en un predicado", respuesta: "2", puntuacion: 0, realizado: 0},
        {id: 4, pregunta: "¿Dónde está el Atributo dentro de un predicado?", adi: "1) El atributo está dentro de un predicado nominal 2) Se encuentra después del Complemento del Nombre dentro del Sujeto 3) Las anteriores son incorrectas", respuesta: "1", puntuacion: 0, realizado: 0},
        {id: 5, pregunta: "¿Dónde se encuentra un Actualizador?", adi: "1) Es el atributo dentro de un predicado 2) Está dentro del sujeto, acompaña al sustantivo 3) acompaña al verbo del predicado", respuesta: "2", puntuacion: 0, realizado: 0},
        {id: 6, pregunta: "¿Qué es el Complemento del Nombre?", adi: "1) Eso no existe 2) función sintáctica en la que un grupo de palabras modifican, concreta o añade más información a un sustantivo 3) Se encuentra dentro del Complemento directo, es como si fuera un actualizador, aunque en vez de estar el actualizador en un sujeto, está detro del Complemento Directo", respuesta: "2", puntuacion: 0, realizado: 0},
        {id: 7, pregunta: "¿Diferencias entre Complemento Circunstancial de Lugar y Complemento Circunstancial de Tiempo?", adi: "1) El complemento circunstancial de tiempo en ocasiones puede representar cómo se realizado una acción y el de lugar, el tiempo en donde se realizó la acción del complemento circunstancial de tiempo 2) El complemento circunstancial de lugar indica donde sucedió una cosa, y el de tiempo cuándo", respuesta: "2", puntuacion: 0, realizado: 0},
        {id: 8, pregunta: "¿Diferencias entre los verbos del Predicado Nominal y Predicado Verbal?", adi: "1) El predicado nominal se compone de verbos de negación, y el predicado verbal verbos en positivo 2) El predicado nominal tiene verbos en positivo y el predicado verbal en negativo 3) el predicado nominal está compuesto por tres verbos (ser, estar, parecer), y el predicado verbal son los demás verbos que no son ser, estar y parecer", respuesta: "3", puntuacion: 0, realizado: 0},
        {id: 9, pregunta: "¿Qué se diferencia un verbo copulativo de uno que no lo es?", adi: "1) Un verbo copulativo es un verbo que pertenece a uno de estos tres verbos (ser, estar, parecer) 2) los verbos copulativos no existen, solo existen los nominales, por eso los verbos nominales están en los predicados nominales", respuesta: "1", puntuacion: 0, realizado: 0},
        {id: 10, pregunta: "¿Cuál es el núcleo de un sujeto?", adi: "1) Un sustantivo 2) Un verbo 3) Un verbo copulativo", respuesta: "1", puntuacion: 0, realizado: 0},
    ];

    i = 0;

    pregunta_actual = this.preguntas[this.i];
    correcto = false
    incorrecto = false;
    correctas = 0;
    incorrectas = 0;

    final = false;

    Comprobar(entrada: string)
    {
        if (this.pregunta_actual.realizado != 1)
        {
            if (entrada == this.pregunta_actual.respuesta)
            {
                this.pregunta_actual.realizado = 1;
                this.pregunta_actual.puntuacion = 1;
                this.correcto = true;
                this.correctas++;

            } else
            {
                this.pregunta_actual.realizado = 1;
                this.incorrecto = true;
                this.incorrectas++;
            }
        }
    }

    Siguiente()
    {
        if (this.i != this.preguntas.length && this.pregunta_actual.id < 10)
        {
            this.i++;
            this.pregunta_actual = this.preguntas[this.i];
            this.correcto = false;
            this.incorrecto = false;
        
        } else
        {
            this.final = true;
        }
    }
}