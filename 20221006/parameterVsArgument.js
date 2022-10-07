const func1 = call => {console.log(call)}; // parameter //파라미터는 leftvalue(변수)
        // leftvalue = rigthvalue
func1("청춘"); // argument(인자)       // 아규먼트는 rightvalue


const func2 = callback => { callback = ?; callback(); }
func2( (param1) => {console(param1);} )