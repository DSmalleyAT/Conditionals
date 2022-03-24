const Page = require('./page');

class ChexPage extends Page {

    get checkOne () {
        return $('//body/div[2]/div[1]/div[1]/form[1]/input[1]');
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