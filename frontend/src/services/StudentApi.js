import axios from 'axios';

export default {
    async fetchStudents() {
        return axios.get('student')
            .then(response => {
                return response.data
            })
    },

    async deleteStudent(academicRegister) {
        return axios.delete(`student/${academicRegister}`)
            .then(response => {
                return response.data
            })
    },

    async editStudent(student) {        
        return axios.put('student', student)
            .then(response => {
                return response.data
            })
    },

    async createStudent(student) {        
        return axios.post('student', student)
            .then(response => {
                return response.data
            })
    }
}