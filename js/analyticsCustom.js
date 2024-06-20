/*
  ==================================================
  Last edited by: $Author: Rachit Bhola $
              on: $Date: 20/01/2021   $
  ==================================================
*/

if (typeof BLK === "undefined" || !BLK) {
	var BLK = {};
}

$(document).ready(function () {
	if (BLK.analytics.isSiteValidForAdobe()) {

		BLK.analytics.setCharset();
		BLK.analytics.checkErrorPage();
		BLK.analytics.trackContentEffectiveness();

		s.server = s_account;
		if (s.events === undefined) {
			s.events = '';
		} else {
			s.events = s.events + ',';
		}
		s.events = s.events + "event7";
		s.t();

		// Track Page link
		BLK.analytics.customLinkTracking();
		s.clearVars();
	}
});


BLK.analytics = {


	// check if the site has been set up for adobe analytics
	isSiteValidForAdobe: function () {
		return (typeof adobe_report_suite_id !== 'undefined');
	},
	// function to set variables to track site content effectiveness
	trackContentEffectiveness: function () {
		var currentDate = new Date();
		var dateString = currentDate.getFullYear().toString();
		var currencycode = globalAnalyticsParams.currencycode;
		s.eVar1 = 'D=pageName';
		//set language
		s.prop10 = globalAnalyticsParams.language;
		//set the country
		s.prop11 = globalAnalyticsParams.country;
		// set the usertype i.e. individual,intermediaries or institutional

		//set variable for padlocking
		s.prop7 = 'unsecure';

		if (currentDate.getMonth() + 1 < 10) {
			dateString += '0' + (currentDate.getMonth() + 1).toString();
		} else {
			dateString += (currentDate.getMonth() + 1).toString();
		}
		if (currentDate.getDate() < 10) {
			dateString += '0' + currentDate.getDate().toString();
		} else {
			dateString += currentDate.getDate().toString();
		}

		s.eVar7 = dateString;



		if (currencycode !== 'undefined') {
			s.prop33 = currencycode;
		}

		// variables prop37 & eVar37 need to be populated only in case of uk-dc-clients, dc-lbgi-lite, dc-pension, lbgi, dckc, dcio

		s.eVar41 = window.location;
		s.prop41 = 'D=v41';

		s.eVar107 = location.protocol + '//' + location.host + location.pathname;
	},
	// extract variables from a query string
	getQueryParameter: function (queryString, paramKey) {
		var expr = paramKey + "=([^&]*)";
		var regex = new RegExp(expr, 'i');
		var data = regex.exec(queryString);
		if (data && data[1]) {
			return data[1];
		}
	},

	// set variables for a logged in user
	// set the event which is passed
	setEvent: function (eventVar, eventNme) {
		if (eventVar === 'true') {
			if (s.events === undefined) {
				s.events = '';
			} else {
				s.events = s.events + ',';
			}
			s.events = s.events + eventNme;
		}
	},
	// check if it is error page
	checkErrorPage: function () {
		var page = globalAnalyticsParams.pagename;
		var status = $('#statusCode').val();
		if (page === 'error') {
			s.pageType = "errorPage-" + status;
		}
	},
	// track custom links on the page
	customLinkTracking: function () {
		//Anchors without a 'data-event' attribute override
		$('body').on('click', 'a', function () {
			var result = BLK.analytics.getAdobeInfoFromAnchor(this);
			// Send link Event at this time

			var customLink = $(this).attr('data-custom-link');
			var trackEvent = $(this).attr('data-track-event');
			if (undefined !== customLink) {
				BLK.analytics.customLinkEvent(customLink, 'o');
			} else if (undefined !== trackEvent) {
				BLK.analytics.customLinkEvent(result, 'o', trackEvent);
			} else {
				var href = $(this).attr('href');
				var filePattern = /\.(pdf|xls|csv)$/i;
				var url = ''
				// Link call has to be made irrespective of it being a Download link
				BLK.analytics.customLinkEvent(result, 'o');
				if (filePattern.test(href)) {
					// Download event call to be made only if it is a download link
					url = BLK.analytics.convertURL(href);
				}
			}
		});
	},

	// Send actual event to Adobe for capturing Custom Links
	customLinkEvent: function (data, type, events) {
		if (BLK.analytics.isSiteValidForAdobe() && data) {
			s.linkTrackVars = 'eVar13,prop13,prop41,eVar41,eVar107,eVar1,server,events';
			s.linkTrackEvents = 'event15';
			s.eVar41 = window.location;
			s.prop41 = 'D=v41';
			s.eVar1 = s.pageName;
			s.eVar107 = location.protocol + '//' + location.host + location.pathname;
			s.events = 'event15';

			if ((undefined !== events) && (events.match(/^(event([1-9][0-9]?|100))(,event([1-9][0-9]?|100))*$/))) {
				s.linkTrackEvents = s.linkTrackEvents + ',' + events;
				s.events = s.events + ',' + events;
			}

			s.eVar13 = data;
			s.prop13 = 'D=v13';
			s.server = s_account;
			s.tl(this, type, data);

			// Clear the params after custom link event to solve the
			// issue where we might have another Ajax call after this call
			// Since the params are normally only getting during page loads
			s.eVar13 = null;
		}
	},
	// get content from the anchor
	getAdobeInfoFromAnchor: function (anchor) {
		var linkName = '';
		var linkText = '';

		//Text link
		linkText = $.trim($(anchor).text());
		if (linkText.length) {
			if (linkName.length) {
				linkName += ':';
			}
			linkName += linkText;
		}
		linkName = linkName.replace(/\n/g, '');
		return linkName.toLowerCase();
	},
	// Setting the charset
	setCharset: function () {
		s.charSet = 'UTF-8';
	},
	// convert relative url to absolute url
	convertURL: function (url) {
		var a = document.createElement('a');
		a.href = url;
		return a.href;
	}
};