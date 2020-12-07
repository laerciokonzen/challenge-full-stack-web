import App from "../../src/App";
import chaiHttp = require('chai-http');
import chai from 'chai';
import { expect } from "chai";

describe('Students Endpoints', () => {

    const app = new App();

    before(() => {
        chai.use(chaiHttp);
        app.initApp();
    });

    context('Create new Student', () => {
        it('Valid data provided', (done) => {
            const newStudent = {
                name: 'Jose da Silva',
                email: 'jose.silva@gmail.com',
                cpf: '01234567890'
            };

            chai.request(app.startServer())
                .post('/sudents')
                .send(newStudent)
                .end((err, response) => {
                    expect(err).to.be.null;
                    expect(response).to.have.status(200);
                    expect(response.body.name).to.be.equal(newStudent.name);
                    expect(response.body.email).to.be.equal(newStudent.email);
                    expect(response.body.cpf).to.be.equal(newStudent.cpf);
                    done();
                });
        });

        it('Invalid NAME provided', (done) => {
            const newStudent = {
                name: null,
                email: 'jose.silva@gmail.com',
                cpf: '01234567890'
            };

            chai.request(app.startServer())
                .post('/sudents')
                .send(newStudent)
                .end((err, response) => {
                    expect(err).to.be.null;
                    expect(response).to.have.status(422);
                    expect(response.body.error).to.be.an('string');
                    done();
                });
        });

        it('Invalid E-MAIL provided', (done) => {
            const newStudent = {
                name: 'Jose da Silva',
                email: null,
                cpf: '01234567890'
            };

            chai.request(app.startServer())
                .post('/sudents')
                .send(newStudent)
                .end((err, response) => {
                    expect(err).to.be.null;
                    expect(response).to.have.status(422);
                    expect(response.body.error).to.be.an('string');
                    done();
                });
        });

        it('Invalid CPF provided', (done) => {
            const newStudent = {
                name: 'Jose da Silva',
                email: 'jose.silva@gmail.com',
                cpf: null
            };

            chai.request(app.startServer())
                .post('/sudents')
                .send(newStudent)
                .end((err, response) => {
                    expect(err).to.be.null;
                    expect(response).to.have.status(422);
                    expect(response.body.error).to.be.an('string');
                    done();
                });
        });
    })

    context('List existing Studends', () => {

    })

    context('Edit Student', () => {

    })

    context('Remove Student', () => {

    })
})