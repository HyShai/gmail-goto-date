'use strict';

chrome.runtime.onInstalled.addListener(function (details) {
  console.log('previousVersion', details.previousVersion);
});

chrome.tabs.onUpdated.addListener(function (tabId, changeInfo, tab) {
	var current_url = new URL(tab.url);
	if (current_url.hostname === 'mail.google.com' || current_url.hostname === 'inbox.google.com') 
		chrome.pageAction.show(tabId);
});
