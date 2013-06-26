<script>
/* Sets up auto-linker configuration for Universal Analytics 
 *  Trigger: the "found-tracker" event from the "find-tracker-by-id.js" tag.
 *  Macro: {{tracker name}} is the "trackerName" attribute from the "found-tracker" event.
 */


ga({{tracker name}} + '.require', 'linker');
ga({{tracker name}} + '.linker:autoLink', [ 'myotherdomain.com' ]);

</script>
