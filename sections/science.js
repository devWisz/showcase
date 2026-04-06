const bookData = {
    "Cosmos": {
        summary: "<p>1. Carl Sagan explores the universe, from galaxies and stars to the origins of life on Earth.<br>2. The book traces the history of scientific discovery and human curiosity.<br>3. It explains complex scientific ideas in a simple and engaging way.<br>4. Sagan connects science with philosophy, showing humanity’s place in the cosmos.<br>5. The concept of the 'cosmic calendar' is introduced to visualize the history of the universe.<br>6. The book highlights the importance of scientific thinking and skepticism.<br>7. It warns against superstition and ignorance, emphasizing rational understanding.<br>8. Sagan reflects on the future of humanity and our responsibility toward knowledge and exploration.</p>",
        review: "Cosmos is not just a science book—it’s an experience. <br> Carl Sagan turns complex scientific concepts into something poetic, meaningful, and deeply human.<br><br>The book stands out because it doesn’t just teach science—it makes you feel connected to the universe. It inspires curiosity while maintaining scientific accuracy.<br><br>What works : <br><br>Beautiful storytelling:<br>Sagan blends science with philosophy in a unique and engaging way.<br><br>Accessible explanations:<br>Complex ideas are explained clearly without losing depth.<br><br>Inspirational tone:<br>Encourages curiosity and a deeper appreciation for the universe.<br><br>What Doesn’t Work<br><br>Less technical depth:<br>Advanced readers may find it less detailed scientifically.<br><br>Slow pacing:<br>Focus on narrative can feel less direct at times.<br><br> Final Call : A must-read for anyone interested in science, offering both knowledge and inspiration."
    },

    "The Grand Design": {
        summary: "<p>1. Stephen Hawking and Leonard Mlodinow explore the fundamental laws governing the universe.<br>2. The book discusses the origin of the universe using modern physics theories.<br>3. It introduces concepts like M-theory as a possible explanation of everything.<br>4. The authors argue that the universe can arise from physical laws without needing external causes.<br>5. Quantum physics and multiple universes are explored to explain reality.<br>6. The concept of 'model-dependent realism' is introduced—reality depends on how we observe it.<br>7. The book challenges traditional philosophical and religious explanations of existence.<br>8. It emphasizes that science provides the most reliable way to understand the universe.</p>",
        review: "The Grand Design is a bold and intellectually challenging exploration of the universe. <br> Hawking presents complex theories in a way that is accessible, while still maintaining depth and seriousness.<br><br>The book stands out for its confidence—it doesn’t just explain science, it challenges long-held beliefs about existence and reality.<br><br>What works : <br><br>Strong conceptual clarity:<br>Complex physics ideas are simplified effectively.<br><br>Modern scientific perspective:<br>Introduces cutting-edge theories about the universe.<br><br>Thought-provoking arguments:<br>Challenges traditional views about creation and reality.<br><br>What Doesn’t Work<br><br>Abstract concepts:<br>Some ideas may be difficult for beginners to fully grasp.<br><br>Less emotional engagement:<br>The book focuses more on theory than storytelling.<br><br> Final Call : A powerful and thought-provoking read for those interested in understanding the universe at a deeper level."
    },

    "The Selfish Gene": {
        summary: "<p>1. Richard Dawkins presents a gene-centered view of evolution.<br>2. He argues that genes, not individuals, are the primary unit of natural selection.<br>3. Organisms are described as 'survival machines' created to preserve genes.<br>4. The book explains behaviors like altruism through genetic advantage.<br>5. It introduces the concept of 'memes' as units of cultural evolution.<br>6. Dawkins explores how cooperation and competition both arise from evolutionary processes.<br>7. The book challenges traditional views of evolution focused on groups or species.<br>8. It provides a new perspective on human behavior and biological purpose.</p>",
        review: "The Selfish Gene is one of the most influential books on evolution and biology. <br> Dawkins transforms a complex scientific theory into a clear and compelling narrative that reshapes how we understand life.<br><br>The strength of the book lies in its ability to shift perspective—once you understand the gene-centered view, it changes how you see behavior, survival, and existence.<br><br>What works : <br><br>Clear scientific explanation:<br>Complex evolutionary ideas are made understandable.<br><br>Perspective shifting:<br>Introduces a new way of thinking about life and behavior.<br><br>Strong arguments:<br>Presents ideas with clarity and logical consistency.<br><br>What Doesn’t Work<br><br>Misleading title perception:<br>The term 'selfish' can be misunderstood without context.<br><br>Dense at times:<br>Requires focus to fully grasp the concepts.<br><br> Final Call : A must-read for understanding evolution, offering deep insight into the science of life."
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