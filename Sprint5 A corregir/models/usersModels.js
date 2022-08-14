const fs = require('fs');

const User = {
    filePath: './data/usersDataBase.json',

    readJson: function() {
        return JSON.parse(fs.readFileSync(this.filePath, 'utf-8'));
    },
    findAll: function() {
        return this.readJson();
    },
    findByPK: function(id) {
        let allUsers = this.findAll();
        let findUser = allUsers.find(oneUser => oneUser.id === id);
        return findUser;
    },
    findByField: function(field, text) {
        let allUsers = this.findAll();
        let userFound = allUsers.find(oneUser => oneUser[field] === text);
        return userFound;
    },
    generateId: function() {
        let allUsers = this.findAll();
        let lastUser = allUsers.pop();
        if(lastUser) {
            return lastUser.id + 1;
        }
        return 1;
    },
    create: function(createData) {
        let allUsers = this.findAll();
        let newUser = {
            id: this.generateId(),
            ...createData
        }
        allUsers.push(newUser);
        fs.writeFileSync(this.filePath, JSON.stringify(allUsers, null, 4));
        return newUser;
    },
    delete: function(id) {
        let allUsers = this.findAll();
        let finalUsers = allUsers.filter(oneUser => oneUser.id !== id);
        fs.writeFileSync(this.filePath, JSON.stringify(finalUsers, null, 4));
        return true;
    }
}

module.exports = User;

console.log(User.create({ "firstName": "ROMINA"}));