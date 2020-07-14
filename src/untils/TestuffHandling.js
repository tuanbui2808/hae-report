var rp = require('request-promise');
var btoa = require('btoa');
var config = require('../Config.json');
var authentication = btoa(config.testuff.user + ":" + config.testuff.pass);

class TestuffHandling {
    async getTotalTests(suitePath, branchID) {
        var options = {
            method: 'GET',
            url: config.testuff.url + 'test/' + '?suite_path=' + suitePath + '&branch=' + branchID + '&meta_only=True',
            headers:
            {
                'Authorization': 'Basic ' + authentication,
                'Content-Type': 'application/json'
            },
            json: true
        };

        try {
            let rsp = await rp(options);
            if (rsp.objects.length != 0) {
                return rsp.objects[0].total_count;
            }
        } catch (error) {
            console.log(error);
        }
    }
}
module.exports = new TestuffHandling();