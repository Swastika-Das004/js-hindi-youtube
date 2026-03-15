class User {
    constructor (email, password){
        this.email = email
        this.password = password
    }

    // sometimes we don't want to show our info..like may be it's sensitive so we don;t want anybody to access it or we will tell we will not tell you the information.. so  in this type of case how to give errors,there is a need of getter and setter

    get password(){
        return this._password.toUpperCase()
    } // whenever soomeone will try to access the password it will always show different think like here we have taken something like nbnvb so it will return all in caps...

    // set password(value){
    //     this.password = value
    // } 
    // it is showing maximum call size exceeded..because we can see in the above section constructor is trying to set the password here "set" is also trying to set a value...so due to both are doing same , they keep racing who will set the value..and by doing this call stack size exceeds..

    // so we need to have a different property for set->
    set password(value){
        this._password = value 
        // after doing this it will solve set problem but not the get problem..again we are having same error - maximum call stack exceeded at get stack...so now like how we fixed set error by using another property we need to do the same...
    }


    // now let's do the email also ->
    get email(){
        return this._email.toUpperCase()
    }
    set email(value){
        return this._email = value
    }
}

const swastika = new User("srijon@123", "nbbmb")
console.log(swastika.password);  // it will show 789
console.log(swastika.email);
