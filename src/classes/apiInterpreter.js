import { withDefault } from "../utility/lipBasics";

export class APIInterpreter {

    #accessToken = null;
    #groupAuthorization = null;
    #memory = {};
    data = {
        employees: null,
        employeesLeaders: null,
        employeesMe: null
    }

    constructor(groupAuthorization, debugMode = false) {
        this.#groupAuthorization = groupAuthorization;
        this.debugMode = debugMode;
        this.debugModeLog("Ready!")
    }

    isLoggedIn() {
        return !(this.#accessToken === null);
    }

    debugModeLog(message) {
        if (this.debugMode) console.log("APIInterpreter: " + message);
    }

    debugModeError(message) {
        if (this.debugMode) console.log("APIInterpreter: ERROR: " + message);
    }

    resetMemory() {
        this.#memory = {};
        this.data = {
            employees: null,
            employeesLeaders: null,
            employeesMe: null
        };
    }

    logout() {
        this.resetMemory();
        this.#accessToken = null;
    }

    callVerifications(name, key, checkInMemory, checkAccessToken = true, checkGroupAuthorization = true) {
        if (checkInMemory && withDefault(this.#memory[key], false)) {
            this.debugModeLog(name + ": Already in memory"); return true;
        }
        if (checkAccessToken && this.#accessToken === null) {
            this.debugModeError(name + ": #accessToken is null"); return true;
        }
        if (checkGroupAuthorization && this.#groupAuthorization === null) {
            this.debugModeError(name + ": #groupAuthorization is null"); return true;
        }
        this.debugModeLog(name + "...");
        return false;
    }

    async login(email, password, force = false) {
        // Verifications
        if (this.callVerifications("Login", "login", !force, false)) return this.#memory.login;
        // API call
        const headers = {
            "X-Group-Authorization": this.#groupAuthorization,
            "accept": "application/json",
            "Content-Type": "application/json"
        };
        const info = {
            method: "POST",
            body: JSON.stringify({
                "email": email,
                "password": password
            }),
            headers: headers
        }
        const response = await fetch("https://masurao.fr/api/employees/login", info);
        const data = await response.json();
        // Treat data
        if (!("access_token" in data)) {
            this.debugModeError("Login: Response does not countain an 'access_token' field"); return;
        }
        this.#accessToken = data.access_token;
        this.#memory.login = true;
        this.debugModeLog("Login: Done!");
        return this.#memory.login;
    }

    async employees(force = false) {
        // Verifications
        if (this.callVerifications("Employees", "employees", !force)) return this.data.employees;
        // API call
        const headers = {
            "X-Group-Authorization": this.#groupAuthorization,
            "accept": "application/json",
            "Content-Type": "application/json",
            "Authorization": "Bearer " + this.#accessToken
        };
        const info = {
            method: "GET",
            headers: headers
        }
        const response = await fetch("https://masurao.fr/api/employees", info);
        const data = await response.json();
        // Treat data
        this.data.employees = data;
        this.#memory.employees = true;
        this.debugModeLog("Employees: Done!");
        return data;
    }

    async employeesLeaders(force = false) {
        // Verifications
        if (this.callVerifications("Leaders", "employeesLeaders", !force)) return this.data.employeesLeaders;
        // API call
        const headers = {
            "X-Group-Authorization": this.#groupAuthorization,
            "accept": "application/json",
            "Content-Type": "application/json",
            "Authorization": "Bearer " + this.#accessToken
        };
        const info = {
            method: "GET",
            headers: headers
        }
        const response = await fetch("https://masurao.fr/api/employees/leaders", info);
        const data = await response.json();
        // Treat data
        this.data.employeesLeaders = data;
        this.#memory.employeesLeaders = true;
        this.debugModeLog("Leaders: Done!");
        return data;
    }

    async employeesID(id, force = false) {
        // Verifications
        if (this.callVerifications("EmployeesID" + id, "employeesID" + id, !force)) return this.data["employeesID" + id];
        // API call
        const headers = {
            "X-Group-Authorization": this.#groupAuthorization,
            "accept": "application/json",
            "Content-Type": "application/json",
            "Authorization": "Bearer " + this.#accessToken
        };
        const info = {
            method: "GET",
            headers: headers
        }
        const response = await fetch("https://masurao.fr/api/employees/" + id, info);
        const data = await response.json();
        // Treat data
        this.data["employeesID" + id] = data;
        this.#memory["employeesID" + id] = true;
        this.debugModeLog("EmployeesID" + id + ": Done!");
        return data;
    }

    async employeesIDImage(id, force = false) {
        // Verifications
        if (this.callVerifications("EmployeesIDImage" + id, "employeesIDImage" + id, !force)) return this.data["employeesIDImage" + id];
        // API call
        const headers = {
            "X-Group-Authorization": this.#groupAuthorization,
            "accept": "image/png",
            "Content-Type": "application/json",
            "Authorization": "Bearer " + this.#accessToken
        };
        const info = {
            method: "GET",
            headers: headers
        }
        /*const response = */await fetch("https://masurao.fr/api/employees/" + id + "/image", info);
        //        const data = await response.json();
        // Treat data
        //        this.data["employeesIDImage" + id] = data;
        //        if (!response.ok()) {
        //            this.debugModeError("EmployeesIDImage" + id + ": Response was not ok"); return;
        //        }
        this.data["employeesIDImage" + id] = true;
        this.#memory["employeesIDImage" + id] = true;
        this.debugModeLog("EmployeesIDImage" + id + ": Done!");
        return true;
    }

    async employeesMe(force = false) {
        // Verifications
        if (this.callVerifications("Me", "employeesMe", !force)) return this.data.employeesMe;
        // API call
        const headers = {
            "X-Group-Authorization": this.#groupAuthorization,
            "accept": "application/json",
            "Content-Type": "application/json",
            "Authorization": "Bearer " + this.#accessToken
        };
        const info = {
            method: "GET",
            headers: headers
        }
        const response = await fetch("https://masurao.fr/api/employees/me", info);
        const data = await response.json();
        // Treat data
        this.data.employeesMe = data;
        this.#memory.employeesMe = true;
        this.debugModeLog("Me: Done!");
        return data;
    }

    async weather(force = false) {
        const response = await fetch("https://api.open-meteo.com/v1/forecast?latitude=48.8534&longitude=2.3488&current_weather=true&forecast_days=1");
        const data = await response.json();
        return data;
    }

    async randomCat(force = false) {
        const response = await fetch("https://api.thecatapi.com/v1/images/search");
        const data = await response.json();
        if (data === undefined || data[0] === undefined || data[0].url === undefined)
            return null
        return data[0].url;
    }
}