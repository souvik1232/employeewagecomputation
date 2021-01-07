const WAGE_PER_HOUR = 20;
const FULL_DAY_HOUR = 8;
const PART_TIME_HOUR = 4;
const FULL_TIME = 1;
const PART_TIME = 2;
const WORKING_DAYS_PER_MONTH = 20;
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
        let monthlyWage;
        if (attendance==1) {
            let type = (Math.floor(Math.random() * 2)+1);
            switch (type) {
                case FULL_TIME:
                    wage = WAGE_PER_HOUR * FULL_DAY_HOUR;
                    monthlyWage = wage * WORKING_DAYS_PER_MONTH;
                    console.log("Employee Wage is : ",wage);
                    console.log("Monthly Wage is : ",monthlyWage);
                    break;
                case PART_TIME:
                    wage = WAGE_PER_HOUR * PART_TIME_HOUR;
                    monthlyWage = wage * WORKING_DAYS_PER_MONTH;
                    console.log("Employee Wage is : ",wage);
                    console.log("Monthly Wage is : ",monthlyWage);
                default:
                    break;
            }
        }
    }
}
module.exports = new EmployeeWageComputation();