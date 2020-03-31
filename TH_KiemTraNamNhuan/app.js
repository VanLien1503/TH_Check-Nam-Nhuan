function checkYear() {
let year=document.getElementById("year").value;
if (year<0){
    alert("Nhập Lại Giá Trị");
}
else if (year%4==0&&year%100==0&&year%400==0){
    document.getElementById("result").innerHTML=year+"&nbsp"+"Năm Nhuận";
}else {
    document.getElementById("result").innerHTML = year + "&nbsp" + "không phải làNăm Nhuận";
}
}
