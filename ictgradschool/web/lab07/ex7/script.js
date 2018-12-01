$(document).ready(function () {

    var numFem=0,
        numMal=0,
        numYoung=0,
        numOld=0,
        numSOld=0,
        goldTier=0,
        silverTier=0,
        bronzeTier=0;



    //get numbers of females and males.
    for (let i = 0; i < customers.length; i++) {
        if (customers[i].gender==='female'){
            numFem++;
        } else if (customers[i].gender==='male'){
            numMal++;
        }
    }



    //get numbers in ages groups.
    var currYear = new Date().getFullYear();
// console.log(currYear);
    for (let i = 0; i < customers.length; i++) {
        if (currYear-customers[i].year_born>=65){
            numSOld++;
        } else if (currYear-customers[i].year_born>=31){
            numOld++;
        } else if (currYear-customers[i].year_born>=0){
            numYoung++;
        }
    }

//    get loyally tier
    var gtiersNames="";
    for (let i = 0; i < customers.length; i++) {
        if (customers[i].num_hires/((currYear-customers[i].joined)*52)>=4){
            goldTier++;
            gtiersNames+=customers[i].name+", ";
        } else if (customers[i].num_hires/((currYear-customers[i].joined)*52)>=1){
            silverTier++;
        } else if (customers[i].num_hires/((currYear-customers[i].joined)*52)<1){
            bronzeTier++;
        }
    }

//these people should be dead..
    var deadPool="";
    for (let i = 0; i < customers.length; i++) {
        if (currYear-customers[i].year_born>=95){
            deadPool+=customers[i].name+", ";
        }
    }



// console.log(customers);
    var table=document.getElementById('contents')
    for (let i=0;i<customers.length;i++) {
        // console.log(customers[i].name);
        let row = table.insertRow();

        var cell_1 = row.insertCell(0);
        cell_1.textContent = customers[i].name;
        var cell_2 = row.insertCell(1);
        cell_2.textContent = customers[i].gender;
        var cell_3 = row.insertCell(2);
        cell_3.textContent = customers[i].year_born;
        let cell_4 = row.insertCell(3);
        cell_4.textContent = customers[i].joined;
        let cell_5 = row.insertCell(4);
        cell_5.textContent = customers[i].num_hires;
    }
    //stats heading row.
    let statsH = table.insertRow();
    cell_1=statsH.insertCell(0);
    cell_1.setAttribute('colspan','5');
    cell_1.textContent="Rental Store Statistics";

    //stats data part. total females
    let statsD = table.insertRow();
    cell_1=statsD.insertCell(0);
    cell_1.textContent="Total Females";
    cell_2=statsD.insertCell(1);
    cell_2.setAttribute('colspan','4');
    cell_2.textContent=numFem;

    //stats num males
    statsD = table.insertRow();
    cell_1=statsD.insertCell(0);
    cell_1.textContent="Total Males";
    cell_2=statsD.insertCell(1);
    cell_2.setAttribute('colspan','4');
    cell_2.textContent=numMal;

    //num <30
    statsD = table.insertRow();
    cell_1=statsD.insertCell(0);
    cell_1.textContent="Total 0-30";
    cell_2=statsD.insertCell(1);
    cell_2.setAttribute('colspan','4');
    cell_2.textContent=numYoung;

    //num <64
    statsD = table.insertRow();
    cell_1=statsD.insertCell(0);
    cell_1.textContent="Total 31-64";
    cell_2=statsD.insertCell(1);
    cell_2.setAttribute('colspan','4');
    cell_2.textContent=numOld;

    //num >=65
    statsD = table.insertRow();
    cell_1=statsD.insertCell(0);
    cell_1.textContent="Total >64";
    cell_2=statsD.insertCell(1);
    cell_2.setAttribute('colspan','4');
    cell_2.textContent=numSOld;

    //gold tier
    statsD = table.insertRow();
    cell_1=statsD.insertCell(0);
    cell_1.textContent="Gold Level Members";
    cell_2=statsD.insertCell(1);
    cell_2.setAttribute('colspan','4');
    cell_2.textContent=goldTier+": "+gtiersNames.substring(0,gtiersNames.length-2)+". Congratulations guys";

    //silver tier
    statsD = table.insertRow();
    cell_1=statsD.insertCell(0);
    cell_1.textContent="Silver Level Members";
    cell_2=statsD.insertCell(1);
    cell_2.setAttribute('colspan','4');
    cell_2.textContent=silverTier;

    //bronze tier
    statsD = table.insertRow();
    cell_1=statsD.insertCell(0);
    cell_1.textContent="Bronze Level Members";
    cell_2=statsD.insertCell(1);
    cell_2.setAttribute('colspan','4');
    cell_2.textContent=bronzeTier;

    //deads
    statsD = table.insertRow();
    cell_1=statsD.insertCell(0);
    cell_1.textContent="These guys should be dead";
    cell_2=statsD.insertCell(1);
    cell_2.setAttribute('colspan','4');
    cell_2.textContent=deadPool.substring(0,deadPool.length-2);


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