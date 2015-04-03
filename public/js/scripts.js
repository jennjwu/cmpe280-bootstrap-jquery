/* JS file for Team Assignment
 * Xiaoli Jiang
 * Jennifer Wu
 * Yulin Ye
 */

$(document).ready(function(){





    /************ Locations page ********************/
    //init map canvas
    var map1 = new GMaps({
        div: '#map1',
        zoom: 12,
        lat: 37.335221,
        lng: -121.881501
    });

    map1.addMarker({
        lat: 37.335221,
        lng: -121.881501
    });

    var map2 = new GMaps({
        div: '#map2',
        zoom: 12,
        lat: 37.782673,
        lng: -122.414280
    });

    map2.addMarker({
        lat: 37.782673,
        lng: -122.414280
    });

});
