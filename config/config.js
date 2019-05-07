/* Magic Mirror Config Sample
 *
 * By Michael Teeuw http://michaelteeuw.nl
 * MIT Licensed.
 *
 * For more information how you can configurate this file
 * See https://github.com/MichMich/MagicMirror#configuration
 *
 */

var config = {
	address: "127.0.0.1", // Address to listen on, can be:
	                      // - "localhost", "127.0.0.1", "::1" to listen on loopback interface
	                      // - another specific IPv4/6 to listen on a specific interface
	                      // - "", "0.0.0.0", "::" to listen on any interface
	                      // Default, when address config is left out, is "localhost"
	port: 9000,
	
    ipWhitelist: ["127.0.0.1", "::ffff:127.0.0.1", "::1","172.16.99.254", "::ffff:172.16.99.254", "::1"], // Set [] to allow all IP addresses
	                                                       // or add a specific IPv4 of 192.168.1.5 :
	                                                       // ["127.0.0.1", "::ffff:127.0.0.1", "::1", "::ffff:192.168.1.5"],
	                                                       // or IPv4 range of 192.168.3.0 --> 192.168.3.15 use CIDR format :
	                                                       // ["127.0.0.1", "::ffff:127.0.0.1", "::1", "::ffff:192.168.3.0/28"],

	language: "en",
	timeFormat: 24,
	units: "metric",

	modules: [
		{
			module: "MMM-Modulebar",
			position: "center", // This can be any of the regions.
			header: "헤어스타일", // Optional
			classes: "default everyone", // Optional
			config: {
		
				// See 'Configuration options' for more information.
			}
		},
		{
			module: "MMM-Modulebar1",
			position: "center", // This can be any of the regions.
			header: "남자헤어", // Optional
			
			classes: "default everyone", // Optional
			config: {
				hidden : "true",
				// See 'Configuration options' for more information.
			}
		},
		{
			module: "MMM-Modulebar2",
			position: "center", // This can be any of the regions.
			header: "여자헤어", // Optional
			
			classes: "default everyone", // Optional
			config: {
				hidden : "true",
				// See 'Configuration options' for more information.
			}
		},
		{
			module: 'MMM-iFrame3',
			position: 'upper_third',	// This can be any of the regions.
			hide : "true",
			config: {
				// See 'Configuration options' for more information.
					url: ["http://s3.us-east-2.amazonaws.com/beautymirror.com/demo/남자컷댄디.html"],  // as many URLs you want or you can just ["ENTER IN URL"] if single URL.
					updateInterval: 0.5 * 60 * 1000, // rotate URLs every 30 seconds
					width: "2000", // width of iframe
					height: "2000", // height of iframe
					frameWidth: "950", // width of embedded iframe, height is beeing calculated by aspect ratio of iframe		
			}
		},
		{
			module: 'MMM-iFrame4',
			position: 'center',	// This can be any of the regions.
			hide : "true",
			config: {
				// See 'Configuration options' for more information.
					url: ["http://s3.us-east-2.amazonaws.com/beautymirror.com/demo/남자컷리젠트.html"],  // as many URLs you want or you can just ["ENTER IN URL"] if single URL.
					updateInterval: 0.5 * 60 * 1000, // rotate URLs every 30 seconds
					width: "2800", // width of iframe
					height: "2800", // height of iframe
					frameWidth: "950", // width of embedded iframe, height is beeing calculated by aspect ratio of iframe		
			}
		},
		{
			module: 'MMM-iFrame5',
			position: 'center',	// This can be any of the regions.
			hide : "true",
			config: {
				// See 'Configuration options' for more information.
					url: ["http://s3.us-east-2.amazonaws.com/beautymirror.com/demo/남자컷투블럭.html"],  // as many URLs you want or you can just ["ENTER IN URL"] if single URL.
					updateInterval: 0.5 * 60 * 1000, // rotate URLs every 30 seconds
					width: "2800", // width of iframe
					height: "2800", // height of iframe
					frameWidth: "950", // width of embedded iframe, height is beeing calculated by aspect ratio of iframe		
			}
		},
		{
			module: 'MMM-iFrame6',
			position: 'center',	// This can be any of the regions.
			hide : "true",
			config: {
				// See 'Configuration options' for more information.
					url: ["http://s3.us-east-2.amazonaws.com/beautymirror.com/demo/남자컷포마드.html"],  // as many URLs you want or you can just ["ENTER IN URL"] if single URL.
					updateInterval: 0.5 * 60 * 1000, // rotate URLs every 30 seconds
					width: "2800", // width of iframe
					height: "2800", // height of iframe
					frameWidth: "950", // width of embedded iframe, height is beeing calculated by aspect ratio of iframe		
			}
		},
		{
			module: 'MMM-iFrame7',
			position: 'center',	// This can be any of the regions.
			hide : "true",
			config: {
				// See 'Configuration options' for more information.
					url: ["http://s3.us-east-2.amazonaws.com/beautymirror.com/demo/남자펌가르마.html"],  // as many URLs you want or you can just ["ENTER IN URL"] if single URL.
					updateInterval: 0.5 * 60 * 1000, // rotate URLs every 30 seconds
					width: "2800", // width of iframe
					height: "2800", // height of iframe
					frameWidth: "950", // width of embedded iframe, height is beeing calculated by aspect ratio of iframe		
			}
		},
		{
			module: 'MMM-iFrame8',
			position: 'center',	// This can be any of the regions.
			hide : "true",
			config: {
				// See 'Configuration options' for more information.
					url: ["http://s3.us-east-2.amazonaws.com/beautymirror.com/demo/남자펌리젠트.html"],  // as many URLs you want or you can just ["ENTER IN URL"] if single URL.
					updateInterval: 0.5 * 60 * 1000, // rotate URLs every 30 seconds
					width: "2800", // width of iframe
					height: "2800", // height of iframe
					frameWidth: "950", // width of embedded iframe, height is beeing calculated by aspect ratio of iframe		
			}
		},
		{
			module: 'MMM-iFrame9',
			position: 'center',	// This can be any of the regions.
			hide : "true",
			config: {
				// See 'Configuration options' for more information.
					url: ["http://s3.us-east-2.amazonaws.com/beautymirror.com/demo/남자펌아이롱.html"],  // as many URLs you want or you can just ["ENTER IN URL"] if single URL.
					updateInterval: 0.5 * 60 * 1000, // rotate URLs every 30 seconds
					width: "2800", // width of iframe
					height: "2800", // height of iframe
					frameWidth: "950", // width of embedded iframe, height is beeing calculated by aspect ratio of iframe		
			}
		},
		{
			module: 'MMM-iFrame10',
			position: 'center',	// This can be any of the regions.
			hide : "true",
			config: {
				// See 'Configuration options' for more information.
					url: ["http://s3.us-east-2.amazonaws.com/beautymirror.com/demo/여자컷레이어드.html"],  // as many URLs you want or you can just ["ENTER IN URL"] if single URL.
					updateInterval: 0.5 * 60 * 1000, // rotate URLs every 30 seconds
					width: "2800", // width of iframe
					height: "2800", // height of iframe
					frameWidth: "950", // width of embedded iframe, height is beeing calculated by aspect ratio of iframe		
			}
		},
		{
			module: 'MMM-iFrame11',
			position: 'center',	// This can be any of the regions.
			hide : "true",
			config: {
				// See 'Configuration options' for more information.
					url: ["http://s3.us-east-2.amazonaws.com/beautymirror.com/demo/여자컷보브.html"],  // as many URLs you want or you can just ["ENTER IN URL"] if single URL.
					updateInterval: 0.5 * 60 * 1000, // rotate URLs every 30 seconds
					width: "2800", // width of iframe
					height: "2800", // height of iframe
					frameWidth: "950", // width of embedded iframe, height is beeing calculated by aspect ratio of iframe		
			}
		},
		{
			module: 'MMM-iFrame12',
			position: 'center',	// This can be any of the regions.
			hide : "true",
			config: {
				// See 'Configuration options' for more information.
					url: ["http://s3.us-east-2.amazonaws.com/beautymirror.com/demo/여자컷숏.html"],  // as many URLs you want or you can just ["ENTER IN URL"] if single URL.
					updateInterval: 0.5 * 60 * 1000, // rotate URLs every 30 seconds
					width: "2800", // width of iframe
					height: "2800", // height of iframe
					frameWidth: "950", // width of embedded iframe, height is beeing calculated by aspect ratio of iframe		
			}
		},
		{
			module: 'MMM-iFrame13',
			position: 'center',	// This can be any of the regions.
			hide : "true",
			config: {
				// See 'Configuration options' for more information.
					url: ["http://s3.us-east-2.amazonaws.com/beautymirror.com/demo/여자컷히메.html"],  // as many URLs you want or you can just ["ENTER IN URL"] if single URL.
					updateInterval: 0.5 * 60 * 1000, // rotate URLs every 30 seconds
					width: "2800", // width of iframe
					height: "2800", // height of iframe
					frameWidth: "950", // width of embedded iframe, height is beeing calculated by aspect ratio of iframe		
			}
		},
		{
			module: 'MMM-iFrame14',
			position: 'center',	// This can be any of the regions.
			hide : "true",
			config: {
				// See 'Configuration options' for more information.
					url: ["http://s3.us-east-2.amazonaws.com/beautymirror.com/demo/index.html"],  // as many URLs you want or you can just ["ENTER IN URL"] if single URL.
					updateInterval: 0.5 * 60 * 1000, // rotate URLs every 30 seconds
					width: "2800", // width of iframe
					height: "2800", // height of iframe
					frameWidth: "950", // width of embedded iframe, height is beeing calculated by aspect ratio of iframe		
			}
		},
		{
			module: 'MMM-iFrame15',
			position: 'center',	// This can be any of the regions.
			hide : "true",
			config: {
				// See 'Configuration options' for more information.
					url: ["http://s3.us-east-2.amazonaws.com/beautymirror.com/demo/index.html"],  // as many URLs you want or you can just ["ENTER IN URL"] if single URL.
					updateInterval: 0.5 * 60 * 1000, // rotate URLs every 30 seconds
					width: "2800", // width of iframe
					height: "2800", // height of iframe
					frameWidth: "950", // width of embedded iframe, height is beeing calculated by aspect ratio of iframe		
			}
		},
		{
			module: 'MMM-iFrame16',
			position: 'center',	// This can be any of the regions.
			hide : "true",
			config: {
				// See 'Configuration options' for more information.
					url: ["http://s3.us-east-2.amazonaws.com/beautymirror.com/demo/index.html"],  // as many URLs you want or you can just ["ENTER IN URL"] if single URL.
					updateInterval: 0.5 * 60 * 1000, // rotate URLs every 30 seconds
					width: "2800", // width of iframe
					height: "2800", // height of iframe
					frameWidth: "950", // width of embedded iframe, height is beeing calculated by aspect ratio of iframe		
			}
		},
		{
			module: 'MMM-iFrame17',
			position: 'center',	// This can be any of the regions.
			visible : 'false',
			config: {
				// See 'Configuration options' for more information.
					url: ["http://s3.us-east-2.amazonaws.com/beautymirror.com/demo/index.html"],  // as many URLs you want or you can just ["ENTER IN URL"] if single URL.
					updateInterval: 0.5 * 60 * 1000, // rotate URLs every 30 seconds
					width: "2800", // width of iframe
					height: "2800", // height of iframe
					frameWidth: "950", // width of embedded iframe, height is beeing calculated by aspect ratio of iframe		
			}
		},
		{
			module: 'MMM-iFrame18',
			position: 'center',	// This can be any of the regions.
			visible : 'false',
			config: {
				// See 'Configuration options' for more information.
					url: ["http://s3.us-east-2.amazonaws.com/beautymirror.com/demo/index.html"],  // as many URLs you want or you can just ["ENTER IN URL"] if single URL.
					updateInterval: 0.5 * 60 * 1000, // rotate URLs every 30 seconds
					width: "2800", // width of iframe
					height: "2800", // height of iframe
					frameWidth: "950", // width of embedded iframe, height is beeing calculated by aspect ratio of iframe		
			}
		},
		{
			module: 'MMM-iFrame19',
			position: 'center',	// This can be any of the regions.
			visible : 'false',
			config: {
				// See 'Configuration options' for more information.
					url: ["http://s3.us-east-2.amazonaws.com/beautymirror.com/demo/index.html"],  // as many URLs you want or you can just ["ENTER IN URL"] if single URL.
					updateInterval: 0.5 * 60 * 1000, // rotate URLs every 30 seconds
					width: "2800", // width of iframe
					height: "2800", // height of iframe
					frameWidth: "950", // width of embedded iframe, height is beeing calculated by aspect ratio of iframe		
			}
		},
		{
			module: 'MMM-iFrame20',
			position: 'center',	// This can be any of the regions.
			visible : 'false',
			config: {
				// See 'Configuration options' for more information.
					url: ["http://s3.us-east-2.amazonaws.com/beautymirror.com/demo/index.html"],  // as many URLs you want or you can just ["ENTER IN URL"] if single URL.
					updateInterval: 0.5 * 60 * 1000, // rotate URLs every 30 seconds
					width: "2800", // width of iframe
					height: "2800", // height of iframe
					frameWidth: "950", // width of embedded iframe, height is beeing calculated by aspect ratio of iframe		
			}
		},
		{
			module: 'MMM-iFrame21',
			position: 'center',	// This can be any of the regions.
			visible : 'false',
			config: {
				// See 'Configuration options' for more information.
					url: ["http://s3.us-east-2.amazonaws.com/beautymirror.com/demo/index.html"],  // as many URLs you want or you can just ["ENTER IN URL"] if single URL.
					updateInterval: 0.5 * 60 * 1000, // rotate URLs every 30 seconds
					width: "2800", // width of iframe
					height: "2800", // height of iframe
					frameWidth: "950", // width of embedded iframe, height is beeing calculated by aspect ratio of iframe		
			}
		},
		{
			module: 'MMM-iFrame22',
			position: 'center',	// This can be any of the regions.
			visible : 'false',
			config: {
				// See 'Configuration options' for more information.
					url: ["http://s3.us-east-2.amazonaws.com/beautymirror.com/demo/index.html"],  // as many URLs you want or you can just ["ENTER IN URL"] if single URL.
					updateInterval: 0.5 * 60 * 1000, // rotate URLs every 30 seconds
					width: "2800", // width of iframe
					height: "2800", // height of iframe
					frameWidth: "950", // width of embedded iframe, height is beeing calculated by aspect ratio of iframe		
					hidden : "true",
			}
		},
		{ 
			module: "MMM-Modulebar3", //23
			position: "top_left", // This can be any of the regions.
			header: "메뉴선택", // Optional
			classes: "default everyone", // Optional
			config: {
		
				// See 'Configuration options' for more information.
			}
		},
		{
			module: 'MMM-iFrame40', //24
			position: "bottom_center",	// This can be any of the regions.
			config: {
				// See 'Configuration options' for more information.
					url: ["https://comic.naver.com/webtoon/weekday.nhn"],  // as many URLs you want or you can just ["ENTER IN URL"] if single URL.
					updateInterval: 0.5 * 60 * 1000, // rotate URLs every 30 seconds
					width: "2800", // width of iframe
					height: "1800", // height of iframe
					frameWidth: "950", // width of embedded iframe, height is beeing calculated by aspect ratio of iframe
					hide: "true",
				}
		},

		//1
		{
			module: "MMM-EmbedYoutube1",  //25
			position: "bottom_bar",	
			config: {
				video_id: "w3jLJU7DT5E",
				searchlist1: "쯔위",
				loop: true
			}
		},
		//2	
        {
            module: "MMM-Modulebar5", //26
            position: "top_left", 
			classes: "default everyone",
            config: {
						
                
            }
		},
		//3
		{
            module: "MMM-Modulebar4", //27
            position: "top_left",
            classes: "default everyone", 
            config: {
						

            
            }
        },
		{
			module: "updatenotification",
			position: "top_bar"
		},
		{
			module: "MMM-Testpython",
			position: "top_right",
			config:{
			}
			
		},
		{
			module: "MMM-Dynamic-Modules",
		},
		{
			module: 'MMM-Remote-Control',
			position: "center",
			// uncomment the following line to show the URL of the remote control on the mirror
			// , position: 'center'
			// you can hide this module afterwards from the remote control itself
			config: {
				customCommand: {},  // Optional, See "Using Custom Commands" below
				customMenu: "custom_menu.json", // Optional, See "Custom Menu Items" below
				showModuleApiMenu: true, // Optional, Enable the Module Controls menu
				apiKey: "",         // Optional, See API/README.md for details
			}
		},
		{
			module: 'mm-hide-all',
			position: 'bottom_right'
		},
		  {
			module: 'MMM-MovieInfo',
			position: 'top_right',
			config: {
				api_key: "08f29ef45bc98817d77bf4c03c8a6664",
				discover: {
					"sort_by": "popularity.desc"
				},
				useLanguage: "ko",
			}
		},

		{
			module: 'MMM-darksky-hourly',
			position: 'top_left',  // This can be any of the regions.
			config: {
				// See 'Configuration options' for more information.
				apiKey: '8d7f5d22ed1974d6b4869c9304b39f50', // Dark Sky API key.
				latitude:   37.37988109409138,
				longitude: 126.9287487782795,
				language: 'ko',
			}
		},
		{
			module: 'MMM-iFrame41', //24
			position: "top_center",	// This can be any of the regions.
			config: {
				// See 'Configuration options' for more information.
					url: ["http://127.0.0.1:9000/remote.html"],  // as many URLs you want or you can just ["ENTER IN URL"] if single URL.
					updateInterval: 0.5 * 60 * 1000, // rotate URLs every 30 seconds
					width: "2800", // width of iframe
					height: "1800", // height of iframe
					frameWidth: "950", // width of embedded iframe, height is beeing calculated by aspect ratio of iframe
				}
		},
		{
				module: 'MMM-GoogleMapsTraffic',
				position: 'top_center',
				config: {
						key: 'AIzaSyCun0rD3ujduOli6jrYWJzFjKw9K1HKqww',
						lat: 37.37988109409138,
						lng: 126.9287487782795,
						height: '300px',
						width: '300px',
						styledMapType: "transparent",
						disableDefaultUI: true,
						//backgroundColor: 'hsla(0, 0%, 0%, 0)',
						markers: [
								{
										lat: 37.37988109409138,
										lng: 126.9287487782795,
										fillColor: '#9966ff'
								},
						],
				},
		},

		{
			module: 'MMM-Carousel',
			position: 'bottom_bar', // Required only for navigation controls
			config: {
				ignoreModules: ['alert'],
				mode: 'slides',
				showPageIndicators: true,
				showPageControls: true,
				slides: {
					main: ["MMM-Snow","clock","currentweather","weatherforecast","MMM-Globe","newsfeed",'mm-hide-all',"clock"],
					"Slide 2": ['MMM-Modulebar', 'MMM-Modulebar1', 'MMM-Modulebar2', 'MMM-Modulebar3','mm-hide-all',"clock"],
					"Slide 3": ['MMM-Testpython','MMM-iFrame17','MMM-iFrame18','MMM-iFrame19','MMM-iFrame20','MMM-iFrame21','MMM-iFrame22','MMM-Dynamic-Modules','mm-hide-all',"clock"],
					"Slide 4": ['MMM-AfterImage','MMM-BeforeImage','MMM-BeforeAfter','mm-hide-all',"clock"],
					"Slide 5": ['MMM-HistoryImage1','MMM-HistoryImage2','MMM-HistoryImage3','MMM-HistoryImage4','mm-hide-all',"clock"],
					"Slide 6": ['MMM-Modulebar4','MMM-Modulebar5','MMM-EmbedYoutube1','MMM-EmbedYoutube2','MMM-iFrame40','mm-hide-all',"clock"],
					"Slide 7": ['internet-monitor',"MMM-soccer",'MMM-MovieInfo','MMM-iFrame41','mm-hide-all',"clock"],
				},
				keyBindings: { 
					enabled: true,
					map: {
						NextSlide: "ArrowRight", 
						PrevSlide: "ArrowLeft", 
						Slide0:    "Home"
					},
					mode: "DEFAULT"
				}
			}
			
		},
		{
			module: 'internet-monitor',
						position: 'top_center',
						config:{
								type: '',
								maxTime: 28000,
								updateInterval: 0,
								verbose: false,
								displayStrength: true,
								displaySpeed: true,
								strengthIconSize: 80,
								maxGaugeScale: 100,
						},
	},
                {
		module: "clock",
		position: "top_left",
                config : {
                    display:"none", 
		         }
	        },
	{
	module: "MMM-soccer",
  	position: "top_left",
  	config: {
    	     api_key: "e353fb53195b43b1a574d8f829f35d13",
    	     show: 'ENGLAND',
	      leagues: {
               ENGLAND: 'PL',
    	               },
  	        }
	},
	{
		module: "MMM-Snow",
		position: "fullscreen_above",
		config: { // See 'Configuration options' for more information.
			flakeCount: 100,
			theme: "love"			
		}
	},
	
  {
		module: "currentweather",
		position: "top_right",
		header: "    오늘의 날씨",
		config: {
			location: "Seoul",
			locationID: "1835847",  //ID from http://bulk.openweathermap.org/sample/; unzip the gz file and find your city
			appid: "f167f10ed5044b1a287054c8ccfb6730",                            
		}
	},
	{
		module: "weatherforecast",
		position: "top_right",
		header: "날씨",
		config: {
			location: "Anyang",
			locationID: "1835847",  //ID from http://www.openweathermap.org/help/city_list.txt
			appid: "f167f10ed5044b1a287054c8ccfb6730"
		}
	},            
	{
	  module: "MMM-Globe",                 // photo
	  position: "center",
	  config: {
			style: 'geoColor',
		  imageSize: 300,
		  ownImagePath:'http://rammb.cira.colostate.edu/ramsdis/online/images/thumb/himawari-8/full_disk_ahi_natural_color.jpg',
		  updateInterval: 10*60*1000
	  }
  },     
	{
		module: "alert",
	},
	{
		module: "compliments",
		position: "lower_third"
	},
	{
		module: "newsfeed",
		position: "bottom_center",
		config: {
		feeds: 
			[{
			title: "사회 , 경제  ",
			url: "http://media.daum.net/rss/part/primary/entertain/rss2.xml" 
			},
			{
			title: "스포츠  ",
			url: "http://media.daum.net/rss/today/primary/sports/rss2.xml" 
			},
			{
			title: "연예  ",
			url: "http://api.sbs.co.kr/xml/news/rss.jsp?pmDiv=entertainment" 
			},
			{
			title: "IT , 과학  ",
			url: "http://media.daum.net/rss/part/primary/digital/rss2.xml" 
			},
			],
			showSourceTitle: true,
			showPublishDate: false
		}
	},
	
	{
		module: 'MMM-BeforeImage',
		position: 'top_center',
		header:"전 사진 ! ",
		config: {
			imagePaths: ['modules/MMM-BeforeAfter/before']
		}
	},
	{
		module: 'MMM-AfterImage',
		position: 'top_center',
		header:"후 사진! ",
		config: {
			imagePaths: ['modules/MMM-BeforeAfter/before']
		}
	},
	{
			module: "MMM-BeforeAfter",
			position: "top_right",
			config:{
				foo:"yellow"
			}
			
		},
		{
			module: "MMM-HistoryImage1",
			position: 'top_center',
			header:" FUCK ",
			config: {
			imagePaths: ['modules/MMM-BeforeAfter/before']
			}
		},
		{
			module: "MMM-HistoryImage2",
			position: 'top_center',
			header:" FUCK ",
			config: {
			imagePaths: ['modules/MMM-BeforeAfter/before']
			}
		},
		{
			module: "MMM-HistoryImage3",
			position: 'top_center',
			header:" FUCK ",
			config: {
			imagePaths: ['modules/MMM-BeforeAfter/before']
			}
		},
		{
			module: "MMM-HistoryImage4",
			position: 'top_center',
			header:" FUCK ",
			config: {
			imagePaths: ['modules/MMM-BeforeAfter/before']
			}
		},
		
			
		
		
	]

};

/*************** DO NOT EDIT THE LINE BELOW ***************/
if (typeof module !== "undefined") {module.exports = config;}
