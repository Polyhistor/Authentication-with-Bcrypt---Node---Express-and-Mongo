const index = require("./index")
// @ponicode
describe("index.signup", () => {
    test("0", () => {
        let callFunction = () => {
            index.signup("Home Loan Account", "callback detected, not supported yet")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("1", () => {
        let callFunction = () => {
            index.signup("Investment Account", "callback detected, not supported yet")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("2", () => {
        let callFunction = () => {
            index.signup("Credit Card Account", "callback detected, not supported yet")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("3", () => {
        let callFunction = () => {
            index.signup("Checking Account", "callback detected, not supported yet")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("4", () => {
        let callFunction = () => {
            index.signup(undefined, undefined)
        }
    
        expect(callFunction).not.toThrow()
    })
})

// @ponicode
describe("index.signin", () => {
    test("0", () => {
        let callFunction = () => {
            index.signin("Home Loan Account", "callback detected, not supported yet")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("1", () => {
        let callFunction = () => {
            index.signin("Checking Account", "callback detected, not supported yet")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("2", () => {
        let callFunction = () => {
            index.signin("Investment Account", "callback detected, not supported yet")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("3", () => {
        let callFunction = () => {
            index.signin("Credit Card Account", "callback detected, not supported yet")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("4", () => {
        let callFunction = () => {
            index.signin(undefined, undefined)
        }
    
        expect(callFunction).not.toThrow()
    })
})
