const axios = require('axios');
const employee = require('../model/employeeModel');
const axiosRetry = require('axios-retry');


class employeeController {
    async getAll(req, res) {
        axiosRetry(axios, { retries: 3 });
        try {
            await axios.get('http://localhost:3000/api/v1/whether')
            res.send("thanh cong")

        } catch (error) {
            const resdata = {
                status: error.response.status,
                message: error.message,
            }
            console.log("sssss", resdata)
            console.log("hhhhhhh", error.message);
            console.log(error);
            res.status(500).json(resdata);
        }
    }
    getUser(req, res) {
        const age_search = req.query.age
        const result = employee.filter((item) => {
            return item.age === parseInt(age_search)

        });
        res.send(result)
    }
    getUserId(req, res) {
        const id_seach = req.params.id
        const result = employee.filter((item) => {
            return item.id === parseInt(id_seach)

        });
        res.send(result)
    }
    createUser(req, res) {
        employee.push(req.body)
        res.send(employee)
    }
    deleteUserId(req, res) {
        const id_delete = req.params.id
        const result = employee.filter((item) => {
            return item.id !== parseInt(id_delete)
        });
        res.send(result)
    }
    updateUser(req, res) {
        const userupdateid = req.params.id;
        const dataUpdate = req.body

        let employeeUpdated = employee.map(item => {

            if (item.id == userupdateid) {
                item = { ...item, ...dataUpdate };
            }
            return item;
        })
        res.send(employeeUpdated)
    }
}
module.exports = new employeeController
