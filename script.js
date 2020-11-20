// console.log("I am still loading from github");

//Declaring of initial variables
var oldURL = document.referrer;


if (window.location.href.includes("https://")){

    var home = ('https://' + window.location.hostname + '/');
    var account_page = ('https://' + window.location.hostname + '/account');

}

else

{
    var home = (window.location.hostname + '/');
    var account_page = (window.location.hostname + '/account');
};

//End of declaration of initial variables
//

//Start of Login Page script

if (window.location.href.includes("login") && window.location.href.includes("checkout_url")) {

    console.log('Im on the login page which has a checkout url!... and running from github');
    var newTest = (decodeURIComponent(window.location.href));
    console.log('This is newTest ' + newTest);

    localStorage.setItem('newTest', newTest);
    
};

// End of Login Page script

//Start of script to run on Homepage or Accounts page

// console.log((window.location.href == home) || (window.location.href == account_page));

if ((window.location.href == home) || (window.location.href == account_page)) {

    console.log('Im either on the home page or the account page... and im running from github');
    // var newretrievedObject = localStorage.getItem('newTest');
    // console.log('New retrived object ' + newretrievedObject);

    var newretrievedObject = localStorage.getItem('newTest'); 
    console.log('retrived object ' + newretrievedObject);


    var domain = '';
//     console.log(theUrl);
    var url_dec = newretrievedObject.replace('https://', '');
//     console.log(url_dec);

   if (oldURL.includes('challenge')) {

            if (url_dec.includes(".myshopify.com")) { 

                redirectURL = domain.concat((window.location['host']), "/account/login?checkout_url=https://", Shopify.shop, "/",);    
            
                    var newCheckout = url_dec.replace(redirectURL, '');  
                    window.location.replace(newCheckout);
                    localStorage.removeItem("Test");                                       
            }  

            else

            {                 

                redirectURL = domain.concat((window.location['host']), "/account/login?checkout_url=https://", (window.location['host']), "/",);
                    var newCheckout = url_dec.replace(redirectURL, '');  
                    window.location.replace(newCheckout);
                    localStorage.removeItem("Test"); 

            }
        };


    }
;

// End of home page script
