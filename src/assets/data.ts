export type PersonType = {
    name: string,
    age: number,
    description: string,
}


const persons: PersonType[] = [
    {
        name: "Martin",
        description: "Martin is a teacher",
        age: 37,
    },
    {
        name: "Marcell",
        description: "Marcell is a coach",
        age: 37,
    },
    {
        name: "Robert",
        description: "Robert is a student",
        age: 27,
    },
];

export default persons