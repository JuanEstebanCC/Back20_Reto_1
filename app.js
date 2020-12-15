var ArbolNavidad = document.getElementById("ArbolNavidad");
var output="";
var limite=30; 
var middle=limite/2;
for(i=0; i<middle; i++){
  for(j=0; j<limite; j++){
    if(j==middle){
      if(i==0){
        output +="0";
      }else{
        output +="0";
      }
    }else{

      if(j>=(middle-i) && j<=(middle+i) ){
        output +="1";
      }else{
        output +="&nbsp;&nbsp;";
      }
    }
  }
  ArbolNavidad.innerHTML +=output + "<br>";
  output=""; 
}


for(i=0;i<limite; i++){
  if(i==(middle-1)){
    output +="0100100";
  }else{
    if(i==limite/3-5){
    	output +="&nbsp;";
    }else{
    	output +="&nbsp;&nbsp;";
    }
  }
  if(i==(middle+2)){
  	output +="&nbsp;&nbsp;&nbsp;";
  }

}

ArbolNavidad.innerHTML +=output + "<br>";
