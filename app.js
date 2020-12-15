var ChristmasTree = document.getElementById("ChristmasTree");
var hash="#";
var output="";
var limit=30; //Must be even number to get a star!
var middle=limit/2;
for(i=0; i<middle; i++){
  for(j=0; j<limit; j++){
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
  //console.log(output);
  ChristmasTree.innerHTML +=output + "<br>";
  output=""; //reset
}

//Trunk and presents:
for(i=0;i<limit; i++){
  if(i==(middle-1)){
    output +="0100100";
  }else{
    if(i==limit/3-5){
    	output +="&nbsp;";
    }else{
    	output +="&nbsp;&nbsp;";
    }
  }
  if(i==(middle+2)){
  	output +="&nbsp;&nbsp;&nbsp;";
  }

}

ChristmasTree.innerHTML +=output + "<br>";