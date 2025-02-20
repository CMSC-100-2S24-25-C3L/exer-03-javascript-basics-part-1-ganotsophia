
var alpha = 'abcdefghijklmnop'
var capital = 'ABCDEFGHIJKLMNOP'
var word1

validatePassword("helloworld", "hello1234")
reversePassword("Hello")
storePassword("John","Pass1234","Pass12345")

function validatePassword(word1, word2){
    var found1 = 0
    var found2 = 0
    var first = 0


    if(word1.length >= 8){
        if(word1 == word2){

            for (let i = 0; i<word2.length; i++){
                for(let j = 0; j<capital.length; j++){                
                    if (word1[i] == capital[j]){
                            found1++
                            if(found1 == 1){

                                first++

                                return console.log("true") 
                            
                                
                                
                            }

                            
                        }

                    }   
            }
            if(found1 == 0){return console.log("false")}

            // if (first == 1){
            // for (let k = 0; k<word2.length; k++){
            //     for(let l = 0; l<alpha.length; l++){                
            //         if (word1[k] == alpha[l]){
            //                 found2++
            //                 if(found2 == 1){

    
            //                     return console.log("true") 
                            
                                
                                
            //                 }

                            
            //             }

            //         }   
            //     }
            // }
            // if(found2 == 0){return console.log("false")}
            
                

            

            return console.log("true") 

            
   
        }
        return console.log("false")

    }
      

    else{
        return console.log("false")
    }
    
}    


function reversePassword(word1){
    var reversed = ""
    for(var i = word1.length - 1; i>=0; i--){
        reversed = reversed + word1[i]
    }
    console.log("Reversed string:", reversed)
    return reversed
}

function storePassword(name, word1, word2){
    var reversePW = reversePassword(word1)

    if(word1 == word2){
        console.log(`{name: ${name}, newpassword: ${reversePW}}`)
    }
    else{
        console.log(`{name: ${name}, newpassword: ${word1}}`)

    }
}