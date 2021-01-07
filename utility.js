const WAGE_PER_HOUR = 20;
const FULL_DAY_HOUR = 8;
const PART_TIME_HOUR = 4;
const FULL_TIME = 1;
const PART_TIME = 2;
const WORKING_DAYS_PER_MONTH = 20;
const MAX_HRS_IN_MONTH=100;
const NUM_WORKING_DAYS=20;
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
        let totalWage=0;
        let totalWorkingDays=0;
		let totalWorkhours=0;
        let wage;
        let monthlyWage;
        let day = 1;
        var storeWage = [];
        var storeTotalWage = [];
        var obj = {};
        if (attendance==1) {
            let type = (Math.floor(Math.random() * 2)+1);
            while (totalWorkhours<MAX_HRS_IN_MONTH && totalWorkingDays < NUM_WORKING_DAYS) {
                switch (type) {
                    case FULL_TIME:
                        wage = WAGE_PER_HOUR * FULL_DAY_HOUR;
                        storeWage.push(wage);
                        monthlyWage = wage * WORKING_DAYS_PER_MONTH;
                        totalWorkhours = totalWorkhours+FULL_DAY_HOUR;
                        // console.log("Employee Wage is : ",wage);
                        // console.log("Monthly Wage is : ",monthlyWage);
                        break;
                    case PART_TIME:
                        wage = WAGE_PER_HOUR * PART_TIME_HOUR;
                        storeWage.push(wage);
                        monthlyWage = wage * WORKING_DAYS_PER_MONTH;
                        totalWorkhours = totalWorkhours + PART_TIME_HOUR;
                        // console.log("Employee Wage is : ",wage);
                        // console.log("Monthly Wage is : ",monthlyWage);
                    default:
                        break;
                }
                totalWorkingDays++;
                totalWage = totalWage+wage;
                storeTotalWage.push(totalWage);
                
            }
            // totalWage=(totalWorkhours*totalWorkingDays*WAGE_PER_HOUR);
            //storeTotalWage.push(totalWage);
            console.log("Total Wage is : ",totalWage);
            //console.log("Wage stored->",storeWage);
            //console.log("Total wage stored->",storeTotalWage);
            var map = new Map();
            var map1 = new Map();
            for (let i = 0; i < storeWage.length; i++) {
                map.set(i,storeWage[i]);  
            }
            console.log("Wage sorted->",map);
            for (let i = 0; i < storeTotalWage.length; i++) {
                map1.set(i,storeTotalWage[i]);  
            }
            console.log("Total Wage sorted->",map1);
            return totalWage;   
        }
        return 0;
    }
    getWorkHours = (wage) =>{
        let workHours = wage/WAGE_PER_HOUR;
        console.log("Total Working Hours : ",workHours);
    }
}
module.exports = new EmployeeWageComputation();