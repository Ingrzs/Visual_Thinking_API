class StudentServices{

    static filterByid(students, id){
        const StudentByid = students.filter((student) => student.id == id);
        return StudentByid;
    }

    static filterbyname(students,name){
        
        const studentbyname =students.filter((student) => student.name == name);
        const namestudent = studentbyname.map((student) => student.name)
         return namestudent;
    }

}
module.exports = StudentServices