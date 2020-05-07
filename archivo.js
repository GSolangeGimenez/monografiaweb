var derecho = prompt("Elegí algunos de los siguientes Derechos reales : Dominio,Usufructo,Uso,Habitación").toLowerCase();
alert("Accediendo a la respuesta ...");
switch(derecho) {
case "dominio":
    alert("El dominio es el poder absoluto que tiene alguien sobre algo. Se da sobre las cosas, por lo que en general coincide con la propiedad, de la que se puede disponer a antojo del dueño, mientras no cause perjuicios a terceros. Como equivale a la propiedad no es correcto decir que se tiene dominio sobre otras personas; sobre ellas puede ejercerse una relación de poder, pero no de derecho de propiedad, al haberse abolido la esclavitud.");
break;
case "usufructo":
alert("El usufructo está definido en el artículo 467 del Código Civil como el derecho a disfrutar los bienes ajenos con la obligación de conservar su forma y sustancia, a no ser que el título de su constitución o la ley autoricen otra cosa");
break;
case"uso":
alert("El uso es el derecho real que consiste en usar y gozar de una cosa ajena, su parte material o indivisa, en la extensión y con los límites establecidos en el título, sin alterar su sustancia. Si el título no establece la extensión del uso y goce se entiende que se constituye un usufructo.");
break;
case"habitacion":
alert("La habitación es el derecho real que consiste en morar en un inmueble ajeno construido, o en parte material de él, sin alterar su sustancia");
break;
default:
    alert(" Eso no es un Derecho Real... escribe un Derecho Real correctamente");
    break;

}
