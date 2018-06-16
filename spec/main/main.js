function buttonclick() {

    var sum = 0;
    var first01value = document.getElementById("first01");
    if (first01value.value == "统一建模语言") {
        sum += 5;
    }

    var first02value = document.getElementById("first02");
    var first03value = document.getElementById("first03");
    var first04value = document.getElementById("first04");
    var a = [];
    a.push(first02value.value);
    a.push(first03value.value);
    a.push(first04value.value);
    if(a.includes("继承性"))
    {
        sum+=5;
    }
    if(a.includes("多态性"))
    {
        sum+=5;
    }

    if(a.indexOf("封装性")!=-1)
    {
        sum+=5;
    }

    var second01value = document.getElementsByName("s1");
    if (second01value[1].checked) {
        sum += 10;
    }

    var second02value = document.getElementsByName("s2");
    if (second02value[0].checked) {
        sum += 10;
    }

    var third01value = document.getElementsByName("s5");
    if (third01value[0].checked && third01value[1].checked && (!third01value[2].checked) && third01value[3].checked) {
        sum += 10;
    }

    var third02value = document.getElementsByName("s6");
    if (third02value[0].checked && third02value[1].checked && third02value[2].checked && !third02value[3].checked) {
        sum += 10;
    }

    var forth01value = document.getElementsByName("s3");
    if (forth01value[1].checked) {
        sum += 10;
    }

    var forth02value = document.getElementsByName("s4");
    if (forth02value[0].checked) {
        sum += 10;
    }

    var fifth01value = document.getElementById("fifth01");
    if (fifth01value.value == "模型是对现实世界的简化和抽象，模型是对所研究的系统、过程、事物或概念的一种表现形式。可以是物理实体；可以是某种图形；或者是一种数学表达式。") {
        sum += 20;
    }
    alert(sum);
}