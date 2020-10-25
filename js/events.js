//alert( 'fuck css' );
let crapSection = document.querySelector( '#crapsection' );



// --------- COLOR INFO -------------
let info = document.querySelector( '#colorinfo' );
info.addEventListener( 'click', showInfo );
function showInfo( event ){
    alert( 'PALETTE: https://www.colourlovers.com/palette/559428/lucky_bubble_gum' );
}


// --------- RECOGER TAREA -----------
let putItOff = document.querySelector( '#botonposponer' );

putItOff.addEventListener( 'click', getCrap );

    function getCrap( event ){
        event.preventDefault();
        let newCrap = document.querySelector( '#nueva' ).value;
        let crapPriority = document.querySelector( '#eligecategoria' ).value;
        console.log( newCrap );
        console.log( crapPriority );
        if( newCrap != "" && crapPriority != 0 ){
            addCrap( newCrap, crapPriority );
            // printOneCrap( crapSection, crapArray[crapArray.length -1] );
            printCrapList( crapSection, crapArray );
        }else{ alert( 'Empty fields' ); }
    }


//Para las tres tareas que vienen por defecto
printCrapList( crapSection, crapArray );



// --------- BOTON ELIMINAR TAREA -----------
function putListenersToButtons(){
    let crapButtons = document.querySelectorAll( '.eliminar' );
    for ( crapButton of crapButtons ){
        crapButton.addEventListener( 'click', deleteCrap );
    }
}

