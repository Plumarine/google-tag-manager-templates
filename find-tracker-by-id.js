<script>
/* Insert your Web Property IDs at the end of this script (in closure arguments) */

(function(ids){
  /* This method polls Universal trackers, and when a matching ID
     is found, it signals the DataLayer with the corresponding 
     name and tracker object, so that custom HTML tags can bind
     to trackers otherwise configured in GTM. This loop will send
     the event "found-tracker" into the GTM datalayer, once per
     tracker configured below (at closure arguments).
   */

  function resolveIDtoName(ID){
    var iterations = 10, // iterations to try after GA finally loads
        try_frequency = 50; // how often to try (again) to find the tracker
  
    var _ga = (window['ga']), _dl = (window['dataLayer']); // reference to global UA handler.

    function findTracker(id, _ga){
      var trackers = _ga['getAll'](), j = trackers.length;
      while(j--){
        if(trackers[j].get('trackingId') == id){
          _dl.push({
            event: 'found-tracker',
            tracker: trackers[j],
            trackerId: id,
            trackerName: trackers[j].get('name')
          });
          return true;
        }
      }
      return false;
    }

    // Queue for UA to actually load
    return _ga(function(){

  
      var _t = setInterval(function(){
        
        if(findTracker(ID, window['ga']) || (0 === -- iterations)){
          clearInterval(_t);
          _t = null;
        }

      }, try_frequency);
      

    });

  }


  // Process all IDs passed (closure argument).
  var i = ids.length;

  while(i--){
    resolveIDtoName(ids[i]);
  }


}([ 'UA-XXXXX-Y' ]));

</script>
