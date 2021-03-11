const axios = require("axios");

module.exports = {

    findAllBooks: function(req, res) {
         {
            axios.get( 'https://www.googleapis.com/books/v1/volumes?q=mermaid+intitle&pagination=maxresults:keyes&key=AIzaSyDeGWWEA1K3GWiewyUCCw4M2n0xw9Sl0hc'
              
            ).then(results => console.log("list", results) )
        
            // const bookList = await response.json();
            // console.log("RESPONSE", bookList);
            // setbooks([...bookList.items]);
            // console.log("DATA", bookList.items);
          .catch (err => 
            console.log("error: ",err));
          
        };
    
    }
    


}


