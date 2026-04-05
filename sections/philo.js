const bookData = {
    "The Metamorphosis": {
        summary: "<p> 1.Gregor Samsa, a traveling salesman, wakes up one morning transformed into a giant insect.<br>2. Instead of panic about his condition, his first concern is missing work and disappointing his boss.<br>3. His family—father, mother, and sister Grete—are initially shocked and disturbed by his transformation. <br>4. Gregor becomes isolated in his room as his family struggles to accept his new form. <br>Over time, his family’s attitude shifts from concern to frustration and eventually resentment.<br>6. Grete, who once cared for him, begins to see him as a burden rather than a brother. <br> 7. Gregor gradually loses his human identity, both physically and emotionally. <br> 8. His father becomes aggressive toward him, even injuring him at one point.<br> 9. The family starts focusing on their own survival and independence without Gregor. <br> 10. Eventually, Gregor dies alone, neglected and rejected by his family. <br> 11. After his death, the family feels relief and begins planning a better future.</p>",
        review: "The Metamorphosis is not a comfortable read—and that’s exactly why it works. <br> Kafka doesn’t care about entertaining you. He forces you to sit with discomfort, absurdity, and emotional isolation. The story hits hard because Gregor’s transformation isn’t just physical—it’s symbolic of how society treats people when they stop being useful. <br> <br>What makes this book powerful is its realism hidden inside absurdity. Turning into an insect is ridiculous, but the way people react? That’s painfully real.<br><br>What works : <br>  <br>Deep psychological impact:<br>It captures isolation, guilt, and identity loss brutally well.<br><br>Strong symbolism:  <br> Gregor represents anyone who is valued only for their productivity.<br><br>Short but heavy:<br>It’s a quick read, but it stays in your head for a long time. <br><br>What Doesn’t Work<br><br>Emotionally draining:<br> Not everyone will enjoy the bleak tone.<br><br>Lack of clear answers:<br>Kafka doesn’t explain “why” anything happens—and that frustrates some readers. <br><br> Final Call : Best book to study highly recommended. " 
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