const college ={
    name:'vnc',
    class : ['11','12'],
    events:['science fare','bijoy dibos','21 fev'],
    unique : {
        color : 'blue',
        result :{
            gpa:5,
            merit:'top'
        }
    }
}
college.unique.result.merit = 'top most top'
console.log(college.unique.result.merit)

college.events[1]='16 dec'
console.log(college.events[1])