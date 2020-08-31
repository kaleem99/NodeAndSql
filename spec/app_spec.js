let sourceFile = require('../src/app');


it('should create a table called visitor', async(done) => {
    if(!sourceFile.createTable) {
          expect(sourceFile.createTable).toBeNull();  
    }else {
        expect(sourceFile.createTable).not.toBeNull();
    }})

it('should add some data to table', async(done) => {
    let visitorName = sourceFile.addNewVisitor(arguments[0]);
    let visitorAge = sourceFile.addNewVisitor(arguments[1]);
    let dateVisited = sourceFile.addNewVisitor(arguments[2]);
    let timeVisited = sourceFile.addNewVisitor(arguments[3]);
    let assistedBy = sourceFile.addNewVisitor(arguments[4])
    let comments = sourceFile.addNewVisitor(arguments[5])

    expect(visitorName).not.toBeNull();
    expect(visitorAge).not.toBeNull();
    expect(dateVisited).not.toBeNull();
    expect(timeVisited).not.toBeNull();
    expect(assistedBy).not.toBeNull();
    expect(comments).not.toBeNull();});

it('should list all visitors', () => {
    expect(sourceFile.listAllVisitors).toBeDefined();

});

it('should delete a visitor', async (done) => {
    let deleteVisitor = sourceFile.deleteAvisitor();
    let numBefore;
    if(numBefore = 2){
        expect(deleteVisitor).toBeLessThan(numBefore)
    }
});

it('should update a visitor', async (done) => {
    expect(sourceFile.updateAvisitor).toBeGreaterThan('number before');
});

it('should return data for a visitor', async(id, done) => {
    expect(sourceFile.viewOnevisitor).toBeDefined();
});

it('should delete all visitors', async(done) => {

    sourceFile.deleteAllVisitors;
       expect(sourceFile.deleteAllVisitors).toBeNull();
});