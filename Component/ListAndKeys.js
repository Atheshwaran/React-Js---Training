import React from 'react';

function ListAndKeys() {

    const employeeDetails = [
        { id: 1, name: "Athesh ", description: "Software Developer" },
        { id: 2, name: "Babu ", description: "Backend Developer" },
        { id: 3, name: "Suresh ", description: "Software Developer" },
        { id: 4, name: "Vijay ", description: "Backend Developer" },
        { id: 5, name: "Akash ", description: "Frontend Developer" },
        { id: 6, name: "Madhu ", description: "Software Developer" },
        { id: 7, name: "Aravind ", description: "Frontend Developer" },
        { id: 8, name: "Ravi ", description: "UI Developer" },
        { id: 10, name: "Sathish ", description: "Backend Developer" },
        { id: 11, name: "Thangavel ", description: "UX Developer" },
        { id: 12, name: "Ragavi ", description: "Frontend Developer" },
        { id: 13, name: "Gopal ", description: "Unity Developer" }
    ];

    return (
        <>
            <h1> Calibraint Employees Details </h1>
            <ul> {
                employeeDetails.map(data => (
                    <React.Fragment key={data.id}> 
                        <li>{data.name} :- </li>
                        <li>{data.description}</li>  </React.Fragment>
                   // <li key={data.id}> {data.name} :- {data.description}</li>
                ))}
            </ul>
        </>
    )
}

export default ListAndKeys;