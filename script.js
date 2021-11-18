var test=document.getElementById("outcome");
test.addEventListener("mouseover",function(){
    this.innerText="(結果沒考好)";
})
test.addEventListener("mouseout",function(){
    this.innerText="考好就好";
})