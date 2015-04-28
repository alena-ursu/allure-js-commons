function Suite(name) {
    this.name = name;
    this.start = Date.now();
    this.testcases = [];
}
Suite.prototype.end = function() {
    this.stop = Date.now();
};

Suite.prototype.hasTests = function() {
    return this.testcases.length > 0;
};

Suite.prototype.addTest = function(test) {
    this.testcases.push(test);
};

Suite.prototype.toXML = function() {
    return {
        '@': {
            'xmlns:ns2' : 'urn:model.allure.qatools.yandex.ru',
            start: this.start,
            stop: this.stop
        },
        name: this.name,
        title: this.name,
        'test-cases': {
            'test-case': this.testcases.map(function(testcase) {
                return testcase.toXML();
            })
        }
    }
};

module.exports = Suite;