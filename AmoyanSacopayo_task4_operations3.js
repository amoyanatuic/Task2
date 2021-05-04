//Display the first name, last name, salary, and job grade for all employees.

const pool = require('./db');

pool.query(`SELECT e.first_name, e.last_name, e.salary, j.job_title
            FROM employees e 
            JOIN jobs j
            ON e.salary BETWEEN j.min_salary AND j.max_salary;
`, (err, res) => {
    try {
        console.log(res.rows);
    } catch (error) {
        console.log(err.message);
    }
});

pool.end();