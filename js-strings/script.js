const userName = prompt("Whos's there?");

switch(userName) {
    case "Admin":
        const password = prompt("Password?");
        if(password == null){
            alert("Cancelled")
        } else if (password == "TheMaster"){
            alert("Welcome");
        } else {
            alert("I don't know you")
        }
        break;      
    case null:
        alert("Cancelled");
        break;
    default:
        alert("I don't know you");

}