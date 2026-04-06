const bookData = {
    "Crime and Punishment": {
        summary: "<p>1. Rodion Raskolnikov, a poor former student, believes he is intellectually superior and justified in committing a crime.<br>2. He murders a pawnbroker, thinking it will prove his theory and help him rise above moral limits.<br>3. After the crime, he is consumed by guilt, paranoia, and psychological turmoil.<br>4. He struggles to justify his actions while mentally breaking down under pressure.<br>5. Inspector Porfiry gradually suspects Raskolnikov and psychologically pressures him.<br>6. Sonia, a compassionate and self-sacrificing woman, becomes a moral anchor in his life.<br>7. Through suffering and inner conflict, Raskolnikov begins to realize the flaw in his ideology.<br>8. He ultimately confesses to the crime and is sentenced to Siberia.<br>9. In exile, he begins a slow journey toward redemption and moral awakening.</p>",
        review: "Crime and Punishment is a psychological masterpiece that goes far beyond a simple crime story. <br> Dostoevsky doesn’t focus on the act itself—he dissects the mind of a man trying to justify the unjustifiable.<br><br>The novel’s strength lies in its intense exploration of guilt, morality, and human conscience. Raskolnikov’s internal conflict feels real and suffocating, making the reader experience his breakdown firsthand.<br><br>What works : <br><br>Deep psychological depth:<br>The novel explores guilt and moral conflict with unmatched intensity.<br><br>Strong character development:<br>Raskolnikov evolves in a complex and realistic way.<br><br>Philosophical richness:<br>Raises powerful questions about right, wrong, and human nature.<br><br>What Doesn’t Work<br><br>Heavy pacing:<br>The story can feel slow due to detailed psychological exploration.<br><br>Emotionally intense:<br>Not an easy or light read for all readers.<br><br> Final Call : A must-read classic that challenges your understanding of morality and the human mind."
    },

    "1984": {
        summary: "<p>1. Winston Smith lives in a totalitarian society controlled by Big Brother and the Party.<br>2. The government constantly monitors citizens and manipulates truth through propaganda.<br>3. Winston secretly rebels by questioning authority and seeking truth.<br>4. He begins a forbidden relationship with Julia, sharing moments of freedom.<br>5. The Party suppresses individuality and independent thought.<br>6. Winston is eventually caught by the Thought Police.<br>7. He is tortured and psychologically broken in the Ministry of Love.<br>8. The Party forces him to betray his beliefs and even Julia.<br>9. In the end, Winston accepts the Party completely and loses his identity.</p>",
        review: "1984 is one of the most powerful and disturbing portrayals of totalitarian control ever written. <br> Orwell doesn’t just tell a story—he builds a world where truth, freedom, and individuality are systematically destroyed.<br><br>The novel remains relevant because it exposes how power can manipulate reality and control people’s thoughts.<br><br>What works : <br><br>Timeless relevance:<br>The themes of surveillance and control feel real even today.<br><br>Strong world-building:<br>The dystopian society is detailed and believable.<br><br>Psychological impact:<br>The ending leaves a lasting impression on the reader.<br><br>What Doesn’t Work<br><br>Dark and oppressive tone:<br>The story can feel emotionally heavy and unsettling.<br><br>Not action-driven:<br>The focus is more on ideas than fast-paced events.<br><br> Final Call : A must-read dystopian classic that forces you to question power, truth, and freedom."
    },

    "One hundred Years of Solitude": {
        summary: "<p> 1. The story follows the Buendía family over multiple generations in the fictional town of Macondo.<br>2. It blends reality with magical elements, creating a unique narrative style.<br>3. The family experiences cycles of love, power, tragedy, and repetition.<br>4. Time in the novel feels circular rather than linear, with patterns repeating across generations.<br>5. Characters often struggle with isolation and loneliness despite being surrounded by others.<br>6. The town of Macondo evolves alongside the family, reflecting social and political changes.<br>7. Magical realism is used to express deeper emotional and cultural truths.<br>8. The story ultimately reveals the inevitability of decline and the consequences of isolation.</p>",
        review: "One Hundred Years of Solitude is a literary masterpiece that redefines storytelling. <br> Márquez blends reality and imagination so seamlessly that the extraordinary feels completely natural.<br><br>The novel’s strength lies in its atmosphere and depth rather than a straightforward plot. It captures the passage of time, the weight of history, and the loneliness of human existence.<br><br>What works : <br><br>Unique narrative style:<br>The use of magical realism creates a rich and immersive experience.<br><br>Generational depth:<br>The story spans decades, giving it emotional and historical weight.<br><br>Powerful themes:<br>Explores solitude, time, and the repetition of human behavior.<br><br>What Doesn’t Work<br><br>Complex structure:<br>Multiple characters and timelines can be confusing.<br><br>Not beginner-friendly:<br>Requires patience and attention to fully appreciate.<br><br> Final Call : A deeply artistic and influential novel, highly recommended for serious literature readers."
    }
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