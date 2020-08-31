const { Client } = require('../node_modules/pg');

const client = new Client({
    user: 'user',
    host: 'localhost',
    database: 'db',
    password: 'pass',
    port: 5432,
});

client.connect();
console.log("connected succesfully");

function createTable(){
    client.query((`CREATE TABLE IF NOT EXISTS Visitors(
        ID SERIAL,
        Name varchar(50),
        Age int,
        dateOfVisit DATE,
        timeOfVisit TIME,
        assistedBy varchar(50),
        comments varchar(100)
    )`), (err, res) =>{
        if(err){
            throw err;
        }
        console.table(res.rows);
        client.end();
    })
}

// createTable();

function    addNewVisitor(fullname, Age, dateOfVisit, timeOfVisit, assistedBy, comments){
    client.query(`INSERT INTO visitors(Name, Age, dateOfVisit, timeOfVisit, assistedBy, comments)
    VALUES($1,$2,$3,$4,$5,$6);`,[fullname, Age, dateOfVisit, timeOfVisit, assistedBy, comments], 
    (err, res) => {
        if(err){
            throw err;
        }
        console.table(`Data Inserted Into Visitors Table` + '\n'+ res.rowCount);
        client.end();
    });
}

// addNewVisitor('shawn martin', 25, '2020-09-10', '16:01', 'Hank Philips', 'Services');

function listAllVisitors(input){
    client.query(input, (err, res) =>{
        if(err){
            throw err;
        }
        console.table(res.rows);
        client.end();
    })
}

// listAllVisitors('SELECT Name, ID FROM Visitors;');

function    deleteAVisitor(fullname){
    client.query(`DELETE FROM Visitors WHERE Name = $1;`,[fullname] ,(err, res) => {
        if(err){
            throw err;
        }
        console.log('deleted successfully' + res.rowCount);
        client.end();
    })
}

// deleteAVisitor('Kim Layne');

function updateVisitor(id, newValue, column){
    client.query(`UPDATE Visitors SET ${column} = $1 WHERE ID = $2`, [newValue, id], (err, res) => {
        if(err){
            throw err;
        }
        console.log('data updated successfully', res.rowCount);
        client.end();
    });
}

// updateVisitor(1, '12:32', 'timeOfVisit');

function    viewVisitor(id){
    client.query(`SELECT * FROM Visitors WHERE ID = $1`, [id], (err, res) => {
        if(err){
            throw err;
        }
        console.table(res.rows);
        client.end();
    });
}

// viewVisitor(1);

function    deleteAllVisitors(){
    client.query(`DELETE FROM Visitors`, (err, res) => {
        if(err){
            throw err;
        }
        console.log('Table cleared successfully', res.rows);
        client.end();
    })
}

// deleteAllVisitors();

module.exports = { addNewVisitor, updateVisitor, deleteAVisitor, deleteAllVisitors, viewVisitor, listAllVisitors };