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

    test("Requerimiento tres para saber si es certificado es true", () => { 
        const certificate = [{ id: "6264d5d89f1df827eb84bb23",
        name: "Warren",
        email: "Todd@visualpartnership.xyz",
        credits: 508,
        enrollments: [
          "Visual Thinking Intermedio",
          "Visual Thinking Avanzado"
        ],
        previousCourses: 1,
        haveCertification: true}];
        const studentbyname = studentservices.filtercertificationtrue(certificate, true);
        expect(studentbyname[0].name).toBe("warren");
     
    });





});
