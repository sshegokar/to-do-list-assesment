/******************************************************************************
 *  Execution        :   1. default node         cmd> node . 
 *  Purpose          : Test cases for login,register,trash,forgot password,reset password,
 * reminder,search notes.
 *
 *  @file            : user.js
 *  @overview        : Implement Test cases.
 *  @author          : Shubhangi shegokar
 *  @version         : LoopBack 3.x
 *  @since           : 24/04/2019
 *
 ******************************************************************************/
/**
 * require the all required file
 */
var assert = require('chai').assert,

    app = require('../server/server');
var testjson = require('../Test/test.json')
var chai = require('chai')
var chaiHttp = require('chai-http');
chai.use(chaiHttp)

/********************************************************
 * @purpose test case for the login api
 ***********************************************************/

describe('user', function () {
    var server;

    beforeEach(function (done) {
        server = app.listen(done);
    });

    afterEach(function (done) {
        server.close(done);
    });

    it('should log in with live server ', function (done) {

        chai.request('http://localhost:3000').post('/api/users/login')
            .send(testjson.login)
            .end(function (err, loginRes) {
                if (err) { return done(err); }
                assert.equal(loginRes.status, 200);
                done();
            });
    });
});

/********************************************************
    * @purpose test case for the forgot password api
    ***********************************************************/
describe('user', function () {
    var server;

    beforeEach(function (done) {
        server = app.listen(done);
    });

    afterEach(function (done) {
        server.close(done);
    });

    it('should forgot password with live server ', function (done) {
        chai.request('http://localhost:3000')
            .post('/api/users/reset')
            .send(testjson.forgot)
            .end(function (err, forgotRes) {
                if (err) { return done(err); }
                assert.equal(forgotRes.status, 204);
                done();
            });
    });
});
/********************************************************
    * @purpose test case for the register api
    ***********************************************************/
// describe('user', function () {
//     var server;

//     beforeEach(function (done) {
//         server = app.listen(done);
//     });

//     afterEach(function (done) {
//         server.close(done);
//     });

//     it('should register password with live server ', function (done) {
//         chai.request('http://localhost:3000')
//             .post('/api/users')
//             .send(testjson.register)
//             .end(function (err, regisRes) {
//                 if (err) { return done(err); }
//                 assert.equal(regisRes.status, 200);
//                 done();
//             });
//     });
// });
/********************************************************
    * @purpose test case for the reminder api
    ***********************************************************/

describe('notes', function () {
    var server;

    beforeEach(function (done) {
        server = app.listen(done);
    });

    afterEach(function (done) {
        server.close(done);
    });
    it('should reminder with live server ', function (done) {
        chai.request('http://localhost:3000')
            .post('/api/notes/reminder')
            .send(testjson.reminder)
            .end(function (err, remRes) {
                if (err) { return done(err); }
                assert.equal(remRes.status, 200);
                done();
            });
    });
})
/********************************************************
     * @purpose test case for the search api
     ***********************************************************/
describe('notes', function () {
    var server;

    beforeEach(function (done) {
        server = app.listen(done);
    });

    afterEach(function (done) {
        server.close(done);
    });
    it('should serach with live server ', function (done) {
        chai.request('http://localhost:3000')
            .get('/api/notes/search')
            .send(testjson.search)
            .end(function (err, searchRes) {
                if (err) { return done(err); }

                assert.equal(searchRes.status, 200);

                done();
            });
    });

});
/********************************************************
     * @purpose test case for the trash api
     ***********************************************************/

describe('notes', function () {
    var server;

    beforeEach(function (done) {
        server = app.listen(done);
    });

    afterEach(function (done) {
        server.close(done);
    });


    it('should trash with live server', function (done) {
        chai.request('http://localhost:3000')
            .get('/api/notes/trash')
            .send(testjson.trash)
            .end(function (err, trashRes) {
                if (err) { return done(err); }
                assert.equal(trashRes.status, 200);
                done();
            });
    });
});



describe('user', function () {
    var server;

    beforeEach(function (done) {
        server = app.listen(done);
    });

    afterEach(function (done) {
        server.close(done);
    });

    it('should reset password with live server ', function (done) {
        chai.request('http://localhost:3000')
            .post('/api/users/reset-password')
            .set('Authorization', 'dFia23OYHurvgwsjyfupbz78EEsDLkZus11KSvEroe6azDzTH4J9R9TdKPe4Pme6')
            .send(testjson.resetPassword)
            .end(function (err, loginRes) {
                if (err) { return done(err); }
                assert.equal(loginRes.status, 204);
                done();
            });
    });
});



