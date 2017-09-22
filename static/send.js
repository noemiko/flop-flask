$(document).ready(function() {
    $('#plot_submmit').click(function(){

       dates = {'from_date':'12-11-2017',
                'to_date':'16-11-2017'}
       jsondate = JSON.stringify(dates)
          $.ajax({
                type: 'GET',
                contentType: 'application/json; charset=utf-8',
                data: jsondate,
                dataType: 'json',
                url: 'http://localhost:70/get_data',
                success: function(series){
                        console.log(series)
                        onDataReceived(series, dates)
		},
                error: function(error) {
                     console.log(error);
            }
            });
    }); 
});
function date_parse(year, month, day) {
        return new Date(year, month - 1, day).getTime();
    }
function onDataReceived(series, dates) {
        var series = [ [date_parse(2000,11,21),3434,], [date_parse(2000,11,22),342343], [date_parse(2000,11,23),34324], ]; 
        $.plot("#placeholder", [series], {
                xaxis: {
                        mode: "time",
                        minTickSize: [1, "day"],
                        min: (date_parse(2000, 11, 21)),
                        max: (date_parse(2000, 11, 23)),
                        twelveHourClock: false
                }
        });
}