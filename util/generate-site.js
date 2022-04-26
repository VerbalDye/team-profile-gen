const generateSite = function(employees) {
    return `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Team Site</title>
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.8.1/font/bootstrap-icons.css">
    <link rel="stylesheet" href="../src/style.css">
</head>
<body>
    <header><h1>My Team</h1></header>
    <section>
        ${generateEmployees(employees)}
    </section>
</body>
</html>
`;
}

const generateEmployees = function(employees) {
    html = '';

    employees.forEach(employee => {
        html += `
        <article>
            <h2>${employee.getName()}</br>${getIcon(employee)}${employee.getRole()}</h2>
            <div class="employee-content">
                <p>ID: ${employee.getId()}</p>
                <p>Email: <a href="mailto:${employee.getEmail()}">${employee.getEmail()}</a></p>
                ${generateSpecificField(employee)}
            </div>
        </article>
        `
    })

    return html;
}

const generateSpecificField = function(employee) {
    if (employee.getRole() == 'Manager') {
        return '<p>Office Number: ' + employee.officeNumber + '</p>';
    } else if (employee.getRole() == 'Engineer') {
        return '<p>Github: <a target="_blank" href="https:www.github.com/' + employee.github + '">' + employee.github + '</a></p>';
    } else if (employee.getRole() == 'Intern') {
        return '<p>School: ' + employee.school + '</p>';
    } else {
        return '';
    }
}

const getIcon = function(employee) {
    if (employee.getRole() == 'Manager') {
        return '<i class="bi bi-cup"></i>';
    } else if (employee.getRole() == 'Engineer') {
        return '<i class="bi bi-eyeglasses"></i>';
    } else if (employee.getRole() == 'Intern') {
        return '<i class="bi bi-mortarboard"></i>';
    } else {
        return '';
    }
}

module.exports = generateSite;