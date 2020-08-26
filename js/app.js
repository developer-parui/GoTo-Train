$(document).ready(function(){




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
