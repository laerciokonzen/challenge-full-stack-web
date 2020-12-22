import App from "../../src/App";
import chaiHttp = require('chai-http');
import chai from 'chai';
import { expect } from "chai";
import { createConnection } from "typeorm";
import http from 'http';
import { StudentEntity } from "../../src/database/entities/StudentEntity";

describe('Students', function () {

    const app = new App();
    let server: http.Server;

    before('Initializing connection', async function () {
        await createConnection();
        server = app.startServer();
        // console.log('Test server cerated');
        chai.use(chaiHttp);
    });

    after('Tests ended', async function () {
        server.close(function () {
            // console.log('\nTest server closed');
        });
    });

    describe('>> Create new Student', function () {
        it('>> Valid data provided', function (done) {
            const newStudent = {
                name: 'Jose da Silva',
                email: 'jose.silva@gmail.com',
                cpf: '01234567890'
            };

            chai.request(server)
                .post('/student')
                .send(newStudent)
                .end(function (err, response) {
                    expect(response).to.have.status(200);
                    expect(response.body.name).to.be.equal(newStudent.name);
                    expect(response.body.email).to.be.equal(newStudent.email);
                    expect(response.body.cpf).to.be.equal(newStudent.cpf);
                    expect(response.body.academicRegister).to.be.an('number', 'academicRegister showd be a number');
                    done();
                });
        });

        it('>> Invalid NAME provided', function (done) {
            const newStudent = {
                name: null,
                email: 'jose.silva@gmail.com',
                cpf: '01234567890'
            };

            chai.request(server)
                .post('/student')
                .send(newStudent)
                .end(function (err, response) {
                    expect(response).to.have.status(422);
                    expect(response.body.error).to.be.an('string');
                    done();
                });
        });

        it('>> Invalid E-MAIL provided', function (done) {
            const newStudent = {
                name: 'Jose da Silva',
                email: null,
                cpf: '01234567890'
            };

            chai.request(server)
                .post('/student')
                .send(newStudent)
                .end(function (err, response) {
                    expect(response).to.have.status(422);
                    expect(response.body.error).to.be.an('string');
                    done();
                });
        });

        it('>> Invalid CPF provided', function (done) {
            const newStudent = {
                name: 'Jose da Silva',
                email: 'jose.silva@gmail.com',
                cpf: null
            };

            chai.request(server)
                .post('/student')
                .send(newStudent)
                .end(function (err, response) {
                    expect(response).to.have.status(422);
                    expect(response.body.error).to.be.an('string');
                    done();
                });
        });
    });

    describe('>> List existing Studends', function () {
        it('>> Showld return a list of Students', function (done) {
            chai.request(server)
                .get('/student')
                .end(function (err, response) {
                    expect(response).to.have.status(200);
                    expect(response.body).to.be.an('array', 'Response showld be a Array');
                    if (response.body.length === 0) {
                        this.skip();
                    }
                    expect(response.body[0].name).to.be.an('string', 'name showld be a String');
                    expect(response.body[0].academicRegister).to.be.an('number', 'academicRegister showd be a number');
                    done();
                });
        });
    })

    describe('>> Edit Student', function () {
        it('>> Valid data provided', function (done) {
            const newStudent: StudentEntity = {
                name: 'Jose da Silva',
                email: 'jose.silva@gmail.com',
                cpf: '01234567890'
            };

            chai.request(server)
                .post('/student')
                .send(newStudent)
                .end(function (err, response) {

                    const studentToUpdate = response.body;

                    chai.request(server)
                        .put('/student')
                        .send({
                            ...studentToUpdate,
                            name: 'Student New Name',
                            email: 'new-student@email.com'
                        })
                        .end((err, updtResponse) => {
                            expect(updtResponse).to.have.status(200);
                            expect(updtResponse.body.name).to.be.equal('Student New Name');
                            expect(updtResponse.body.email).to.be.equal('new-student@email.com');
                            expect(updtResponse.body.cpf).to.be.equal(studentToUpdate.cpf);
                            expect(updtResponse.body.academicRegister).to.be.equal(studentToUpdate.academicRegister);
                            done();
                        });
                });
        });
    });

    describe('>> Delete Student', function () {
        it('>> Valid data provided', function (done) {
            const newStudent: StudentEntity = {
                name: 'Jose da Silva',
                email: 'jose.silva@gmail.com',
                cpf: '01234567890'
            };

            chai.request(server)
                .post('/student')
                .send(newStudent)
                .end(function (err, response) {

                    const studentToDelete = response.body;
                    chai.request(server)
                        .del(`/student/${studentToDelete.academicRegister}`)
                        .end(function (err, delResponse) {
                            expect(delResponse).to.have.status(204);
                            done();
                        });
                });
        });
    })
})