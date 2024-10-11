interface Teacher {
    readonly firstName: string;
    readonly lastName: string;
    fullTimeEmployee: boolean;
    yearsOfExperience?: number;
    location: string;
    [key: string]: any;
}

interface Directors extends Teacher {
    numberOfReports: number;
}

function printTeacher(firstName: string, lastName: string): string {
    return `${firstName[0]}. ${lastName}`;
}

interface IStudent {
    firstName: string;
    lastName: string;
    workOnHomework(): string;
    displayName(): string;
}

interface IStudentConstructor {
    new(firstName: string, lastName: string): IStudent;
}

class StudentClass implements IStudent {

    constructor(firstName: string, lastName: string) {
        this.firstName = firstName;
        this.lastName = lastName;
    }

    firstName: string;
    lastName: string;

    workOnHomework(): string {
        return "Currently working";
    }

    displayName(): string {
        return this.firstName
    }
}
