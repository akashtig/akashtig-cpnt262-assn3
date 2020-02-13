//initial latitude and longitude
let lat=lon=null

//calgary public libraries api
let url='https://data.calgary.ca/resource/m9y7-ui7j.json'


  // id of the parent list
  let homeList = new Array(18)

  //id of children inside all the libraries
  let info = new Array(18)


//variable that controls the toggle(to open and close the list)
let showDetails = new Array(18).fill(false)
fetch(url)
  .then(response=>response.json())
  .then(y=>{


    //mapbox token and api
      L.mapbox.accessToken = 'pk.eyJ1IjoiYWthc2h0aWciLCJhIjoiY2s2ZW4xdzV0MDIxZTNsbXc3ZTF2YTBtbSJ9.31L25HIC2wtKbodEZ6jSkg';
      let map = L.mapbox.map('map')
        .setView([51.0255318,-114.0947876 ], 11)
        .addLayer(L.mapbox.styleLayer('mapbox://styles/mapbox/streets-v11'));
            
      let myLayer =  new Array(18)

    

      let geojson = new Array(18).fill(null)
      let i=0
      let list=`<ul>`
      for(x of y)
      {
        geojson[i]={
          type: 'FeatureCollection',
          features: [{
              type: 'Feature',
              properties: {
                  title: x.library,
                  'marker-color': '#f86767',
                  'marker-size': 'large',
                  'marker-symbol': 'star',
                  url: `#${(x.library).replace(/\s/g,'')}`
                 

              },
              
              geometry: {
                  type: 'Point',
                  
                  coordinates: [x.location.longitude,x.location.latitude ]
              }
          }]
        }
        
        info[i]=(x.postal_code).replace(/\s/g,'')
        homeList[i]=(x.library).replace(/\s/g,'')

        list=list+`<li class='parent_list' id='${homeList[i]}' onclick='details(${i})'><div class='parent'><p>${x.library}</p><p>${x.phone_number}</p></div>
                      <ul>
                        <li class='info' id='${info[i]}' > <div></div>   <div style="text-align:center; font-weight:600;">Open</div>   <div style="text-align:center; font-weight:600;">Close</div>
                                          <div>Monday</div> <div class='open_time'>${x.monday_open}</div>       <div class='close_time'>${x.monday_close}</div>
                                          <div>Tuesday</div> <div class='open_time'>${x.tuesday_open}</div>     <div class='close_time'>${x.tuesday_close}</div>
                                          <div>Wednesday</div> <div class='open_time'>${x.wednesday_open}</div> <div class='close_time'>${x.wednesday_close}</div>
                                          <div>Thursday</div> <div class='open_time'>${x.thursday_open}</div>   <div class='close_time'>${x.thursday_close}</div>
                                          <div>Friday</div> <div class='open_time'>${x.friday_open}</div>       <div class='close_time'>${x.friday_close}</div>
                                          <div>Saturday</div> <div class='open_time'>${x.saturday_open}</div>   <div class='close_time'>${x.saturday_close}</div>
                                          <div>Sunday</div> <div class='open_time'>${x.sunday_open}</div>       <div class='close_time'>${x.sunday_close}</div>             
                        </li>                  
                      </ul>
                    </li>`
                  


                  i++
      }



      list+=`</ul>`
      document.querySelector('aside').innerHTML=list
      console.log(geojson)
     

      console.log(`#${homeList[0]}`)

      let j=0
      for(x of geojson)
      {
        myLayer[j]=L.mapbox.featureLayer().addTo(map)
        myLayer[j].setGeoJSON(x);
        
        
      j++
      }

      //functions that open the list items when markers on the map are selected
      myLayer[0].on('click', function(e) {
        details(0)
        open(e.layer.feature.properties.url,'_self');

      })

      myLayer[1].on('click', function(e) {
        details(1)
        open(e.layer.feature.properties.url,'_self');

      })

      myLayer[2].on('click', function(e) {
        details(2)
        open(e.layer.feature.properties.url,'_self');

      })

      myLayer[3].on('click', function(e) {
        details(3)
        open(e.layer.feature.properties.url,'_self');

      })

      myLayer[4].on('click', function(e) {
        details(4)
        open(e.layer.feature.properties.url,'_self');
      })

      myLayer[5].on('click', function(e) {
        details(5)
        open(e.layer.feature.properties.url,'_self');
      })

      myLayer[6].on('click', function(e) {
        details(6)
        open(e.layer.feature.properties.url,'_self');
      })

      myLayer[7].on('click', function(e) {
        details(7)
        open(e.layer.feature.properties.url,'_self');
      })

      myLayer[8].on('click', function(e) {
        details(8)
        open(e.layer.feature.properties.url,'_self');
      })

      myLayer[9].on('click', function(e) {
        details(9)
        open(e.layer.feature.properties.url,'_self');
      })

      myLayer[10].on('click', function(e) {
        details(10)
        open(e.layer.feature.properties.url,'_self');
      })

      myLayer[11].on('click', function(e) {
        details(11)
        open(e.layer.feature.properties.url,'_self');
      })

      myLayer[12].on('click', function(e) {
        details(12)
        open(e.layer.feature.properties.url,'_self');
      })

      myLayer[13].on('click', function(e) {
        details(13)
        open(e.layer.feature.properties.url,'_self');
      })

      myLayer[14].on('click', function(e) {
        details(14)
        open(e.layer.feature.properties.url,'_self');
      })

      myLayer[15].on('click', function(e) {
        details(15)
        open(e.layer.feature.properties.url,'_self');
      })

      myLayer[16].on('click', function(e) {
        details(16)
        open(e.layer.feature.properties.url,'_self');
      })

      myLayer[17].on('click', function(e) {
        details(17)
        open(e.layer.feature.properties.url,'_self');
      })




      let myLocation = document.querySelector('#locateMe');


      let myLocationLayer = L.mapbox.featureLayer().addTo(map);

      // This uses the HTML5 geolocation API, which is available on
      // most mobile browsers and modern browsers, but not in Internet Explorer
      //
      // See this chart of compatibility for details:
      // http://caniuse.com/#feat=geolocation
      if (!navigator.geolocation) {
          geolocate.innerHTML = 'Geolocation is not available';
      } else {
          
          myLocation.addEventListener('click',function(e){
            e.preventDefault();
            e.stopPropagation();
            map.locate();
          })
      }

      // Once we've got a position, zoom and center the map
      // on it, and add a single marker.
      map.on('locationfound', function(e) {
          map.fitBounds(e.bounds);

          myLocationLayer.setGeoJSON({
              type: 'Feature',
              geometry: {
                  type: 'Point',
                  coordinates: [e.latlng.lng, e.latlng.lat]
              },
              properties: {
                  'title': 'Here I am!',
                  'marker-color': '#0000ff',
                  'marker-symbol': 'star'
              }
          });

          // And hide the geolocation button
          myLocation.parentNode.removeChild(myLocation);
      });

      // If the user chooses not to allow their location
      // to be shared, display an error message.
      map.on('locationerror', function() {
          myLocation.innerHTML = 'Position could not be found';
      });



 })
 //function that expands the list items
 function details(index){
  info_list=document.querySelector(`#${info[index]}`)
  if(showDetails[index]){
    info_list.className='info'
    showDetails[index]=false    
  }
  else{
    info_list.className='info_open'
    showDetails[index]=true
  }
}
