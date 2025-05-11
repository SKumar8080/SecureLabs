// Beta Version Alert
window.onload = function() {
    document.getElementById('betaAlert').style.display = 'flex';
};

function closeBetaAlert() {
    document.getElementById('betaAlert').style.display = 'none';
}

// Matrix Rain Animation
const canvas = document.getElementById('matrix');
const ctx = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
const drops = Array(Math.floor(canvas.width / 20)).fill(1);

function drawMatrix() {
    ctx.fillStyle = "rgba(0, 0, 0, 0.05)";
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = "#0F0";
    drops.forEach((y, i) => {
        const text = chars[Math.floor(Math.random() * chars.length)];
        ctx.fillText(text, i * 20, y * 20);
        if (y * 20 > canvas.height || Math.random() > 0.975) drops[i] = 0;
        drops[i]++;
    });
}
setInterval(drawMatrix, 50);

// Admin Panel Functions
const ADMIN_CREDS = { username: "admin", password: "netrinix123" };

function openAdminPanel() {
    document.getElementById('adminPanel').style.display = 'flex';
}

function adminLogin() {
    const user = document.getElementById('adminUser').value;
    const pass = document.getElementById('adminPass').value;
    
    if (user === ADMIN_CREDS.username && pass === ADMIN_CREDS.password) {
        document.getElementById('adminLogin').style.display = 'none';
        document.getElementById('adminControls').style.display = 'block';
        document.getElementById('adminName').textContent = user;
    } else {
        document.getElementById('adminError').textContent = "Invalid credentials!";
    }
}

function changeAdminPass() {
    const newPass = document.getElementById('newAdminPass').value;
    if (newPass.length >= 8) {
        alert(`Admin password changed to: ${newPass}`);
        ADMIN_CREDS.password = newPass;
    } else {
        alert("Password must be 8+ characters!");
    }
}

function adminLogout() {
    document.getElementById('adminPanel').style.display = 'none';
    document.getElementById('adminLogin').style.display = 'block';
    document.getElementById('adminControls').style.display = 'none';
    document.getElementById('adminUser').value = '';
    document.getElementById('adminPass').value = '';
}

// Vulnerability Simulations
function searchUsers() {
    const input = document.getElementById('searchInput').value;
    const results = document.getElementById('searchResults');
    
    if (input.includes("' OR '1'='1")) {
        results.innerHTML = "💉 SQL Injection Successful!<br>Users: admin, user1, user2";
    } else {
        results.innerHTML = "No users found.";
    }
}

function postComment() {
    const comment = document.getElementById('commentInput').value;
    const commentList = document.getElementById('commentList');
    commentList.innerHTML += `<div>${comment}</div>`;
}

// Add more vulnerability functions here
