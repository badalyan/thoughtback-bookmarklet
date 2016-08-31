(function(){

	// This is the minimum version of jQuery we want
	var v = "1.3.2";

	// Does the webpage already have jQuery installed? If not, inject it into the webpage
	if (window.jQuery === undefined || window.jQuery.fn.jquery < v) {
		var done = false;
		var script = document.createElement("script");
		script.src = "https://ajax.googleapis.com/ajax/libs/jquery/" + v + "/jquery.min.js";
		script.onload = script.onreadystatechange = function(){
			if (!done && (!this.readyState || this.readyState == "loaded" || this.readyState == "complete")) {
				done = true;

            // jQuery is injected, so now let's run our main function
				initMyBookmarklet();

			}
		};
		document.getElementsByTagName("head")[0].appendChild(script);
	}

   // If jQuery is already installed, just run our main function
   else {
		initMyBookmarklet();
	}




   // Our main function: grab the text and open our new window
   function initMyBookmarklet() {

			// Get selected text. If none, allow user to input custom text
			var s = "";
			s = getSelText();
			if(s == "") {
				var s = prompt('Enter your new thought');
			}

         // Set width, height, and center location of the popup window
			var w = 560,
        	h = 225,
        	l = Math.round((screen.width - w) / 2),
        	t = Math.round((screen.height - h) / 2),
        	d = document;

         // Open the new window with the predefined parameters
			window.open('https://thoughtback.com/b/?s='+s, '', 'left='
			+l+ ',top=' + (t > 0 ? t : 0) + ',width='
			+w+ ',height='
			+h+ ',personalbar=0,toolbar=0,scrollbars=0,resizable=1');

         // Function: see if the user selected text
         function getSelText() {
            var SelText = '';
            if (window.getSelection) {
               SelText = window.getSelection();
            } else if (document.getSelection) {
               SelText = document.getSelection();
            } else if (document.selection) {
               SelText = document.selection.createRange().text;
            }
            return SelText;
         }
	}


})();
