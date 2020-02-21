let employeeData = new XMLHttpRequest();

employeeData.onreadystatechange = function() {
    if (employeeData.readyState === 4) {
        const employees = JSON.parse(employeeData.responseText);
        let html = `<ul class='bulleted'>`;

        for (let i = 0; i < employees.length; i++) {
            if (employees[i].inoffice === true) {
                html += `<li class='in'>${employees[i].name}</li>`;
            } else {
                html += `<li class='out'>${employees[i].name}</li>`;
            }
        }
        html += "</ul>";

        document.getElementById("employeeList").innerHTML = html;
    }
};

employeeData.open("GET", "../data/employees.json");
employeeData.send();

let roomData = new XMLHttpRequest();

roomData.onreadystatechange = () => {
    if (roomData.readyState === 4) {
        const rooms = JSON.parse(roomData.responseText);
        let html = '<ul class="rooms">';
        rooms.forEach(room => {
            if (room.available === true) {
                html += `<li class='empty'>${room.room}</li>`;
            } else {
                html += `<li class='full'>${room.room}</li>`;

            }
        });
        html+= `</ul>`;
        document.getElementById('roomList').innerHTML = html;
    }
};

roomData.open("GET", "../data/rooms.json");
roomData.send();
