const studentcontroller = require("./../../lib/controllers/studentcontroller")

describe("Tests Para studentcontroller", () => {

    test("Requerimiento uno obtener student id", () => { 
        
        const studentbyid = studentcontroller.getstudentByid("6264d5d89f1df827eb84bb23");
        expect(studentbyid[0].id).toBe("6264d5d89f1df827eb84bb23");
    });
})