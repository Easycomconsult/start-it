document.body.innerHtml = "Newpage.html-2";


var database = [
    {
        username: "moss",
        password: "mass"
    }, 
];
    
 var database1 = [   
    
    
    { username: "buba",
         password: "baba"
         
    }
 ];
 var newsFeed =[ {
    username: "fatima",
    timeline: "i am happy to get parents"
 },
    
                    {
                  username: "mariamu",
                  timeline: "my parent are the best"
        }
    
 ];
 
 
 
function signIn(usernames, passwords) { if (usernames === database [0].username &&
    passwords === database[0].password) {
        console.log (newsFeed); 
    } else {
        alert ("sorry wrong username & password");
    }
    
 };
 var userNamePrompt = prompt ("what is your username?");
 var passwordPrompt = prompt ("what is your password?");

 signIn (userNamePrompt, passwordPrompt);


 
