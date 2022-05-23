function insert(num){  
      document.form.textview.value = document.form.textview.value+num;
}

function equal(){
      let eq =eval(document.form.textview.value);
      if(eq==undefined){
            eq=0;
      }
      document.form.textview.value = eq;
}
function clean(){
      document.form.textview.value ="";
}
function back(){
      let string = document.form.textview.value ;
      document.form.textview.value = string.substring(0,string.length-1);
}
function percent(){
      let num = document.form.textview.value;
       document.form.textview.value= num/100;
}
function sqrt(){
      let num = document.form.textview.value;
      num=Math.sqrt(num);
      document.form.textview.value=num;
}
function square(){
      let num = document.form.textview.value;
      num= num*num;
      document.form.textview.value=num;
}
function square(){
      let num = document.form.textview.value;
      num= num*num*num;
      document.form.textview.value=num;
}
function fact(){
      let num = document.form.textview.value;
      let answer = 1;
     for(let i =1; i<=num; i++){
           answer*=i;
     }
     document.form.textview.value=answer;
}
function sin(){
      let num = document.form.textview.value;
      document.form.textview.value=Math.sin(num);
}
function cos(){
      let num = document.form.textview.value;
      document.form.textview.value=Math.cos(num);
}
function tan(){
      let num = document.form.textview.value;
      document.form.textview.value=Math.tan(num);
}
function pi(){
      let num = document.form.textview.value;
      document.form.textview.value=num*3.14159265359;
}
function e(){
      let num = document.form.textview.value;
      document.form.textview.value=num*2.71828182846;
}
