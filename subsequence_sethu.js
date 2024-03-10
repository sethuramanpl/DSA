function gss(str, stringToSearch, result, count = { value: 0 }){
    
    if(str.length === 0){
    console.log(result)
    if(result === stringToSearch){
        console.log('matched')
        count.value++; // Increment the count by updating the value property of the count object
            console.log(count.value);
    }
    return;
    }
    
    //pick
    gss(str.substring(1),stringToSearch,  result + str[0], count )
    
    //not pick
    gss(str.substring(1),stringToSearch, result, count)
}

const mainString = "abcabc"
const stringToSearch = "abc"
let result = ''
const count = { value: 0 };
gss(mainString,stringToSearch,result,count);
