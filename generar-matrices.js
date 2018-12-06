

function preparar()
      {

          var novariables= document.getElementById("idnovariables").value;
          var norestricciones = document.getElementById("idnorestricciones").value;
          var objetivo;
          var s;
          var i,j,k;
          s="";

          if (novariables < 2)
          {
              alert("Se requiere como minimo dos variables");
              document.getElementById("idnovariables").focus();
              return 0;
          }

          if (norestricciones < 1)
          {
              alert("Se requiere como minimo una restriccion");
              document.getElementById("idnorestricciones").focus();
              return 0;
          }

          if (document.getElementById("idoptmaximizar").checked == true)
          {
              objetivo=1;
          }
          else
          {
              objetivo=0;
          }

          s=s+"Introduzca los coeficientes del problema:<br>";
          s= s+"<table bordercolor='#FFFFFF'>";
          s= s+"<tr>";
          s= s+"<td></td>";


          for (i=1; i<=novariables; i++)
            {
                s= s+"<td class='jcell'>X<sub>"+i+"</sub></td>";
            }
          s= s+"<td></td>";
          s= s+"<td></td>";
          s= s+"</tr>";

          s= s+"<tr>";
          if (objetivo==1)
          {
              s= s+"<td class='jcell'>Max Z = </td>";
          }else
          {
              s= s+"<td class='jcell'>Min Z = </td>";
          }
          for(j=1; j<=novariables; j++)
          {
              s= s+ "<td><input type='text name='txtx'" +  j + " size='5' onkeypress='return solonumeros(event)' onblur='jmodelo()' maxlength='6' id='txtx" + j + "'  ></td> ";
          }
          s= s + "<td></td>";
          s= s + "<td></td>";
          s= s + "</tr>";

          for (i=1; i<=norestricciones; i++)
          {
              s= s+ "<tr>";
              s= s+"<td class='jcell'> Restricci&oacute;n "+i+" </td>";
              for (j=1; j<=novariables; j++)
                {
                    s= s+"<td><input type='text name='txtr"+i+"x"+j+"' id='txtr"+i+"x"+j+"'  size='5'  onblur='jmodelo()' maxlength='6'  ></td>" ;
                }
              s= s + "<td> <select size='1' name='cmbr"+i+"' id='cmbr"+i+"'><option selected value='<=''><=</option><option value='>='> >= </option><option value='='> = </option></select></td>";

              //============================= Botones aleatorios "<td><button name='cmbr"+i+"' id='cmbr"+i+"'>Aleatorios</button></td>" ==========================================
              s= s + "<td> <input type='text name='txtrhs"+i+"' size='5' onkeypress='return solonumeros(event)' onblur='jmodelo()' maxlength='6' id='txtrhs"+i+"'  ></td>";
              s= s + "<td> <button type='button' name='aleatorio"+i+"' class='button' value='Preparar' onclick='generarAleatorio()' id='aleatorio"+i+"'>Aleatorio</button> </td>";
              s= s + "</tr>";
          }


          s= s+"</table>";

          document.getElementById("idgridproblema").innerHTML= s;

      }

      function generarAleatorio() {
        var x = Math.floor((Math.random() * 1000) + 1);

        document.getElementById("txtrhs"+ 1).value = x;
        document.getElementById("txtrhs"+ 2).value = x + 2 * 7 + x;
        document.getElementById("txtrhs" + 3).value = x + 3 * 3;
        document.getElementById("txtrhs" + 4).value = x * 4 - 5;
        document.getElementById("txtrhs" + 5).value = x * 5 + 15;
        document.getElementById("txtrhs" + 6).value = x * 6;
        document.getElementById("txtrhs" + 7).value = x * 7;
        document.getElementById("txtrhs" + 8).value = x * 8;
        document.getElementById("txtrhs" + 9).value = x * 9;
        document.getElementById("txtrhs" + 10).value = x * 10;
        document.getElementById("txtrhs" + 11).value = x * 11;
        document.getElementById("txtrhs" + 12).value = x * 12;
        document.getElementById("txtrhs" + 13).value = x * 13;
        document.getElementById("txtrhs" + 14).value = x * 14;
        document.getElementById("txtrhs" + 15).value = x * 15;
        document.getElementById("txtrhs" + 16).value = x * 16;
        document.getElementById("txtrhs" + 17).value = x * 5;
        document.getElementById("txtrhs" + 18).value = x * 17;
        document.getElementById("txtrhs" + 19).value = x * 18;
        document.getElementById("txtrhs" + 20).value = x * 19;
        document.getElementById("txtrhs" + 21).value = x * 20;
        document.getElementById("txtrhs" + 22).value = x * 21;
        document.getElementById("txtrhs" + 23).value = x * 22;
        document.getElementById("txtrhs" + 24).value = x * 23;
        document.getElementById("txtrhs" + 25).value = x * 24;
        document.getElementById("txtrhs" + 26).value = x * 25;
        document.getElementById("txtrhs" + 27).value = x * 26;
        document.getElementById("txtrhs" + 28).value = x * 27;
        document.getElementById("txtrhs" + 29).value = x * 17;
        document.getElementById("txtrhs" + 30).value = x * 13;
        document.getElementById("txtrhs" + 31).value = x * 10 + 5;
        document.getElementById("txtrhs" + 32).value = x * 11 + 60;
        document.getElementById("txtrhs" + 33).value = x * 12 + 51;
        document.getElementById("txtrhs" + 34).value = x * 13 + 85;
        document.getElementById("txtrhs" + 35).value = x * 14 + 59;
        document.getElementById("txtrhs" + 36).value = x * 15 + 56;
        document.getElementById("txtrhs" + 37).value = x * 16 + 57;
        document.getElementById("txtrhs" + 38).value = x * 5  + 55;
        document.getElementById("txtrhs" + 39).value = x * 17 + 91;
        document.getElementById("txtrhs" + 40).value = x * 18 + 52;
        document.getElementById("txtrhs" + 41).value = x * 19 + 54;
        document.getElementById("txtrhs" + 42).value = x * 20 + 59;
        document.getElementById("txtrhs" + 43).value = x * 21 + 52;
        document.getElementById("txtrhs" + 44).value = x * 22 + 54;
        document.getElementById("txtrhs" + 45).value = x * 23 + 5;
        document.getElementById("txtrhs" + 46).value = x * 24 + 5;
        document.getElementById("txtrhs" + 47).value = x * 25 + 5;
        document.getElementById("txtrhs" + 48).value = x * 26;
        document.getElementById("txtrhs" + 49).value = x * 27;
        document.getElementById("txtrhs" + 50).value = x * 17;
        document.getElementById("txtrhs" + 51).value = x * 13;



      }




function jmodelo()
{
var novariables;
var norestricciones;
var objetivo;
var i; var j;
var aux;
var s;

novariables = document.getElementById("idnovariables").value;
norestricciones = document.getElementById("idnorestricciones").value;

if (document.getElementById("idoptmaximizar").checked==true)
{
    objetivo = "Max ";
}else
{
    objetivo = "Min     ";
}

s="<br><font face='Verdana' size='2' color='#FFFFFF'>";
s= s + "<table>";
s= s + "<tr>";
s= s + "<td><B>"+objetivo+" Z = </B></td>";

for (i=1; i<= novariables; i++)
	{
	aux = document.getElementById("txtx"+i).value;
	if (aux!=0)
		{
		if (aux>0)
			{
			if (i==1)
				{
				s= s + "<td>"+(aux==1?"":aux)+"<font color='#0000FF'>X</font><sub>"+i+"</sub></td>";
				}
				else
				{
				s= s + "<td>+" +( aux==1?"":aux) +"<font color='#0000FF'>X</font><sub>"+i+"</sub></td>";
				}
			}
		else
			{
			s= s + "<td>"+ aux +"<font color='#0000FF'>X</font><sub>"+i+"</sub></td>";
			}
		}
	}
	s= s +"</tr>";
        s= s +"<tr>";
                s= s +"<tr>";
        s= s +"<td>Sujeto a:</td>";
	s= s+"<td></td>";
        for (j=1; j<=novariables+2;j++)
        {
            s= s +"<td></td>";
        }
        s= s +"</tr>";
	for (j=1; j<=norestricciones; j++)
		{
                s= s +"<tr>";
                s= s +"<td></td>";
		for (i=1; i<=novariables; i++)
			{
			aux = document.getElementById("txtr"+j+"x"+i).value;
			if (aux!=0)
				{
				if (aux>0)
					{
						if (i==1 )
            {
              if (aux !=1){
                s= s + "<td>"+aux + "<font color='#0000FF'>X</font><sub>"+i+"</sub></td>";
              }else{
                s= s + "<td><font color='#0000FF'>X</font><sub>"+i+"</sub></td>";
                }
							}
					  else{
              if (aux!= 1){
                s= s + "<td>+" + aux +"<font color='#0000FF'>X</font><sub>"+i+"</sub></td>";
              }else{
                s= s + "<td>+" + "<font color='#0000FF'>X</font><sub>"+i+"</sub></td>";
              }
						}
					}
				else
					{
						s= s + "<td>"+ aux +"<font color='#0000FF'>X</font><sub>"+i+"</sub></td>";
					}
				}else{
          s= s + "<td></td>";
        }
			}
		aux = document.getElementById("cmbr"+j).value;
		s= s + "<td>" + aux +"</td>" ;
		aux = document.getElementById("txtrhs"+j).value;
		s= s + "<td>"+aux +"</td>";
		s= s +"</tr>";
                }
s= s + "</table>Xi>=0<br><br>Mostrar Iteracion<input type='checkbox' name='chkiteraciones' checked  value='ON' id='chkiteraciones'><br>";
s= s + "<br>";
s= s+"<div><button  class='pure-button pure-button-primary' onclick='resolver()'><i class='fa fa-th'> </i> Resolver </button></div>";
document.getElementById('jmodelo').innerHTML=s;
}

function resolver()
{
    var s;
    var n,m;
    var i,j,k;
    var objetivo;
    var generarreporte;

    //inicializar ls variables...
    n=0;
    m=0;
    i=0;
    j=0;
    k=0;
    s="";
    objetivo=0;
    generarreporte=false;

    n= parseInt(document.getElementById("idnovariables").value);
    m= parseInt(document.getElementById("idnorestricciones").value);

    var a_problema = new Array(m+1);
    for (i=0; i<=m+1; i++)
    {
    a_problema[i] = new Array(n+2);
    }


    for (i=0; i<=m+1; i++)
        {
        for (j=0; j<=n+2; j++)
            {
            a_problema[i][j]= 0;
             }
        }

    //vamos a llenar el arreglo, con los valores digitadores por la persona en la matriz...
    //primero , los coeficientes en la funcion objetivo...

    for (i=1; i<=n; i++)
        {
            if (document.getElementById("txtx"+i).value=="")
            {
                a_problema[0][i]= 0;
            }else
            {
                a_problema[0][i]= parseFloat(document.getElementById("txtx"+i).value);
            }
        }

        for (i=1; i<=m; i++)
        {
            for (j=1; j<=n; j++)
                    {
                        if (document.getElementById("txtr"+i+"x"+j).value=="")
                        {
                            a_problema[i][j]= 0;
                        }else
                        {
                            a_problema[i][j]= parseFloat(document.getElementById("txtr"+i+"x"+j).value);
                        }

                    }
            a_problema[i][n+1]= document.getElementById("cmbr"+i).value;
            if (document.getElementById("txtrhs"+i).value=="")
            {
                a_problema[i][n+2]= 0;
            }else
            {
                a_problema[i][n+2]= parseFloat(document.getElementById("txtrhs"+i).value);
            }

         }

  /*
  s=s + "<br><Table border='1'>";
  for (i=0; i<=m; i++)
    {
         s=s + "<tr>";
        for (j=0; j<=n+2; j++)
        {
             s=s + "<td>" +  a_problema[i][j] + "</td>";
        }
        s=s + "</tr>";
    }
    s=s + "</table>";
    */

    //inicializar...

    var p= new jsimplex("jsolucion");

    document.getElementById("jsolucion").innerHTML="";
    if (document.getElementById("idoptmaximizar").checked==true)
    {
        p.maximizar=true;
    }else
    {
        p.maximizar=false;
    }

    p.documentar = document.getElementById("chkiteraciones").checked;

    p.novariables= n;
    p.norestricciones = m;
    p.problema = a_problema;
    //p.normalizar();
    //p.calcularzeta();
    //i=p.quienentra();
    //j=p.quiensale(i);
    //p.documentarmatrix();
    //p.gauss(j,i);
    //p.calcularzeta();
    //i=p.quienentra();
    //j=p.quiensale(i);
    //p.documentarmatrix();
    //p.gauss(j,i);
    //p.calcularzeta();
    // p.documentarmatrix();
    p.solucionar();

}
