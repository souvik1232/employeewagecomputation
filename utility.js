const WAGE_PER_HOUR = 20;
const FULL_DAY_HOUR = 8;
class EmployeeWageComputation {
    employeeAttendance=()=>{
        let attendance = Math.floor(Math.random() * 2);
        if (attendance == 1) {
            console.log("Present");
            return 1
        } else {
            console.log("Absent");
            return 0
        }
    }
    dailyEmployeeWage=(attendance)=>{
        let wage;
        if (attendance==1) {
            wage = WAGE_PER_HOUR * FULL_DAY_HOUR;
            console.log("Employee Wage is : ",wage);
        }
    }
}
module.exports = new EmployeeWageComputation();