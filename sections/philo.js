const bookData = {
    "The Metamorphosis": {
        summary: "<p> 1.Gregor Samsa, a traveling salesman, wakes up one morning transformed into a giant insect.<br>2. Instead of panic about his condition, his first concern is missing work and disappointing his boss.<br>3. His family—father, mother, and sister Grete—are initially shocked and disturbed by his transformation. <br>4. Gregor becomes isolated in his room as his family struggles to accept his new form. <br>Over time, his family’s attitude shifts from concern to frustration and eventually resentment.<br>6. Grete, who once cared for him, begins to see him as a burden rather than a brother. <br> 7. Gregor gradually loses his human identity, both physically and emotionally. <br> 8. His father becomes aggressive toward him, even injuring him at one point.<br> 9. The family starts focusing on their own survival and independence without Gregor. <br> 10. Eventually, Gregor dies alone, neglected and rejected by his family. <br> 11. After his death, the family feels relief and begins planning a better future.</p>",
        review: "The Metamorphosis is not a comfortable read—and that’s exactly why it works. <br> Kafka doesn’t care about entertaining you. He forces you to sit with discomfort, absurdity, and emotional isolation. The story hits hard because Gregor’s transformation isn’t just physical—it’s symbolic of how society treats people when they stop being useful. <br> <br>What makes this book powerful is its realism hidden inside absurdity. Turning into an insect is ridiculous, but the way people react? That’s painfully real.<br><br>What works : <br>  <br>Deep psychological impact:<br>It captures isolation, guilt, and identity loss brutally well.<br><br>Strong symbolism:  <br> Gregor represents anyone who is valued only for their productivity.<br><br>Short but heavy:<br>It’s a quick read, but it stays in your head for a long time. <br><br>What Doesn’t Work<br><br>Emotionally draining:<br> Not everyone will enjoy the bleak tone.<br><br>Lack of clear answers:<br>Kafka doesn’t explain “why” anything happens—and that frustrates some readers. <br><br> Final Call : Best book to study highly recommended. " 
    },
  "The Stranger": {
    summary: "<p>1. Meursault receives news of his mother’s death but shows no emotional reaction.<br>2. He attends her funeral and behaves indifferently, which others find unusual.<br>3. After the funeral, he returns to normal life and begins a relationship with Marie without emotional depth.<br>4. He befriends his neighbor Raymond, who is involved in violent and abusive behavior.<br>5. Meursault becomes indirectly involved in Raymond’s conflict with a group of Arabs.<br>6. During a confrontation on a beach, Meursault shoots and kills an Arab man without clear motive.<br>7. He is arrested and put on trial for murder.<br>8. The trial focuses more on his lack of emotion at his mother’s funeral than the crime itself.<br>9. Society judges him for not following expected emotional norms.<br>10. Meursault refuses to fake emotions or accept religious beliefs.<br>11. He is sentenced to death.<br>12. In the end, he accepts the absurd nature of life and finds peace in its meaninglessness.</p>",
    review: "The Stranger is a brutally honest and unsettling novel that challenges how society defines normal behavior. <br> Instead of focusing only on the crime, the story exposes how people are judged for their emotions and conformity. Meursault’s indifference is not exaggerated—it simply refuses to follow social expectations, which makes others uncomfortable.<br><br>What makes this book powerful is its simplicity. The writing is direct, almost emotionless, yet it forces readers to think deeply about life, meaning, and human behavior.<br><br>What works : <br><br>Philosophical depth:<br>The book introduces the idea of absurdism—life has no inherent meaning, and humans must face that reality.<br><br>Unique protagonist:<br>Meursault stands out because he refuses to lie about his feelings, making him different from typical characters.<br><br>Strong social critique:<br>The trial reveals that society judges people more for their behavior and emotions than truth.<br><br>What Doesn’t Work<br><br>Emotionally distant:<br>Readers may struggle to connect with Meursault due to his detached nature.<br><br>Feels simple on surface:<br>Without deeper thinking, the story may seem plain or lacking complexity.<br><br> Final Call : A powerful and thought-provoking novel that challenges perception and is highly recommended for serious readers."
}, 
   "Beyond Good & Evil": {
    summary: "<p>1. Friedrich Nietzsche critiques traditional morality, especially the idea of absolute 'good' and 'evil'.<br>2. He argues that these moral values are human-made, not universal truths.<br>3. Nietzsche challenges philosophers for blindly accepting moral assumptions without questioning their origins.<br>4. He introduces the idea that truth is subjective and influenced by perspective.<br>5. The book explores the concept of the 'will to power'—the fundamental drive behind human actions.<br>6. Nietzsche criticizes religion, particularly Christianity, for promoting weakness and suppressing individual strength.<br>7. He distinguishes between 'master morality' (strong, independent individuals) and 'slave morality' (those who follow imposed values).<br>8. The book encourages individuals to think independently rather than conform to societal beliefs.<br>9. Nietzsche questions the nature of truth, suggesting that what we accept as truth is often shaped by power and influence.<br>10. He promotes the idea of creating one's own values instead of blindly following inherited ones.</p>",
    review: "Beyond Good & Evil is not an easy or comfortable read—it’s meant to challenge you. <br> Nietzsche doesn’t explain things gently; he attacks ideas directly and forces readers to question everything they believe about morality, truth, and society.<br><br>This book stands out because it refuses to give simple answers. Instead, it breaks down traditional thinking and pushes you to build your own perspective.<br><br>What works : <br><br>Deep philosophical insight:<br>It questions the foundation of morality and forces critical thinking.<br><br>Bold and provocative ideas:<br>Nietzsche isn’t afraid to challenge religion, society, and even philosophy itself.<br><br>Perspective shifting:<br>It changes how you see truth, power, and human behavior.<br><br>What Doesn’t Work<br><br>Difficult to read:<br>The writing is dense and not beginner-friendly.<br><br>Lacks structure:<br>The book is written in aphorisms, which can feel disconnected.<br><br> Final Call : A powerful but demanding book that rewards deep thinking—highly recommended for serious readers of philosophy."
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