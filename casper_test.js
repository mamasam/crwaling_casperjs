var casper = require('casper').create({verbose: true, logLevel: "debug"});

var start_url = 'https://nid.naver.com/nidlogin.login?mode=form&template=&url=http%3A%2F%2Ffinance.naver.com%2Fmystock%2FitemList.nhn%3FgroupId%3D0%26type%3DOVERALL';


casper.start(start_url, function() {
    this.fill('form#frmNIDLogin', {
        'id' : '',
        'pw' : ''
    }, true);
});


casper.waitWhileSelector('form', function(){
    this.evaluate(function() {
        document.querySelector('input[type="submit"]').click();
    });
});


casper.then(function(){
    var contents = function(){
	return document.querySelector('#itemForm > table > tbody > tr.tr_up > td.td > a').title;
    };
    console.log('my 종목명 : ' + this.evaluate(contents));
});
//dkdk

casper.run();
