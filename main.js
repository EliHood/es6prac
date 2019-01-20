function markdownParser (markdown) {
  
    if(markdown == "" || markdown == null || markdown === undefined){
      return markdown;
    }
    
    if(markdown.indexOf(' ') < 0){
      return markdown
    }
    
    let stringArray = new Array();
    stringArray = markdown.trim().split("");
    
    if((stringArray[0])[0].indexOf('#') < 0){
      return markdown;
    }
    
    let count = (stringArray[0].match(/#/g) || []).length;
    let stringArrayCount = stringArray.length;
    let result = "";
    
    if(count > 0 && stringArrayCount > 0 ){
      for(let i =1; i < stringArrayCount; i++){
        result = result + " " + stringArray[i];
      }
      
      result = result.trim();
    
    
    switch(true){
        
      case(count == 1):
          result ="<h1>" + result + "</h1>";
        break;
        
      case(count == 2):
          result ="<h2>" + result + "</h2>";
        break;    
        
      case(count == 3):
          result ="<h3>" + result + "</h3>";
        break;       
       
      case(count == 4):
          result ="<h4>" + result + "</h4>";
        break; 
               
      case(count == 5):
          result ="<h5>" + result + "</h5>";
        break;  
        
            
      case(count == 6):
          result ="<h6>" + result + "</h6>";
        break; 
        
      default:
        return markdown;
        break;
        
    }
    return result;
      
   }
    
    return markdown;
    
  }

  owl = markdownParser("### header");
  console.log(owl)