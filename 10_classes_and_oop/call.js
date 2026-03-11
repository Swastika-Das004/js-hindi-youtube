function setUsername(username){
    // complex DB calculation
    this.username = username
    console.log("called");
    
}

function createUser(username, email, password){
    setUsername.call(this, username)
    // setUsername(username)// it will not really call the setUsername function

    this.email= email
    this.password = password

}

const chai = new createUser("swastika", "chai@fb.com", "213")
console.log(chai);

// The sentence:

// “.call() is used to explicitly set the value of this while invoking a function.”

// can be rewritten in much simpler words like this:

// ✅ “.call() lets us choose what this should refer to when we run a function.”

// Even simpler:

// 👉 .call() runs a function and tells JavaScript which object this should point to.