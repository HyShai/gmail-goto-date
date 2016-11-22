'use strict';
var options = { 
	inline: true,
	onChange: (selectedDates, dateStr, instance) => {
		chrome.tabs.query({currentWindow: true, active: true}, function(tabs){
		    const current_url = new URL(tabs[0].url);
		    //const search_string = `search/before%3A${moment(dateStr).add(1, 'day').format("YYYY-MM-DD")}%20and%20after%3A${moment(dateStr).subtract(1, 'day').format("YYYY-MM-DD")}`;
		    const search_string = `search/before%3A${moment(dateStr).add(1, 'day').format("YYYY-MM-DD")}%20and%20after%3A${moment(dateStr).format("YYYY-MM-DD")}`;
		    let url = 'https://'
		    switch(current_url.hostname){
		    	case 'mail.google.com':
		    		url += `${current_url.hostname} ${current_url.pathname} '#'`;
		    		break;
		    	case 'inbox.google.com':
		    		url += (current_url.hostname + '/');
		    		break;
		    }
		    url += search_string;
		    chrome.tabs.update({
		         url: url
		    });
		    window.close();
		});
		
    },
 }
flatpickr(".flatpickr", options);