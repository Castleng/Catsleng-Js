function terminal(selector){this.element=document.querySelector(selector);this.leng=function(a){console.log(a);}
return this;}function alarm(selector){this.element=document.querySelector(selector);this.leng=function(b){alert(b);}
return this;}function text(selector){this.element=document.querySelector(selector);this.leng=function(c){this.element.innerHTML=c;}
return this;}function variable(selector){this.element=document.querySelector(selector);this.leng=function(ç){var variant = ç;}
return this;}function s(selector){this.element=document.querySelector(selector);this.leng=function(d){}
return this;}
