# DailyMotion
Simple sample integration with DailyMotion

## How it works
open javascript\dailymotion.js and update the following:

Line 8: Replace [username-or-id] with the username of the DailyMotion user. If necessary, update the fields that are returned as well as things like limits (no limit specified means 10 results will be returned).

Line 17: Replace [path-to-your-item-here] with the path to the parent item holding all video items, replacing the '/' character with %2F and spaces with %20. 

Line 22: Replace [your-template-id-here] with the ID of your template to base the video items on. The fields specified in lines 20-25 are dependent on the field names in the template as well as the fields specified in the URL on line 7.

**Important** 
Make sure you specify your Content-Security-Policy as well by adding: 
connect-src 'self' https://*.dailymotion.com/;
(or similar). 
