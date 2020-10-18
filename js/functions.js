


//---------- INCLUDE CRAP ----------------
function addCrap( pNewCrap, pCrapPriority ){
    crapArray[crapArray.length] = { 
        crapid: crapArray.length, 
        crap: pNewCrap,
        priority: pCrapPriority
    }
}


//----------  PRINT CRAP LIST ----------------
function printCrapList( pSection, pCrapList ){
    for( crap of pCrapList ){
    printOneCrap( pSection, crap );
    }
}


//----------  PRINT ONE CRAP ----------------
function printOneCrap( pSection, pCrap ){
    let priorColor = '';
    if( pCrap.priority == "Urgente" ){
        priorColor = 'dark';
    }if( pCrap.priority == "diaria" ){
        priorColor = 'dgreen';
    }if( pCrap.priority == "mensual" )
    { priorColor = 'lgreen'; }
   pSection.innerHTML += `<article>
                            <h3>${pCrap.crap}</h3>
                            <div class="color ${priorColor}"></div> 
                            <div>
                                <input type="submit" value="" id="eliminar">
                                <i class="fas fa-trash"></i> 
                            </div>
                        </article>`; 
}

