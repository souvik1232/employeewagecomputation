class EmployeeWageComputation {
    employeeAttendance=()=>{
        let attendance = Math.floor(Math.random() * 2);
        if (attendance == 1) {
            console.log("Present");
        } else {
            console.log("Absent");
        }
    }
}
module.exports = new EmployeeWageComputation();