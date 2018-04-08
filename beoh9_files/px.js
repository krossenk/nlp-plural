(function() {

    'use strict';

    // INIT
    var _hn_ver = 5,
        _ref = encodeURIComponent(document.referrer),
        _kwQuery = window.captify_kw_query_11214 ? '&kw=' + encodeURIComponent(captify_kw_query_11214) : '',
        _pxlUrl = 'https://s.cpx.to/ca.png?',
        _anxUrl = 'https://secure.adnxs.com/getuid?',
        _dcUrl = 'https://cm.g.doubleclick.net/pixel?',
        _pid = 11214,
        _nid = 'captify_dmp',
        _uuid = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
            var r = Math.random() * 16 | 0,
                v = c == 'x' ? r : (r & 0x3 | 0x8);
            return v.toString(16);
        }),
        _groupParams = 'pid=' + _pid + '&ref=' + _ref + '&hn_ver=' + _hn_ver + '&fid=' + _uuid + _kwQuery;

    // ANX
    (new Image()).src = _anxUrl + encodeURIComponent(_pxlUrl + _groupParams + '&adnxs_uid=$UID');

    // DMP
    (new Image()).src = _dcUrl + 'google_nid=' + _nid + '&google_cm&' + _groupParams;
  
  	// Avocet ID sync
  	(new Image()).src = _anxUrl + encodeURIComponent('https://ads.avocet.io/sync?invsrc=5575b5a3d6e9d6ab4a43bc78&ext_uid=$UID');

})(window);