!function(){var t="jwplayer6",e="clienta",n="error",i="e",r="pa",a="s",o="t",u="ret",d="vs",c="vsh",A="pru",s="paf",l="vqc",_="rc",f="bs",E="rs",p="fs",v="fc",R="aa",T="c",h="ed",P="d",m="ph",I="mu",g="t",D="ti",M="pw",S="etw",k="tb",w="ps",y="vs",C="wd",L="pl",N="l",O="q",b="id",B="fv",V="eb",U="st",F="ff",x="plt",Y="pp",G="pgi",H="prc",K="stc",j="emi",W="pli",q="fed",Q="fid",X="psd",Z="vp",$="po",z="s",J="r",tt="sn",et="cb",nt="ga",it="pr",rt="vd",at="mk",ot="tt",ut="cct",dt="drm",ct="pd",At="at",st="plc",lt="pid",_t="dd",ft="cp",Et="ab",pt="pad",vt="mt",Rt="vb",Tt="vi",ht="vl",Pt="rf",mt="tvs",It="set",gt="pdt",Dt="ccp",Mt="aid",St="i",kt="pv",wt="pu",yt="pt",Ct="sdk",Lt="os",Nt="ri",Ot="rct",bt="rst",Bt="rn",Vt="oc",Ut="rat",Ft="lid",xt="fin",Yt="fis",Gt="fns",Ht="fpc",Kt="fpg",jt="fsr",Wt="ft",qt="fct",Qt="abt",Xt="pbr",Zt="pbd",$t="pbc",zt="vh",Jt="vw",te="ubi",ee="ubc",ne="cvl",ie="tvl",re="vso",ae="sdt",oe="pyc",ue="pii",de="stg",ce="pss",Ae="ppr",se="abc",le="qcr",_e="lsa",fe="pcp",Ee="xid",pe="tul",ve="pdr",Re="lng",Te="i",he="as",Pe="c",me="s",Ie="v",ge="ae",De="ar",Me="abr",Se="adi",ke="al",we="p",ye="vv",Ce="ct",Le="ad",Ne="du",Oe="pc",be="pi",Be="vu",Ve="ec",Ue="aec",Fe="tw",xe="qt",Ye="awi",Ge="awc",He="ask",Ke="abk",je="atk",We="sko",qe="abo",Qe="tal",Xe="uav",Ze="ca",$e="cao",ze="mfc",Je="adc",tn="atu",en="aml",nn="asxb",rn="asxp",an="asxw",on="asxi",un="asxt",dn="afbb",cn="afbp",An="afbw",sn="afbi",ln="afbt",_n="vr",fn="vrt",En="ers",pn="err",vn="erc",Rn=Object.freeze({BUCKET_JWPLAYER6:t,BUCKET_CLIENTA:e,BUCKET_ERRORS:n,EVENT_VIDEO_EMBED:i,EVENT_PLAY_ATTEMPT:r,EVENT_VIDEO_PLAY:a,EVENT_TIME_WATCHED:o,EVENT_RETENTION:u,EVENT_VIDEO_SEEK:d,EVENT_VIDEO_SHARE:c,EVENT_PLAYBACK_RATE_CHANGE:A,EVENT_PLAY_ATTEMPT_FAILED:s,EVENT_VISUAL_QUALITY_CHANGE:l,RELATED_EVENT_CLICK:_,RELATED_EVENT_PLAYLIST:f,RELATED_EVENT_SHOWN:E,RELATED_EVENT_FEED_SHOWN:p,RELATED_EVENT_FEED_CLICK:v,RELATED_EVENT_FEED_AUTO_ADVANCE:R,EVENT_IDENTITY_PING:"idt",AD_CLIENT:T,PARAM_EDITION:h,PARAM_AUTOSTART:P,PARAM_PLAYER_HOSTING:m,PARAM_MEDIA_URL:I,PARAM_TITLE:g,PARAM_TIME_INTERVAL:D,PARAM_TIME_WATCHED:M,PARAM_ELAPSED_TIME_WATCHED:S,PARAM_TIME_BUFFERED:k,PARAM_PLAYER_SIZE:w,PARAM_VIDEO_SIZE:y,PARAM_PLAYER_WIDTH:C,PARAM_PLAYER_HEIGHT:L,PARAM_VIDEO_LENGTH:N,PARAM_QUANTILES:O,PARAM_MEDIA_ID:b,PARAM_FLASH_VERSION:B,PARAM_AD_BLOCK:V,PARAM_SETUP_TIME:U,PARAM_FIRST_FRAME:F,PARAM_PAGE_LOAD_TIME:x,PARAM_PROVIDER:Y,PAGE_VIEW_ID:G,PLAYER_COUNT:H,SETUP_COUNT:K,EMBED_ID:j,ITEM_ID:W,PARAM_FEED_ID:q,PARAM_FEED_INSTANCE_ID:Q,PARAM_PIN_SET_ID:X,PARAM_VISUAL_PLAYLIST:Z,PARAM_POSTER_IMAGE:$,PARAM_SHARING:z,PARAM_RELATED:J,PARAM_SKIN_NAME:tt,PARAM_CASTING_BLOCK:et,PARAM_GA_BLOCK:nt,PARAM_PLAY_REASON:it,PARAM_VIDEO_DURATION:rt,PARAM_MEDIA_TYPE:at,PARAM_PREVIEW_TOOLTIP:ot,PARAM_CLOSED_CAPTIONS:ut,PARAM_DRM_TYPE:dt,PARAM_PRELOAD:ct,PARAM_ACTIVE_TAB:At,PARAM_PLAYLIST_ITEM_COUNT:st,PARAM_DASHBOARD_CONFIG_KEY:lt,PARAM_DISPLAY_DESCRIPTION:_t,PARAM_CHROMELESS_PLAYER:ft,PARAM_ADVERTISING_BLOCK:Et,PARAM_PLATFORM_AB_TESTING:pt,PARAM_PLAYER_MUTE_STATE:vt,PARAM_PLAYER_VIEWABLE:Rt,PARAM_PLAYER_VISIBLE_PERCENTAGE:Tt,PARAM_PLAYER_VOLUME_LEVEL:ht,PARAM_RELATED_FILE:Pt,PARAM_HOSTED_STREAM_TYPE:mt,PARAM_STREAM_EVENT_TYPE:It,PARAM_PROGRAM_DATE_TIME:gt,PARAM_PLAYER_CASTING:Dt,PARAM_CHECKSUM:"h",PARAM_TRACKER_VERSION:"tv",PARAM_NONCE:"n",PARAM_ANALYTICS_TOKEN:Mt,PARAM_EVENT_TYPE:"e",PARAM_IFRAME:St,PARAM_PLAYER_VERSION:kt,PARAM_PAGE_URL:wt,PARAM_PAGE_TITLE:yt,PARAM_SDK_PLATFORM:Ct,PARAM_ONCLICK_SETTING:Lt,PARAM_REC_ID:Nt,PARAM_RELATED_CLICK_TYPE:Ot,PARAM_RELATED_SHOW_TYPE:bt,PARAM_NEXT:Bt,PARAM_ORDINAL_CLICKED:Vt,PARAM_AUTOPLAY_TIMER:Ut,PARAM_LOCAL_ID:Ft,PARAM_FEED_INTERFACE:xt,PARAM_FEED_ITEMS_SHOWN:Yt,PARAM_FEED_NUMBER_SHOWN:Gt,PARAM_FEED_PINNED_COUNT:Ht,PARAM_FEED_PAGE:Kt,PARAM_FEED_SHOWN_REASON:jt,PARAM_FEED_TYPE:Wt,PARAM_FEED_ADVANCE_TARGET:qt,PARAM_AB_TESTS:Qt,PARAM_PLAYBACK_RATE:Xt,PARAM_PLAYBACK_RATE_DEFAULT:Zt,PARAM_PLAYBACK_RATE_CONTROLS:$t,PARAM_VIDEO_HEIGHT:zt,PARAM_VIDEO_WIDTH:Jt,PARAM_UNDER_BUFFER_INTERVAL:te,PARAM_UNDER_BUFFER_CUMULATIVE:ee,PARAM_CURRENT_VIDEO_LOCATION:ne,PARAM_TARGET_VIDEO_LOCATION:ie,PARAM_VIDEO_SEEK_OFFSET:re,PARAM_SEEK_DRAG_TIME:ae,PARAM_PLAY_ITEM_COUNT:oe,PARAM_PLAYLIST_ITEM_INDEX:ue,PARAM_SHARING_TARGET:de,PARAM_PLAY_SESSION_SEQUENCE:ce,PARAM_PREVIOUS_PLAYBACK_RATE:Ae,PARAM_AD_BREAK_COUNT:se,PARAM_QUALITY_CHANGE_REASON:le,PARAM_SENT_AT:"sa",PARAM_LOCAL_STORAGE_AVAILABLE:_e,PARAM_PLAYER_CURRENT_POSITION:fe,PARAM_EXTERNAL_ID:Ee,PARAM_THUMBNAIL_URL:pe,PARAM_PLUGIN_DOCUMENT_REFERRER:ve,PARAM_LANG_ATTRIBUTE:Re,EVENT_AD_IMPRESSION:Te,EVENT_AD_STARTED:he,EVENT_AD_CLICK:Pe,EVENT_AD_SKIPPED:me,EVENT_AD_QUARTILE:Ie,EVENT_AD_ERROR:ge,EVENT_AD_REQUEST:De,EVENT_AD_BID_RESPONSE:Me,AD_ID:Se,AD_LINEAR:ke,PARAM_AD_SCHEDULE_POSITION:we,VAST_VERSION:ye,CREATIVE_TYPE:Ce,AD_SYSTEM:Le,AD_DURATION:Ne,POD_COUNT:Oe,POD_INDEX:be,TAG_DOMAIN:Be,ERROR_CODE:Ve,JW_AD_ERROR_CODE:Ue,AD_TIME:Fe,AD_QUARTILE:xe,AD_WATERFALL_INDEX:Ye,AD_WATERFALL_COUNT:Ge,AD_SCHEDULE_ID:He,AD_BREAK_ID:Ke,AD_TAG_ID:je,AD_SKIP_OFFSET:We,AD_OFFSET:qe,AD_TIME_LOADING:Qe,UNIVERSAL_AD_ID:Xe,CONDITIONAL_AD:Ze,CONDITIONAL_AD_OPT_OUT:$e,PARAM_AD_MEDIA_FILE_COMPLIANCE:ze,AD_CATEGORIES:Je,PARAM_VAST_AD_TAG_URL:tn,PARAM_AD_MEDIATION_LAYER:en,PARAM_AD_SPOTX_BID:nn,PARAM_AD_SPOTX_BID_PRICE:rn,PARAM_AD_SPOTX_BID_WON:an,PARAM_AD_SPOTX_BID_PUB_ID:on,PARAM_AD_SPOTX_BID_TIME:un,PARAM_AD_FAN_BID:dn,PARAM_AD_FAN_BID_PRICE:cn,PARAM_AD_FAN_BID_WON:An,PARAM_AD_FAN_BID_PUB_ID:sn,PARAM_AD_FAN_BID_TIME:ln,PARAM_VR_MODE:_n,PARAM_VR_STEREO_MODE:fn,EVENT_SETUP_ERROR:En,EVENT_ERROR:pn,PARAM_ERROR_CODE:vn}),Tn=function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")},hn=500;var Pn=function t(e,n,i){var r;Tn(this,t),this.value="string"==typeof(r=n)&&r.length>hn?r.slice(0,hn):r,this.key=e,this.priority=i};function mn(t,e,n){return new Pn(t,e,n)}function In(t){var e=t.getContainer().querySelector("video");return e?e.currentTime:t.getPosition()}function gn(t){try{return t.getPlaylistItem()}catch(n){var e=t.getPlaylistIndex();return t.getConfig().playlist[e]||null}}function Dn(t){if("function"==typeof t.getProvider){var e=t.getProvider();return e?e.name:""}return""}var Mn=void 0;function Sn(t){var e=arguments.length>1&&void 0!==arguments[1]&&arguments[1],n=t.getVisualQuality(),i=void 0;return i=n&&n.level?{width:n.level.width,height:n.level.height,reason:n.reason}:{width:null,height:null,reason:null},Mn&&!e||(Mn=i),i}function kn(t){var e=t.getContainer().querySelector("video"),n=0;if(e&&(n=e.duration,e.buffered&&e.buffered.length)){var i=e.buffered.end(e.buffered.length-1)||0;return Math.round(10*i)/10}return n||(n=Math.abs(t.getDuration())),Math.round(n*t.getBuffer()/10)/10}function wn(){try{var t=window.crypto||window.msCrypto;if(t&&t.getRandomValues)return t.getRandomValues(new Uint32Array(1))[0].toString(36)}catch(t){}return Math.random().toString(36).slice(2,9)}function yn(t){for(var e="";e.length<t;)e+=wn();return e.slice(0,t)}function Cn(t){if(t){if(/vast/.test(t))return 0;if(/googima/.test(t))return 1;if(/freewheel/.test(t))return 2;if(/dai/.test(t))return 3}return-1}function Ln(t){return/^[a-zA-Z0-9]{8}$/.test(t)}function Nn(t){return Bn(t,"feedid")}function On(t){return Bn(t,"feed_instance_id")}function bn(t){return t?t.pin_set_id:null}function Bn(t,e){return t?(t.feedData||{})[e]||t[e]:null}function Vn(t){if(!t)return null;var e,n,i=t.mediaid;return Ln(i)?i:(e=t.file,Ln(i=(n=/.*\/(?:manifests|videos)\/([a-zA-Z0-9]{8})[\.-].*/.exec(e))&&2===n.length?n[1]:null)?i:null)}function Un(t){if(!t||!t.stereomode)return null;switch(t.stereomode){case"monoscopic":return 0;case"stereoscopicTopBottom":return 1;case"stereoscopicLeftRight":return 2;default:return null}}var Fn=/^IAB(\d+(?:-\d+)?)$/,xn={UNKNOWN:999,IAB:0},Yn={noBid:0,bid:1,timeout:2,invalid:3};function Gn(){return Array.prototype.slice.call(arguments,0).reduce(function(t,e){return n=t,i=e,Object.keys(n).forEach(function(t){i[t]=n[t]}),i;var n,i},{})}function Hn(t,e){for(var n=0;n<t.length;n++)if(e(t[n]))return t[n];return null}function Kn(t){if(!t.bidders)return{};var e=t.mediationLayerAdServer&&"dfp"===t.mediationLayerAdServer,n=function(t){var e=Hn(t.bidders,function(t){return"SpotX"===t.name});if(!e)return{};return{spotxBid:Yn[e.result],spotxBidPrice:e.priceInCents,spotxBidWon:e.winner,spotxAdPubId:e.id,spotxResTime:e.timeForBidResponse}}(t),i=function(t){var e=Hn(t.bidders,function(t){return"FAN"===t.name});if(!e)return{};return{fanBid:Yn[e.result],fanBidPrice:e.priceInCents,fanBidWon:e.winner,fanAdPubId:e.id,fanResTime:e.timeForBidResponse}}(t);return Gn({mediationLayer:e?0:1},n,i)}function jn(t){return e=Kn(t),[mn(en,e.mediationLayer,50),mn(nn,e.spotxBid,51),mn(rn,e.spotxBidPrice,52),mn(an,e.spotxBidWon,53),mn(on,e.spotxAdPubId,54),mn(un,e.spotxResTime,55),mn(dn,e.fanBid,56),mn(cn,e.fanBidPrice,57),mn(An,e.fanBidWon,58),mn(sn,e.fanAdPubId,59),mn(ln,e.fanResTime,60)];var e}var Wn=6e-5;function qn(t,n,i,r,a){var o={numCompanions:-1,podCount:0,podIndex:0,linear:-1,vastVersion:-1,adSystem:"",adCreativeType:"",adposition:-1,tagdomain:"",position:"",previousQuartile:0,duration:"",witem:1,wcount:1},u=(r.getConfig()||{}).advertising||{};t.adClient=Cn(u.client),t.adScheduleId=u.adscheduleid;var d=null;function c(t,n){a.track(t,e,n)}function A(e){-1===t.adClient&&e&&(t.adClient=Cn(e.client)),e.sequence!==d.podIndex&&(delete d.timeAdLoading,delete d.adCreativeType),s(e,"adbreakid"),s(e,"adtagid"),s(e,"offset"),s(e,"witem"),s(e,"wcount"),s(e,"skipoffset"),s(e,"linear",function(t,e){return e===t}),s(e,"adposition",function(t,e){return{pre:0,mid:1,post:2,api:3}[e]}),s(e,"creativetype",function(t,e){var n="";switch(e){case"static":n="image/unknown";break;case"video":n="video/unknown";break;case"vpaid":case"vpaid-swf":n="application/x-shockwave-flash";break;case"vpaid-js":n="application/javascript";break;default:n=e||n}return d.adCreativeType=n,n}),s(e,"tag",function(t,e){return d.tagdomain=function(t){if(t){var e=t.match(new RegExp(/^[^/]*:\/\/\/?([^\/]*)/));if(e&&e.length>1)return e[1]}return""}(r.utils.getAbsolutePath(e)),e}),e.timeLoading&&(d.timeAdLoading=10*Math.round(e.timeLoading/10)),e.universalAdIdRegistry&&"unknown"!==e.universalAdIdRegistry?d.universalAdId=e.universalAdIdRegistry+"."+e.universalAdIdValue:delete d.universalAdId,d.conditionalAd=e.conditionalAd,d.conditionalAdOptOut=!!e.conditionalAdOptOut,d.mediaFileCompliance=e.mediaFileCompliance,d.categories=e.categories,d.adSystem=e.adsystem||d.adSystem,d.vastVersion=e.vastversion||d.vastVersion,d.podIndex=e.sequence||d.podIndex,d.podCount=e.podcount||d.podCount,d.tagURL=e.tag||d.tagURL||e.vmap}function s(t,e,n){if(t.hasOwnProperty(e)){var i=n||l;d[e]=i(e,t[e])}}function l(t,e){return e}function _(t,e){if(u.adscheduleid&&e>d.previousQuartile){A(t);var n=[mn(Ne,d.duration,28),mn(xe,e,29)].concat(f()).concat(p());c(Ie,n),d.previousQuartile=e}}function f(){var t=null;return Array.isArray(d.categories)&&(t=d.categories.map(function(t){var e=t.match(Fn);return e?[xn.IAB,e[1]].join("-"):xn.UNKNOWN}).filter(function(t,e,n){return n.indexOf(t)===e}).slice(0,10).join(",")),[mn(Le,d.adSystem,17),mn(ye,d.vastVersion,18),mn(Ce,d.adCreativeType,19),mn(ke,d.linear,21),mn(Xe,d.universalAdId,26),mn(Je,t,27),mn(Oe,d.podCount,30),mn(be,d.podIndex,31)].concat(E())}function E(){return[mn(we,d.adposition,20),mn(Be,d.tagdomain,22),mn(Se,d.adId,25),mn(Ye,d.witem,32),mn(Ge,d.wcount,33)].concat(t.getCommonTrackingParameters())}function p(){return[mn(qe,d.offset,21),mn(Ke,d.adbreakid,23),mn(je,d.adtagid,24),mn(We,d.skipoffset,26)]}r.on("adRequest adMeta adImpression adComplete adSkipped adError adTime adBidResponse",function(t){d&&d.adId===t.id&&-1!==t.id||(d=this._.extend({adId:t.id},o))}).on("adRequest adMeta adImpression adComplete adSkipped adError adBidResponse",A).on("adRequest",function(){u.adscheduleid&&c(De,E().concat(p()))}).on("adImpression",function(t){var e=gn(r);c(Te,[mn(q,Nn(e),22),mn(Q,On(e),23),mn(X,bn(e),24),mn(Qe,d.timeAdLoading,25),mn(Ze,d.conditionalAd,30),mn($e,d.conditionalAdOptOut,31),mn(ze,d.mediaFileCompliance,32)].concat(f()).concat(jn(t)).concat(p()))}).on("adStarted",function(){c(he,f().concat(p()))}).on("adComplete",function(t){_(t,4)}).on("adSkipped",function(){var t=[mn(Fe,d.position,27),mn(Ne,d.duration,28),mn(xe,d.previousQuartile,29)].concat(p()).concat(f());c(me,t)}).on("adError",function(e){if(u.adscheduleid){var n=1,i=void 0;"object"==typeof e&&e&&("code"in e&&(n=e.code),"adErrorCode"in e&&(i=e.adErrorCode));var r=[mn(Le,d.adSystem,17),mn(Ce,d.adCreativeType,19),mn(Oe,d.podCount,30),mn(be,d.podIndex,31),mn(Ve,n,27),mn(Ze,d.conditionalAd,30),mn($e,d.conditionalAdOptOut,31),mn(ze,d.mediaFileCompliance,32),0===t.adClient&&Math.random()<=Wn?mn(tn,d.tagURL,33):null,i?mn(Ue,i,34):null].concat(E().concat(jn(e)).concat(p()));c(ge,r)}}).on("adClick",function(){var t=[mn(Fe,d.position,27),mn(Ne,d.duration,28),mn(xe,d.previousQuartile,29)].concat(f().concat(p()));c(Pe,t)}).on("adTime",function(t){(d.position=t.position,d.duration=d.duration||t.duration,!d.duration||d.position>d.duration)||_(t,Math.min(3,Math.floor((4*d.position+.05)/d.duration)))}).on("adBidResponse",function(t){var e=jn(t).concat(f()).concat(p());c(Me,e)})}var Qn={play:1,api:2,interaction:3,complete:4,auto:5,manual:6,link:7};function Xn(t,e,n){e.on("ready",function(){!function(t,e,n){function i(t){return function(i){t(i,e,n)}}var r=void 0,a=void 0;if(t.getPlugin){var o=t.getPlugin("related");o&&(o.on("playlist",i(Zn)),o.on("open",i($n)),o.on("play",i(zn)),o.on("feedShown",function(t){r=t.reason,Jn(t,e,n)}),o.on("feedClick",function(t){ti(t,e,n,r)}),o.on("feedAutoAdvance",function(t){ei(t,e,n,r)}));var u=void 0;t.on("playlistItem",function(){u=!0,r=null,a=null}),t.on("nextShown",function(t){a=t.reason,("hover"!==t.reason||u)&&(u=!1,Jn(t,e,n))}),t.on("nextClick",function(t){a&&ti(t,e,n,a)}),t.on("nextAutoAdvance",function(t){a&&ei(t,e,n,a)})}}(e,t,n)})}function Zn(t,e,n){var i;null!==t.playlist&&ii(f,t,[mn(Wt,(i=t,Bn(i,"kind")),20)],e,n)}function $n(t,e,n){ii(E,t,[],e,n)}function zn(t,e,n){var i=[];if("item"in t){var r=void 0;r="play"===t.onclick?t.item.mediaid:t.item.link,i.push(mn(Bt,r,17))}"autoplaytimer"in t&&i.push(mn(Ut,t.autoplaytimer,18)),ii(_,t,i,e,n)}function Jn(t,e,n){var i=t.feedData||{},r=0,a=(t.itemsShown||[]).map(function(t){return bn(t)&&r++,Vn(t)}),o=[mn(xt,t.ui,18),mn(Yt,a.join(","),19),mn(Gt,a.length,20),mn(Ht,r,21),mn(Kt,t.page,22),mn(jt,t.reason,23),mn(Wt,i.kind,24),mn(Ut,t.autoTimer,25)];ii(p,t,o,e,n)}function ti(t,e,n,i){var r=[mn(Vt,t.index,19),mn(Kt,t.page,22)].concat(ni(t,i));ii(v,t,r,e,n)}function ei(t,e,n,i){var r=ni(t,i);ii(R,t,r,e,n)}function ni(t,e){var n=t.feedData||{},i=t.itemsShown||[],r=t.target;return[mn(xt,t.ui,18),mn(qt,Vn(r),20),mn(Gt,i.length,21),mn(jt,e,23),mn(Wt,n.kind,24),mn(X,bn(r),25)]}function ii(e,n,i,r,a){var o=Nn(n);o&&a.track(e,t,function(t,e,n,i){"onclick"in i&&n.push(mn(Lt,"play"===i.onclick?1:0,19));if("method"in i){var r=Qn[i.method]||0,a=void 0;t===_?a=Ot:t===E&&(a=bt),a&&n.push(mn(a,r,20))}"rec_id"in i&&n.push(mn(Nt,i.rec_id,22));"position"in i&&n.push(mn(Vt,i.position+1,23));var o=On(i);if(n.push(mn(q,e,24),mn(Q,o,25)),t===_){var u=bn(i);n.push(mn(X,u,6))}return n}(e,o,i,n).concat(r.getPlaylistTrackingParameters()))}var ri=.02,ai=1,oi=0;function ui(t,e,i){var r=function(e){return function(r){var a,o,u,d;oi<ai&&("number"==typeof r.code||Math.random()<ri)&&(oi+=1,a=e,o=i,u=r,d=t(),o("setupError"===a?En:pn,n,[mn(vn,u.code,17)].concat(d)))}};e.on("error",r("error")),e.on("setupError",r("setupError"))}var di={facebook:"fb",twitter:"twi",email:"em",link:"cl",embed:"ceb",pinterest:"pin",tumblr:"tbr",googleplus:"gps",reddit:"rdt",linkedin:"lkn",custom:"cus"};function ci(e,n,i,r){var a=di[e.method]||di.custom,o=Math.round(In(i));r(c,t,[mn(de,a,20),mn(fe,o,21)].concat(n))}function Ai(t,e,n){e.on("ready",function(){!function(t,e,n){if(t.getPlugin){var i=t.getPlugin("sharing");i&&i.on("click",(r=ci,function(i){r(i,e(),t,n)}))}var r}(e,t,n)})}var si=function(){function t(e,n,i){Tn(this,t);var r=this;"function"==typeof e.onping&&(r.onping=e.onping);var a="complete"===(i.ownerDocument||window.document).readyState;r.config=e,r.pageLoaded=a,r.queue=[],r.images=[],r.debug=n,r.flushQueue=function(){r.pageLoaded=!0;for(var t=r.queue.length;t--;)r.ping(r.queue.shift());window.removeEventListener("load",r.flushQueue)},a||(window.addEventListener&&window.addEventListener("load",r.flushQueue),setTimeout(r.flushQueue,5e3))}return t.prototype.track=function(t,e,n){var i=this.buildTrackingURL(t,e,n),r=!this.pageLoaded;if(r&&(t===Te||t===De||t===he))this.flushQueue();else if(r)return void this.queue.push(i);this.ping(i)},t.prototype.buildTrackingURL=function(t,e,n){var i=[mn("e",t,0),mn("tv","2.23.4",1),mn("n",Math.random().toFixed(16).substr(2,16),2)].concat(n);i=i.filter(function(t){return!!t}).sort(function(t,e){return t.priority-e.priority});for(var r=[],a=0;a<i.length;a++){var o=i[a].value;!0!==o&&!1!==o||(o=o?1:0),null!==o&&void 0!==o&&r.push(i[a].key+"="+encodeURIComponent(o))}var u="file:"===window.location.protocol?"https:":"",d=r.join("&");return u+"//jwpltx.com/v1/"+e+"/ping.gif?"+("h="+function(t){var e=0;if(!(t=decodeURIComponent(t)).length)return e;for(var n=0;n<t.length;n++)e=(e<<5)-e+t.charCodeAt(n),e&=e;return e}(d)+"&"+d)},t.prototype.ping=function(t){var e=new Image,n=void 0;try{n=Date.now()}catch(t){}e.src=t+"&sa="+n;for(var i=this.images,r=i.length;r--&&(i[r].width||i[r].complete);)i.length=r;if(i.push(e),this.debug&&this.onping)try{this.onping.call(this,t)}catch(t){}},t}(),li=4,_i={pro:1,premium:2,ads:3,invalid:li,enterprise:6,trial:7,platinum:8,starter:9,business:10};var fi,Ei=(fi=function(){var t=navigator.plugins;if(t&&"object"==typeof t["Shockwave Flash"]){var e=t["Shockwave Flash"].description;if(e)return e}if(void 0!==window.ActiveXObject)try{var n=new window.ActiveXObject("ShockwaveFlash.ShockwaveFlash");if(n){var i=n.GetVariable("$version");if(i)return i}}catch(t){}return""}().replace(/\D+(\d+\.?\d*).*/,"$1"),function(){return fi});var pi="hidden"in document?function(){return!document.hidden}:"webkitHidden"in document?function(){return!document.webkitHidden}:function(){return!0};function vi(t,e){var n=" "+e+" ";return 1===t.nodeType&&(" "+t.className+" ").replace(/[\t\r\n\f]/g," ").indexOf(n)>=0}var Ri=1,Ti=2,hi=3,Pi=4,mi=5,Ii=0;var gi=void 0;try{gi=window.localStorage}catch(t){}var Di={aes:1,widevine:2,playready:3,fairplay:4};var Mi={interaction:1,autostart:2,repeat:3,external:4,"related-interaction":1,"related-auto":5,playlist:6};function Si(t){return Mi[t]||0}var ki={none:1,metadata:2,auto:3};function wi(t){var e=t.preload;return ki[e]||0}var yi=function(){function t(e,n){Tn(this,t),this._api=e;var i=this.getTotalUnderBufferTime();this.previousBufferTimes=n.reduce(function(t,e){return t[e]=i,t},{})}return t.prototype.getTotalUnderBufferTime=function(){try{return this._api.qoe().item.sums.stalled||0}catch(t){return 0}},t.prototype.getUnderBufferTimeDelta=function(t){var e=this.getTotalUnderBufferTime(),n=Math.round(e-this.previousBufferTimes[t]);return this.previousBufferTimes[t]=e,n},t.prototype.getCumulativeUnderBuffer=function(){return this.getTotalUnderBufferTime()},t}(),Ci=function(){function t(e){Tn(this,t),this._generateTrackingFunc=e,this._numTrackedSeeks=0,this._setupTrackingParams()}return t.prototype._isTrackingSeek=function(){return this._numTrackedSeeks>0},t.prototype.trackSeek=function(t){this._isTrackingSeek()||(this._trackingParams.videoStartDragTime=t.position,this._trackingParams.dragStartTime=Date.now()),this._numTrackedSeeks++,this._trackingParams.lastTargetTime=t.offset},t.prototype.trackSeekEnd=function(){var t=this;if(this._isTrackingSeek()){clearTimeout(this._trackingParams.seekDebounceTimeout);var e=Date.now()-this._trackingParams.dragStartTime;1===this._numTrackedSeeks&&(e=0);var n=this._generateTrackingFunc(this._trackingParams.videoStartDragTime,this._trackingParams.lastTargetTime,e);this._trackingParams.seekDebounceTimeout=setTimeout(function(){n(),t._resetSeekData()},1e3)}},t.prototype._setupTrackingParams=function(){this._trackingParams={videoStartDragTime:0,dragStartTime:0,seekDebounceTimeout:-1,lastTargetTime:0}},t.prototype._resetSeekData=function(){this._setupTrackingParams(),this._numTrackedSeeks=0},t}(),Li="playlistItem playAttempt time",Ni="adRequest adImpression adError",Oi=function(){function t(e){var n=this;Tn(this,t),this._adBreakCount=0,this._shouldTrack=!1,e.on(Li,function(){n._shouldTrack=!0}),e.on(Ni,function(){n._shouldTrack&&(n._shouldTrack=!1,n._adBreakCount++)})}return t.prototype.getAdBreakCount=function(){return this._adBreakCount},t}();function bi(t){return t===1/0?1/0:(t|=0)<=0?0:t<30?1:t<60?4:t<180?8:t<300?16:32}var Bi="jwp-global-frame";var Vi="play",Ui="meta",Fi="levels",xi="firstFrame",Yi=128,Gi=yn(12),Hi=0;(window.jwplayerPluginJsonp||window.jwplayer().registerPlugin)("jwpsrv","7.0",function(e,c){var _,f,E=e._,p=e.utils,v=!0===c.debug,R=parseInt(c.sdkplatform,10),Lt=e.getConfig(),Nt=function(t,e){var n=0,i=void 0;if(t){var r=new e(t),a=r.edition();(n=_i[a]||0)!==li&&(i=r.token())}i||(i="_");var o={};return o[Mt]=i,o[h]=n,o}(Lt.key,p.key),Ot=function(t){var e={},n=window.jwplayer?window.jwplayer.defaults||{}:{};e[m]=t[m]||n[m]||0,e[lt]=t.pid,e[pt]=t.pad,e[tt]=t.skin,e[Et]=!!t.advertising,e[z]=!!t.sharing,e[et]=!!t.cast,e[nt]=!!t.ga,e[P]=!!t.autostart,e[Z]=!1!==t.visualplaylist,e[_t]=!1!==t.displaydescription,e[$]=!!t.image,e[$t]=!!t.playbackRateControls;var i=t.related;return e[J]=!!i,i&&(e[Pt]=i.recommendations||i.file),e}(Lt),bt=function(t){if(t)return{};var e="",n="",i=window.top!==window.self;if(i){e=document.referrer;try{e=e||window.top.location.href,n=window.top.document.title}catch(t){}}var r={};return r[wt]=e||window.location.href,r[yt]=n||document.title,r[St]=i,r[B]=Ei(),r}(R),Bt=(_=c,(f={})[kt]=e.version.split("+")[0],f[Ct]=_.sdkplatform||0,f[j]=yn(12),f),Vt=Hi+=1,Ut={ready:null,item:null,drm:"",index:0,itemId:"",mediaId:"",playReason:""},xt=this,Yt=new si(c,v,e.getContainer());qn(xt,0,0,e,Yt),Xn(xt,e,Yt);var Gt=void 0;-1!==xt.adClient&&(Gt=new Oi(e));var Ht=void 0,Kt=void 0,jt=void 0,Wt=0,qt=0,de=null,fe=new yi(e,[o]),Te=void 0,he=!1,Pe=!1,me=!1,Ie=0,ge=0,De=function(){if(!gi)return{localID:null,storageAvailable:"fail"};var t=gi.jwplayerLocalId;if(t)return{localID:t,storageAvailable:"read"};try{return gi.jwplayerLocalId=yn(12),{localID:gi.jwplayerLocalId,storageAvailable:"set"}}catch(t){return{localID:null,storageAvailable:"fail"}}}(),Me=De.localID,Se=De.storageAvailable,ke=function(){try{if(window.top!==window.self)return window.top.document.referrer}catch(t){return null}return document.referrer}();function we(t){t=t||gn(e);var n=Dn(e),i=function(t){var e=t.getConfig(),n=e.containerWidth||t.getWidth(),i=e.containerHeight||t.getHeight();if(/\d+%/.test(n)){var r=t.utils.bounds(t.getContainer());n=r.width,i=r.height}return n=0|Math.round(n),i=0|Math.round(i),/\d+%/.test(e.width||n)&&e.aspectratio?{bucket:Pi,width:n,height:i}:vi(t.getContainer(),"jw-flag-audio-player")?{bucket:mi,width:n,height:i}:0===n?{bucket:Ii,width:n,height:i}:n<=320?{bucket:Ri,width:n,height:i}:n<=640?{bucket:Ti,width:n,height:i}:{bucket:hi,width:n,height:i}}(e),r=pi(),a=e.getConfig(),o=a.visibility,u=E.isUndefined(o)?o:Math.round(100*o)/100,d=a.defaultPlaybackRate,c=void 0;e.getViewable&&(c=e.getViewable());var A,s,l,_=[mn(Mt,Nt[Mt],3),mn(h,Nt[h],4),mn(kt,Bt[kt],5),mn(Ct,Bt[Ct],6),mn(j,Bt[j],7),mn(m,Ot[m],8),mn(lt,Ot[lt],9),mn(G,Gi,10),mn(H,function(){var t=window.jwplayer,e=0;if("function"==typeof t)for(e=0;e<1e3;e++)if(!t(e).uniqueId)return e;return e}(),10),mn(K,Vt,10),mn(Ft,Me,10),mn(_e,Se,109),mn(T,xt.adClient,15),mn(He,xt.adScheduleId,16),mn(st,e.getPlaylist().length,21),mn(z,Ot[z],25),mn(P,Ot[P],36),mn(Y,n,37),mn(w,i.bucket,38),mn(C,i.width,39),mn(L,i.height,40),mn(Tt,u,42),mn(At,r,43),mn(St,bt[St],44),mn(ht,e.getVolume(),45),mn(vt,e.getMute(),46),mn(Dt,he,47),mn(V,(s=e,s.getAdBlock?s.getAdBlock():-1),48),mn(Xt,(A=e,A.getPlaybackRate?Math.round(100*A.getPlaybackRate())/100:1),49),mn(Zt,d,50),mn(ft,!e.getControls(),102),mn(oe,Ie,103),mn(ce,ge,105),mn(wt,bt[wt],107),mn(yt,bt[yt],108),Gt?mn(se,Gt.getAdBreakCount(),109):null];t&&(_=_.concat([mn(W,Ut.itemId,11),mn(b,Ut.mediaId||Vn(t),12),mn(Ee,t.externalId,13),mn(pe,t.thumbnailUrl,14),mn(mt,t[mt]||0,15),mn(It,t[It]||null,16),mn(ue,Ut.index,104),mn(g,(l=t,l?l.title:null),106)])),E.isUndefined(c)||_.push(mn(Rt,c,41));var f=a.ab;if(f&&f.tests){var p=Object.keys(f.tests).map(function(t){return f.getSelected(t,Lt).join(",")}).filter(function(t){return t}).join(",");_.push(mn(Qt,p,8))}return _}function ye(t){return[mn(I,function(t,e){var n=void 0;if(!t)return null;var i=t.sources;if(i){for(var r=[],a=i.length;a--;)i[a].file&&r.push(i[a].file);r.sort(),n=r[0]}else n=t.file;return e.getAbsolutePath(n)}(t,p),100)].concat(we(t))}function Ce(t,n){return[mn(O,n,29),mn(_n,function(t){if(t.getPlugin){var e=t.getPlugin("vr");if(e)switch(e.getMode()){case"magic-window":return 0;case"cardboard":return 1;case"gear-vr":return 2;default:return null}}return null}(e),30)].concat(ye(t))}function Le(t){var n=t||gn(e),i=Be(),r=Sn(e);return[mn(it,Si(Ut.playReason),17),mn(q,Nn(n),18),mn(Q,On(n),19),mn(X,bn(n),20),mn(ct,wi(n),21),mn(k,kn(e),22),mn(rt,i,23),mn(zt,r.height,24),mn(Jt,r.width,25)].concat(ye(t))}function Ne(n){Ut.playReason=n.playReason||"";var i,a=n.item||gn(e);Ut.mediaId=Vn(a),Ut.externalId=a.externalId,Ve(a)&&(i=gn(e),Yt.track(r,t,Le(i)))}function Oe(){Ht={},Kt=!1,jt=0}function be(t){return function(n){var i=Ht[t];if(t===Ui){var r=(n.metadata||n).TXXX;if(r){var a=r.programDateTime;if(a){var o=Date.parse(a);isNaN(o)||xe(null,Wt||1,null,a)}}var u=(n=n.metadata||n).segment;if(u&&(Pe=!0,me=u.encryption),Ut.drm=n.drm||"",i&&(n.width=n.width||i.width,n.height=n.height||i.height,n.duration=n.duration||i.duration),(100===n.duration||0===n.duration)&&0===n.width&&0===n.height)return}Ht[t]=n,t===Vi&&(i||(Wt=0,qt=0),de=In(e)),Ht[Vi]&&Ht[Ui]&&Ht[Fi]&&Ht[xi]&&("flash_adaptive"===Dn(e)?!Kt&&Pe&&(Kt=!0,Pe=!1,Fe()):Kt||(Kt=!0,Fe()))}}function Be(){var t=e.getDuration();if(t<=0){var n=Ht[Ui];n&&(t=n.duration)}return 0|t}function Ve(t){return t&&"object"==typeof t?Vn(t)||t.externalId:Ut.mediaId||Ut.externalId}function Ue(e,n){var r=-1;n&&n.setupTime&&(r=10*Math.round(n.setupTime/10)|0);var a=document.querySelector("html"),o=a?a.getAttribute("lang"):null;Yt.track(i,t,[mn(B,bt[B],17),mn(x,function(){var t=(window.performance||{}).timing;if(t){var e=(t.loadEventEnd||(new Date).getTime())-t.navigationStart;if(e>0)return 50*Math.round(e/50)|0}return null}(),19),mn(U,r,20),mn(ct,wi(e),21),mn(Z,Ot[Z],22),mn(Et,Ot[Et],23),mn($,Ot[$],24),mn(J,Ot[J],26),mn(tt,Ot[tt],27),mn(pt,Ot[pt],28),mn(et,Ot[et],29),mn(nt,Ot[nt],30),mn(_t,Ot[_t],31),mn(Pt,Ot[Pt],32),mn(fn,Un(e),33),mn($t,Ot[$t],34),mn(ve,ke,35),mn(Re,o,36)].concat(ye(e)))}function Fe(){Ie++;var n,i,r,o,u,d,c,A,s,l=Be(),_=gn(e),f=function(t,e,n){var i=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{};if(!e)return null;if(n&&n.levels&&n.levels.length){var r=n.levels[0];if(r&&"auto"===(""+r.label).toLowerCase())return 5}if(vi(t.getContainer(),"jw-flag-audio-player"))return 6;var a=0|i.width,o=0|i.height;return 0===a&&0===o?"rtmp"===e.sources[0].type?6:0:a<=320?1:a<=640?2:a<=1280?3:4}(e,_,Ht[Fi],Ht[Ui]),v=Sn(e,!0);Yt.track(a,t,[mn(y,f,17),mn(N,(s=l,(s|=0)<=0||s===1/0?0:s<15?1:s<=300?2:s<=1200?3:4),18),mn(rt,l,19),mn(at,function(t,e){var n=t.sources[0],i=n.type;if(!i){var r=n.file;i=e.extension(r)}return i}(_,p),20),mn(ct,wi(_),21),mn(k,kn(e),22),mn(q,Nn(_),22),mn(Q,On(_),23),mn(X,bn(_),23),mn(it,Si(Ut.playReason),23),mn(F,(A=e,"function"==typeof A.qoe?10*Math.round(A.qoe().firstFrame/10)|0:-1),24),mn(ot,(u=_,d=E,c=u.tracks,d.some(c,function(t){return"thumbnails"===t.kind})),25),mn(dt,(o=Ut.drm,(o?Di[o]||999:0)||me),26),mn(ut,(n=_,i=e,r=E,r.some(n.tracks,function(t){var e=t.kind;return"captions"===e||"subtitles"===e})?1:i.getCaptionsList().length>1?2:0),27),mn(fn,Un(_),28),mn(zt,v.height,57),mn(Jt,v.width,58),mn(le,v.reason,59),mn(ve,ke,60)].concat(Ce(_,bi(l))))}function xe(n,i,r,a){if(Wt=0,Ve()){var u=gn(e),d=[];if(a){if(!u[mt])return;d.push(mn(gt,a,23))}var c=i+.5|0;if(c>0){var A=Sn(e);Yt.track(o,t,[mn(D,c,20),mn(M,0|n,21),mn(q,Nn(u),22),mn(Q,On(u),23),mn(zt,A.height,57),mn(Jt,A.width,58),mn(te,fe.getUnderBufferTimeDelta(o),59)].concat(d).concat(Ce(u,r)))}}}function Ye(e,n,i){e=Math.floor(e),n=Math.floor(n),i=Math.floor(i);var r=n-e;return 0===r?function(){}:Yt.track.bind(Yt,d,t,[mn(ne,e,20),mn(ie,n,21),mn(re,r,22),mn(ae,i,23)].concat(we()))}function Ge(n,i,r){if(Ve()&&n<r&&n+i>=r){var a=gn(e),o=Sn(e);Yt.track(u,t,[mn(it,Si(Ut.playReason),17),mn(S,r),mn(q,Nn(a),22),mn(Q,On(a),23),mn(zt,o.height,57),mn(Jt,o.width,58),mn(ee,fe.getCumulativeUnderBuffer(),59)].concat(Ce(a,bi(Be()))))}}function Ke(t){var e=arguments.length>1&&void 0!==arguments[1]&&arguments[1];Ve()&&(Te||(Te=new Ci(Ye)),e?Te.trackSeekEnd(t):Te.trackSeek(t))}xt.getCommonTrackingParameters=function(){return we(gn(e))},ui(we,e,Yt.track.bind(Yt)),Ai(we,e,function(){Ve()&&Yt.track.apply(Yt,arguments)}),xt.getPlaylistTrackingParameters=function(){return ye(gn(e))},e.on("idle",Oe),e.on("ready",function(t){Ut.ready=E.extend({},t),Ut.item=gn(e)}),e.on("playlistItem",function(t){Ut.drm="",Ut.itemId=yn(12),ge++,Ut.index=t.index;var n=t.item||gn(e);if(Ut.ready&&(Ue(n,Ut.ready),Ut.item=null,Ut.ready=null),e.off("beforePlay",Ne),e.once("beforePlay",Ne),Oe(),Pe=me=!1,function(){try{if(e.getEnvironment){var t=e.getEnvironment();return!(t.Browser.facebook&&t.OS.iOS)}return!(e.utils.isFacebook()&&e.utils.isIOS())}catch(t){return!1}}()&&Ve(n)){var i=Vn(n),r=n.externalId,a={analyticsID:Nt[Mt],mediaID:i,embedID:Bt[j],playID:Ut.itemId,externalID:r};setTimeout(function(){return function(t,e){var n=document.getElementById(Bi);n||((n=document.createElement("iframe")).setAttribute("id",Bi),n.style.display="none",t.getContainer().appendChild(n));var i={PARAM_ANALYTICS_TOKEN:e.analyticsID,PARAM_MEDIA_ID:e.mediaID,EMBED_ID:e.embedID,ITEM_ID:e.playID,PARAM_EXTERNAL_ID:e.externalID},r=Object.keys(i).reduce(function(t,e){var n=i[e];return null===n||void 0===n?t:t+(t.length?"&":"")+Rn[e]+"="+encodeURIComponent(n)},"");n.src="https://g.jwpsrv.com/g/gcid-0.0.1.html?"+r}(e,a)})}}),e.on("playAttemptFailed",function(t){var i=t.item||gn(e);Ut.mediaId=Vn(i),Ut.externalId=i.externalId,Ve()&&Yt.track(s,n,[mn(vn,t.code,17)].concat(Le(t.item)))}),e.on("meta",be(Ui)),e.on("levels",be(Fi)),e.on("play",be(Vi)),e.on("firstFrame",be(xi)),e.on("time",function(t){var n=In(e),i=t.duration;if(n){if(n>1){if(!Ht[Ui]){var r={duration:i},a=e.getContainer().querySelector("video");a&&(r.width=a.videoWidth,r.height=a.videoHeight),be(Ui)(r)}Ht[Fi]||be(Fi)({})}var o,u=bi(i),d=(o=i)===1/0?null:n/(o/u)+1|0;0===jt&&(jt=d),null===de&&(de=n);var c=n-de;if(de=n,c=Math.min(Math.max(0,c),4),Wt+=c,Ge(qt,c,10),Ge(qt,c,30),Ge(qt,c,60),qt+=c,!(i<=0||i===1/0)&&d===jt+1){var A=Yi*jt/u;if(jt=0,d>u)return;xe(A,Wt,u)}}}),e.on("seek",function(t){de=In(e),jt=0,Ke(t)}),e.on("seeked",function(t){Ke(t,!0)}),e.on("complete",function(){var t=Be();if(!(t<=0||t===1/0)){var e=bi(t);xe(Yi,Wt,e),qt=0}}),e.on("cast",function(t){he=!!t.active});var je=Lt.defaultPlaybackRate||1;e.on("playbackRateChanged",function(e){Ve()&&Yt.track(A,t,[mn(Ae,je,20)].concat(xt.getCommonTrackingParameters())),je=e.playbackRate});var We=["auto","initial choice"];e.on("visualQuality",function(){var n,i,r=Sn(e);n=r,i=!1,Mn.width===n.width&&Mn.height===n.height||(i=!0),Mn=n,i&&-1===We.indexOf(r.reason)&&Ve()&&Yt.track(l,t,[mn(Jt,r.width,17),mn(zt,r.height,18),mn(le,r.reason,19),mn(k,kn(e),19)].concat(xt.getCommonTrackingParameters()))}),Oe()})}();