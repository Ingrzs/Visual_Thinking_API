const studentservices = require("./../../lib/services/studentservices")
const Reader = require("./../../lib/utils/reader")

describe("Tests Para studentservice", () => {

    test("Requerimiento uno obtener student name", () => { 
        const student = [{id: "6452a"}];
        const studentbyid = studentservices.filterByid(student, "6452a");
        expect(studentbyid.length).toBe(1);
     
    });
});
