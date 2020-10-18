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

if (window.location.href.includes("login")) {

    var Test = __st;
    localStorage.setItem('Test', JSON.stringify(Test));
    console.log('This is test ' + Test);
};

// End of Login Page script

//Start of script to run on Homepage or Accounts page

console.log((window.location.href == home) || (window.location.href == account_page));

if ((window.location.href == home) || (window.location.href == account_page)) {
    
    console.log("I am loading from github");

   
    var retrievedObject = localStorage.getItem('Test'); 
    console.log('retrived object ' + retrievedObject);
    var domain = '';
    var theUrl = JSON.parse(retrievedObject)["pageurl"];
    console.log(theUrl);
    var url_dec = decodeURIComponent(theUrl);
    console.log(url_dec);

   if (oldURL.includes('challenge')) {

        if (url_dec.includes("checkout_url")) {

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


    }}
;

// End of home page script



