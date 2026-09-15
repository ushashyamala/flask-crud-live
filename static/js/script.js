const API_URL = "/users";


// Load all users
async function loadUsers() {
    try {
        const response = await fetch(API_URL);
        const users = await response.json();

        const tableBody = document.getElementById("userTableBody");
        tableBody.innerHTML = "";

        users.forEach(user => {
            const row = document.createElement("tr");

            row.innerHTML = `
                <td>${user.id}</td>
                <td>${user.username}</td>
                <td>${user.email}</td>
                <td>
                    <button class="edit-btn" onclick="editUser(${user.id}, '${user.username}', '${user.email}')">
                        Edit
                    </button>

                    <button class="delete-btn" onclick="deleteUser(${user.id})">
                        Delete
                    </button>
                </td>
            `;

            tableBody.appendChild(row);
        });

    } catch (error) {
        console.error("Error loading users:", error);
    }
}


// Create user
document.getElementById("createUserForm").addEventListener("submit", async function(event) {
    event.preventDefault();

    const username = document.getElementById("username").value;
    const email = document.getElementById("email").value;

    try {
        const response = await fetch(API_URL, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                username: username,
                email: email
            })
        });

        const result = await response.json();

        document.getElementById("createMessage").textContent = result.message;

        if (response.ok) {
            document.getElementById("createUserForm").reset();
            loadUsers();
        }

    } catch (error) {
        console.error("Error creating user:", error);
    }
});


// Delete user
async function deleteUser(id) {
    if (!confirm("Are you sure you want to delete this user?")) {
        return;
    }

    try {
        const response = await fetch(`${API_URL}/${id}`, {
            method: "DELETE"
        });

        const result = await response.json();

        alert(result.message);

        if (response.ok) {
            loadUsers();
        }

    } catch (error) {
        console.error("Error deleting user:", error);
    }
}


// Edit user
async function editUser(id, oldUsername, oldEmail) {
    const username = prompt("Enter new username:", oldUsername);

    if (username === null) {
        return;
    }

    const email = prompt("Enter new email:", oldEmail);

    if (email === null) {
        return;
    }

    try {
        const response = await fetch(`${API_URL}/${id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                username: username,
                email: email
            })
        });

        const result = await response.json();

        alert(result.message);

        if (response.ok) {
            loadUsers();
        }

    } catch (error) {
        console.error("Error updating user:", error);
    }
}


// Load users when page opens
loadUsers();