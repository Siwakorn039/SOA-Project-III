$(function () {
    $.ajax({

        //CP1. Complete Ajax Code to GET ALL pin data 
        url: 'https://soaproductapi.herokuapp.com/products',
        method: 'GET'

    }).then(function (data) {

        addNewRow(data)
    });

    function addNewRow(data) {

        for (var i = 0; i < data.length; i++) {
           //var col ='<tr><td>' + data[i].id + '</td><tr>'+'<tr><td>' + data[i].name + '</td><tr>' +'<tr><td>'+ '<img text-align: center; src="'+data[i].photo+'" '+'<tr><td>' + data[i].description + '</td><tr>' + '</td><tr>'+'<tr><td>' + data[i].price + '</td></tr>';
            //var cols = '<div style="border:solid; margin:5px;">' +'<br>' + data[i].id + '</br>'+'<br style="text-align:center;">' + data[i].name + '</br>' +'<br>'+ '<img src="'+data[i].photo+'" style="width:100px;height:120px;text-align:center;">'+'<br>' + data[i].description + '</br>' + '</br>'+'<br>' + data[i].price + '</br>'+'<br>' + data[i].weight + '</br>'+'</div>';
            var cols = '<tr><td>' + data[i].id + '</td><td>' + '<img src="'+data[i].photo+'" style="width:100px;height:120px;">' + '</td><td>' + data[i].name + '</a></td><td>' + data[i].price + '</td><td>' + data[i].weight + '</td></tr>';
            $('#productlist').append(cols);
        }

    }

});