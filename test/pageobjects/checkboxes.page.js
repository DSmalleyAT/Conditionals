const Page = require('./page');

class ChexPage extends Page {

    get checkOne () {
        return $('form input:nth-child(1)');
    }

    get inputPassword () {
        return $('#password');
    }

    get btnSubmit () {
        return $('button[type="submit"]');
    }

    open () {
        return super.open('checkboxes');
    }
}

module.exports = new ChexPage();