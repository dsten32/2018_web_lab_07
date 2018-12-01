$(document).ready(function () {


console.log(customers);
    var table=document.getElementById('contents')
    for (var i=0;i<customers.length;i++) {
        console.log(customers[i].name);
        let row = table.insertRow();

        let cell_1 = row.insertCell(0);
        cell_1.textContent = customers[i].name;
        let cell_2 = row.insertCell(1);
        cell_2.textContent = customers[i].gender;
        let cell_3 = row.insertCell(2);
        cell_3.textContent = customers[i].year_born;
        let cell_4 = row.insertCell(3);
        cell_4.textContent = customers[i].joined;
        let cell_5 = row.insertCell(4);
        cell_5.textContent = customers[i].num_hires;
    }
    let statsH = table.insertRow();
    cell_1=statsH.insertCell(0);
    cell_1.setAttribute('colspan','5');
    cell_1.textContent="Stats";
    let statsD = table.insertRow();
    cell_1=statsD.insertCell(0);


})

//colspan="5"

// $.ajax({
//     url:'customerdb.js',
//     type:'GET',
//
//     success: function (msg) {
//         var table=document.getElementById('contents')
//         var customerDb=msg;
//
//         // customerDb=JSON.parse(customerDb);
//         // console.log(customerDb);
//         for (var i=0;i<customerDb.length;i++){
//             console.log(customerDb[i].name);
//             // let row=table.insertRow();
//             // let cell_1=row.insertCell(0);
//             // cell_1.textContent=customerDb[i].name;
//             // let cell_2=row.insertCell(1);
//             // cell_2.textContent=customerDb[i].gender;
//             // let cell_3=row.insertCell(2);
//             // cell_3.textContent=customerDb[i].year_born;
//             // let cell_4=row.insertCell(3);
//             // cell_4.textContent=customerDb[i].joined;
//             // let cell_5=row.insertCell(1);
//             // cell_5.textContent=customerDb[i].num_hires;
//         }
//     }
// })



//
//
// var table = document.getElementById("contents");
// for (var property in navigator){
//     navigator[property];
//     let row=table.insertRow();
//     let cell1=row.insertCell(0);
//     cell1.textContent=property;
//     let cell2=row.insertCell(1);
//     cell2.textContent=navigator[property];
// }