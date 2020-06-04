import RegisterPage from "../pages/RegisterPage.js";

before(() => {
    RegisterPage.open();
})

describe ('Verify all elenments present on the Register page', () => {
    it('should check header is present',  () => {
       expect(RegisterPage.header.isDisplayed()).true;
    });

    it('should check header text',  () => {
      expect(RegisterPage.header.getText()).equal('User Register');
    });

    it('should verify paragraph text', function () {
        expect(RegisterPage.paragraph.getText()).equal('Profiles with fictitious or dummy data will be deleted.');

    });

    it('should verify 4 required fields are present', () => {
        expect(RegisterPage.requiredFields.length).eq(4);
    })


    it('should fill out and submit form', function () {
        RegisterPage.firstNameInput.setValue('Yelena');
        RegisterPage.lastNameInput.setValue('Baranchuk');
        RegisterPage.emailInput.setValue('123@gmail.com');
        RegisterPage.passwordInput.setValue(123456789);
        RegisterPage.submitForm();
        browser.pause(2000);

    });


})