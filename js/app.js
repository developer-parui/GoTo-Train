$(document).ready(function(){

$('#search_trains').click(function () {
	let source_station = $('#source_station').val();
	let destination_station = $('#destination_station').val();


	$.ajax({
		url:"https://indianrailapi.com/api/v2/TrainBetweenStation/apikey/a02e61eb431c978e5bac029200583aad/From/" + source_station +"/To/"+ destination_station ,

		success:function(data) {
			//console.log(data);
			console.log(data.Trains);

           let blob;
                for(let i=0; i<data.Trains;i++){
                    blob= blob + `<tr><td>${data.Trains[i].TrainNo}</td><td>${data.Trains[i].TrainName}</td><td>${data.Trains[i].TravelTime}</td><td>${data.Trains[i].TrainType}</td></tr>`;
                }

                $('#display_trains').html(`
                <table class="table">
                    <tr>
                        <th>Train Number</th>
                        <th>Train Name</th>
                        <th>Duration</th>
                        <th>Train Type</th>
                    </tr>
                    ${blob}
                </table>
                `);

		} ,

		error:function(error){
			alert("some error");
			console.log(error);
		}
	})
});




 $('#fetch_stations').click(function () {
        let trainNo=$('#train_no').val();

        $.ajax({
            url:"https://indianrailapi.com/api/v2/TrainSchedule/apikey/a02e61eb431c978e5bac029200583aad/TrainNumber/" + trainNo,
            success:function (data) {
                console.log(data);
       
      let textBlob;
                for(let i=0; i<data.Route.length;i++){
                    textBlob= textBlob + `<tr><td>${data.Route[i].StationName}</td><td>${data.Route[i].ArrivalTime}</td><td>${data.Route[i].DepartureTime}</td><td>${data.Route[i].Distance} kms</td></tr>`;
                }

                $('#display_stations').html(`
                <table class="table">
                    <tr>
                        <th>Station Name</th>
                        <th>Arrival Time</th>
                        <th>Departure Time</th>
                        <th>Distance Travelled</th>
                    </tr>
                    ${textBlob}
                </table>
                `);

        },
                	error:function(error){
			alert("some error");
			console.log(error);
		}

	})

    })

});