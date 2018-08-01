var canvas = Object.getElementById('Chess');
var context = canvas.getContext('2d');

var cW = canvas.width;
var cH = canvas.height;

function drawCheckeredPattern(row,col) {
  
  var rowH = cH / row ;    /* rowHeight - sormagasság */
  var colW  = cW / col ;   /* colWidth - oszlopszélesség */
  var sorSzam = 1;         /* hányadik sort rajzolom ki */
  var rowCount, colCountStart, colCount = 0;

  for ( rowCount = 0; rowCount<cH; rowCount += rowH) {
    if (sorSzam % 2 == 1) {   // Ez a vizsgálat azért kell, hogy a sorok
      colCountStart = 1;      // minden második sorban ugyanazzal a színnel kezdődjenek,
    } else {                  // vagyis a kiiratást el kell tolni egy 
      colCountStart = 0;      // sakkmezővel minden egyes sor kiiratása után oda-vissza.
    }
    
    // Itt rajzolok megy egy sor mezőt
    for ( colCount = colCountStart; colCount<col; colCount += 2) {
      context.fillRect(colW*colCount,rowCount,colW,rowH);
    }
    sorSzam++;
  }
  context.fillStyle = 'black';
  
}

drawCheckeredPattern(4,6);