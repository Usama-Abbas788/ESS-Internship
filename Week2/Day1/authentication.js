const users = [];
function createUser(name, email, password, role){
    // Implementation for creating a new user
    const newUser = {
        id : users.length + 1,
        name: name,
        email: email,
        password: password,
        role: role
    }
    users.push(newUser);
    return newUser;
}