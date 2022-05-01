const inputBox = document.querySelector(".inputText input");
const addBtn = document.querySelector(".inputText button");
const todoList = document.querySelector(".todoList");
clearAll();


inputBox.onkeyup = ()=>{
      let userEnteredValue = inputBox.value;
      if(userEnteredValue.trim() != 0){ 
        addBtn.classList.add("active");
      }else{
        addBtn.classList.remove("active");
      }
    }

addBtn.onclick = ()=>{
      let userData = inputBox.value;
      let getLocalStorage = localStorage.getItem("New todo");
      if(getLocalStorage == null){
          listArr = [];  
      }
      else{
            listArr=JSON.parse(getLocalStorage);
      }
      listArr.push(userData);
      localStorage.setItem("New todo", JSON.stringify(listArr));
    showTasks();
}

function showTasks(){
      let getLocalStorage = localStorage.getItem("New todo");
      if(getLocalStorage === null){
          listArray = [];  
      }
      else{
            listArray =JSON.parse(getLocalStorage);
      }
      let newLiTag ="";
      listArray.forEach((element, index) => {
            newLiTag =`<li> ${element} <span onclick="deleteTask(${index})"><i class="fas fa-trash"></i></span></li>`+newLiTag;
      });
      let arrLen = listArray.length;
      document.querySelector(".remaininginfo").innerHTML=arrLen;

      todoList.innerHTML = newLiTag;
      inputBox.value="";
}


function deleteTask(index){
      let getLocalStorage = localStorage.getItem("New todo");
      listArray=JSON.parse(getLocalStorage);
      listArray.splice(index,1);
      localStorage.setItem("New todo", JSON.stringify(listArray));
      showTasks();
}
function clearAll(){
      localStorage.clear();
      showTasks();
}

