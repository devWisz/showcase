const bookData = {
    "The Metamorphosis": {
        summary: "<p>Gregor Samsa wakes up as a giant insect. The story explores his family's reaction and his ultimate isolation.</p>",
        review: "A profound look at how society treats those who are no longer 'useful' to the machine of labor."
    },
    "The Stranger": {
        summary: "<p>Meursault is an emotionally detached man who becomes involved in a murder on a beach.</p>",
        review: "Camus explores the 'absurd'—the conflict between humans searching for meaning and the 'silent' universe."
    },  
    "Beyond Good & Evil": {
        summary: "<p>Nietzsche challenges the traditional morality of his time, suggesting we move 'beyond' simple good and evil.</p>",
        review: "Tough, provocative, and essential for understanding modern philosophy."
    },
}; 
function openModal(type, title) { 
    const modal = document.getElementById('contentModal');
    document.getElementById('modalTitle').innerText = title;
    document.getElementById('modalBody').innerHTML = bookData[title][type];
    modal.style.display = "block";
    document.body.style.overflow = "hidden";
}

function closeModal() {
    document.getElementById('contentModal').style.display = "none";
    document.body.style.overflow = "auto";
}

function openImageModal(src) {
    const modal = document.getElementById('imageModal');
    document.getElementById('fullImage').src = src;
    modal.style.display = "block";
    document.body.style.overflow = "hidden";
}

function closeImageModal() {
    document.getElementById('imageModal').style.display = "none";
    document.body.style.overflow = "auto";
}

window.onclick = function(e) {
    if (e.target.classList.contains('modal-overlay')) {
        closeModal();
        closeImageModal();
    }
}