const bookData = {
   "Deep Work": {
    summary: "<p>1. Cal Newport introduces the concept of 'deep work'—focused, distraction-free work that creates high value.<br>2. He contrasts it with 'shallow work', which includes low-value tasks like emails and social media.<br>3. The modern world is full of distractions, making deep work increasingly rare but more valuable.<br>4. Deep work helps individuals learn complex skills faster and produce better results.<br>5. Newport emphasizes that focus is a skill that must be trained through discipline and practice.<br>6. He suggests creating rituals and routines to enter deep work states consistently.<br>7. The book encourages embracing boredom instead of constantly seeking distraction.<br>8. Newport argues that not all tools (especially social media) are necessary and should be used selectively.<br>9. Reducing shallow work is essential to make time for meaningful output.<br>10. Different deep work strategies are introduced, such as monastic, bimodal, rhythmic, and journalistic approaches.<br>11. Consistency and intentional focus are key to mastering deep work and achieving success.</p>",
    review: "Deep Work is a practical and impactful book that exposes how most people confuse being busy with being productive. <br> Cal Newport makes it clear that real success comes from focused, high-value work—not constant distraction and shallow tasks.<br><br>The strength of this book lies in its clarity and usefulness. It doesn’t just explain the problem—it provides actionable strategies to improve focus and productivity.<br><br>What works : <br><br>Highly practical:<br>The book provides clear methods to build deep focus and eliminate distractions.<br><br>Relevant in modern world:<br>It directly addresses issues like social media addiction and lack of concentration.<br><br>Strong core concept:<br>The idea of deep vs shallow work is simple but powerful and easy to apply.<br><br>What Doesn’t Work<br><br>Repetitive at times:<br>Some ideas are repeated more than necessary.<br><br>Requires discipline:<br>The concepts are effective, but only if the reader actually applies them.<br><br> Final Call : A must-read for anyone serious about productivity, skill-building, and achieving meaningful results."
},
"Atomic Habits": {
    summary: "<p>1. James Clear explains that small habits, when repeated consistently, lead to significant long-term results.<br>2. He introduces the idea of improving by just 1% daily, which compounds over time.<br>3. The book focuses on systems over goals—success comes from processes, not just outcomes.<br>4. Habits are formed through a loop: cue, craving, response, and reward.<br>5. Clear presents the '4 Laws of Behavior Change' to build good habits and break bad ones.<br>6. Make it obvious: design your environment to trigger good habits.<br>7. Make it attractive: pair habits with things you enjoy.<br>8. Make it easy: reduce friction and simplify actions.<br>9. Make it satisfying: create immediate rewards to reinforce habits.<br>10. Identity plays a key role—focus on becoming the type of person who follows the habit.<br>11. Breaking bad habits involves reversing the same laws—make them invisible, unattractive, hard, and unsatisfying.</p>",
    review: "Atomic Habits is one of the most practical self-improvement books available today. <br> Instead of promoting motivation or extreme discipline, it focuses on small, consistent changes that are actually sustainable.<br><br>The book stands out because it simplifies behavior change into clear, actionable steps that anyone can apply immediately.<br><br>What works : <br><br>Simple and actionable:<br>The strategies are easy to understand and implement in daily life.<br><br>Science-backed approach:<br>Concepts are supported by psychology and real-world examples.<br><br>Focus on systems:<br>Shifts attention from goals to daily processes, which is more effective long-term.<br><br>What Doesn’t Work<br><br>Feels repetitive:<br>Core ideas are repeated multiple times throughout the book.<br><br>Basic for advanced readers:<br>Those familiar with self-help concepts may find it less challenging.<br><br> Final Call : A highly practical and beginner-friendly book that delivers real results if applied consistently."
},
 "The mountain is you": {
    summary: "<p>1. Brianna Wiest explains that the 'mountain' we need to climb is often ourselves—our fears, habits, and self-sabotaging behaviors.<br>2. The book focuses on understanding why people hold themselves back despite wanting to improve.<br>3. Self-sabotage is not random—it is a result of unmet needs, fear, and subconscious patterns.<br>4. Emotional intelligence and self-awareness are key to overcoming internal obstacles.<br>5. The book emphasizes healing past experiences instead of ignoring them.<br>6. Growth requires discomfort, and avoiding it leads to stagnation.<br>7. Wiest highlights the importance of building new habits and thought patterns intentionally.<br>8. Letting go of old identities is necessary to evolve into a better version of oneself.<br>9. Consistency and small changes lead to long-term transformation.<br>10. The goal is not perfection but self-mastery and emotional balance.</p>",
    review: "The Mountain Is You is a deeply introspective and emotional self-help book that focuses on inner transformation rather than external success. <br> It stands out by addressing self-sabotage in a realistic way, showing that personal growth requires facing uncomfortable truths.<br><br>The book connects strongly with readers who struggle with overthinking, emotional patterns, and lack of direction.<br><br>What works : <br><br>Emotionally impactful:<br>It resonates with readers dealing with internal struggles and self-doubt.<br><br>Focus on self-awareness:<br>Encourages deep reflection rather than surface-level motivation.<br><br>Practical mindset shifts:<br>Provides guidance on changing thought patterns and behaviors.<br><br>What Doesn’t Work<br><br>Repetitive ideas:<br>Some concepts are revisited multiple times.<br><br>Less structured:<br>The flow can feel more reflective than systematic.<br><br> Final Call : A powerful book for personal growth and self-understanding, highly recommended for those ready to work on themselves."
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