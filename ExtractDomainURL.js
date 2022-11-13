// Write a function that when given a URL as a string, parses out just the domain name and returns it as a string. For example:

// * url = "http://github.com/carbonfive/raygun" -> domain name = "github"
// * url = "http://www.zombie-bites.com"         -> domain name = "zombie-bites"
// * url = "https://www.cnet.com"                -> domain name = cnet"


// P string
// R String of domain name
// E 
// P

 // I want to grab the string between / or www. and .com
    // I need to find index of / or .

    function domainName(url){
        let cleanse = url.replace("http://",'')
        let cleanseDos = cleanse.replace("https://",'')
        let cleanseTres = cleanseDos.replace('www.','')
    //     let cleanseQuatro = cleanseTres.replace('.com','')
        
        let split = cleanseTres.split('.')
        console.log(split)
       return split[0] 
      }
// Leons Code

function domainName(url){
    return
    // Replace the stuff upfront
    url.replace('https://','').replace('http://','').replace('www.','').split('.')[0]
    // Splitting and grabbing the first value



}

    