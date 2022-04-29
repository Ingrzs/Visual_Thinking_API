const studentservices = require("./../../lib/services/studentservices")

describe("Tests Para studentservice", () => {

    test("Requerimiento uno obtener student id", () => { 
        const student = [{id: "6452a"}];
        const studentbyid = studentservices.filterByid(student, "6452a");
        expect(studentbyid.length).toBe(1);
     
    });

    test("Requerimiento dos obtener student name", () => { 
        const student = [{name: "warren"}];
        const studentbyname = studentservices.filterbyname(student, "warren");
        expect(studentbyname.length).toBe(1);
     
    });



});
