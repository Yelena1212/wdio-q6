describe ('Test Progress Monitor first page', ()=> {
    it('should have the right title', () => {
        browser.url('https://app.pasv.us');
        const actualTitle = browser.getTitle();
        const expectedTitle = 'Progress Monitor';
        expect(actualTitle).toBe(expectedTitle);
    })


    it('should check Login button text', () => {
        const element = $('[qa ="login-link"]');
        const text = element.getText();
        const expected = 'Login';
        expect(text).toEqual(expected);
    })

    it('should click to Login and go to the login page', () => {
        const element = $('[qa ="login-link"]');
        element.click();
        browser.pause(3000);

    })

    it('should check Login page title', () => {
        const elementText = $('//h1').getText();
        const expected = 'User Login';
        expect(elementText).toEqual(expected);

    });

     //
     // describe('verify Register Text', () => {
     //
     //    it('should check Register button and go to the register page', () => {
     //        browser.url('https://app.pasv.us');
     //        const element2 = $('[qa="register-link"]');
     //        element2.click();
     //        browser.pause(3000);
     //
     //    });
     //
     //    it('should check Register page title', () => {
     //        const elementText2 = $('//h1').getText();
     //        const expected = 'User Register';
     //        expect(elementText2).toEqual(expected);
     //
     //    });
     //
     //    it('should check First Name', () => {
     //        const firstName = $("//label[@for='firstName']");
     //        const text = firstName.getText();
     //        const expected = "First Name";
     //        expect(text).toEqual(expected);
     //
     //    });
     //    // it('should check First Name (FN) ', function () {
     //    //     const firstName  = $("//label[@for='firstName']");
     //    //     const titleFN = firstName.getText();
     //    //     expect(titleFN).toEqual('First Name');
     //    // });
     //
     //    it('should  first name required',  () => {
     //        const firstRequired = $('//span[@class="invalid-feedback w-auto ml-2"]');
     //        const text = firstRequired.getText();
     //        const expected = "Required";
     //        expect(text).toEqual(expected);
     //    });
     //
     //    it('should check Last Name', () => {
     //        const lastName = $("//label[@for='lastName']");
     //        const text = lastName.getText();
     //        const expected = "Last Name";
     //        expect(text).toEqual(expected);
     //
     //    });
     //    it('should  last name required',  () => {
     //        const secondRequired = $('//div[contains(@class,\'col-sm-12 col-md-10 col-lg-6\')]//div[2]//div[1]//span[1]');
     //        const text = secondRequired.getText();
     //        const expected = "Required";
     //        expect(text).toEqual(expected);
     //    });
     //
     //    it('should check Email text', () => {
     //        const eMail = $("//label[contains(text(),'Email')]");
     //        const text = eMail.getText();
     //        const expected = "Email";
     //        expect(text).toEqual(expected);
     //
     //    });
     //
     //    it('should check Password text', () => {
     //        const password = $("//label[contains(text(),'Password')]");
     //        const text = password.getText();
     //        const expected = "Password";
     //        expect(text).toEqual(expected);
     //
     //    });
     //
     //    it('should Submit button disabled if First Name = abc',  () => {
     //        const firstNameIF = $('//input[contains(@name,\'firstName\')]');
     //        firstNameIF.click();
     //        firstNameIF.setValue('abc');
     //        browser.pause(2000);
     //        const submitButton = $('//button[contains(@class,\'btn btn-primary disabled\')]');
     //        const isClickable = submitButton.isClickable();
     //        const expected = false;
     //        expect(isClickable).toEqual(expected);
     //    });
     //
     //    it('should Submit button disabled if Last Name = bay',  () => {
     //        const lastNameIF = $('//input[contains(@name,\'lastName\')]');
     //        lastNameIF.click();
     //        lastNameIF.setValue('abc');
     //        browser.pause(2000);
     //        const submitButton = $('//button[contains(@class,\'btn btn-primary disabled\')]');
     //        const isClickable = submitButton.isClickable();
     //        const expected = false;
     //        expect(isClickable).toEqual(expected);
     //    });
     //
     //


     //hdbvsdviujbsdnvjk
     })
