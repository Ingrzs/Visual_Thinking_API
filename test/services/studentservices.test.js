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
        const certificate = [{ 
        email: "Todd@visualpartnership.xyz",
        haveCertification: true}];
        const studentrue = studentservices.filtercertificationtrue(certificate, true);
        expect(studentrue[0].email).toBe("Todd@visualpartnership.xyz");
     
    });

    test("Requerimiento cuatro para saber si es certificado es falso", () => { 
        const certificate = [{
        email: "Todd@visualpartnership.xyz",
        haveCertification: false}];
        const studentfalse = studentservices.filtercertificationfalse(certificate, false);
        expect(studentfalse[0].email).toBe("Todd@visualpartnership.xyz");
     
    });

    test("Requerimiento cinco para obtener estudiante con creditos mayor a 500", () => { 
        const students = [ {name: "Warren",credits: 508,}];
        const studentbyncredit = studentservices.filtercredits(students);
        expect(studentbyncredit[0].name).toBe("Warren");
     
    });

    test("Requerimiento cinco para obtener estudiante con creditos mayor a 500", () => { 
        const students = [ {name: "Warren",credits: 408,}];
        const studentbyncredit = studentservices.filtercredits(students);
        expect(studentbyncredit[0].name).toBe("Warren");
     
    });


});
