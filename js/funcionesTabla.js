
/* METODOS PARA TABLAS*/
function creaInsertaTabla(idTabla,divTabla){
    var tabla = document.createElement('table');
    tabla.setAttribute('id', idTabla);
    tabla.setAttribute('class', 'text-center');
    tabla.setAttribute('border', '1');
    document.getElementById(divTabla).appendChild(tabla);
}
function insertaCabeceraTabla(tituloTh,tabla){
    // Crear secci�n <thead>
    var thead = document.createElement('thead');
    thead.insertRow(0); // A�adir una fila a la secci�n <thead>
    // A�adir columnas de <thead>o
    var cabecera;
    for(var i=0; i<tituloTh.length;i++){
        cabecera = document.createElement('th');
        cabecera.setAttribute('class', 'text-center');
        cabecera.textContent=tituloTh[i];
        thead.appendChild(cabecera);
    }
    document.getElementById(tabla).appendChild(thead);
}
function insertaBodyTabla(array,tabla){
    // Crear secci�n <tbody>
    var tbody = document.createElement('tbody');
    tbody.insertRow(0);
    document.getElementById(tabla).appendChild(tbody);
    for(var i = array.length-1; i>=0;i--){
        for(var j=0;j<array[i].length;j++){
            tbody.rows[0].insertCell(j);
            tbody.rows[0].cells[j].appendChild(document.createTextNode(array[i][j]));
        }
        tbody.insertRow(0);
    }
    document.getElementById(tabla).appendChild(tbody);
}
function insertaPieTabla(total,cadena,tabla,colspan){
    // Crear secci�n <tfoot>
    var tfoot = document.createElement('tfoot');
    tfoot.insertRow(0);
    var footer;
    footer = document.createElement('td');
    footer.setAttribute('class', 'text-center');
    footer.setAttribute('colspan', colspan);
    footer.appendChild(document.createTextNode(total +" " +cadena));
    tfoot.appendChild(footer);
    document.getElementById(tabla).appendChild(tfoot);
}
