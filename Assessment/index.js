document.getElementById('startButton').addEventListener('click', function() {
    document.getElementById('startButton').style.display = 'none';
    document.getElementById('inputContainer').style.display = 'block';
});

document.getElementById('generateImages').addEventListener('click', function() {
    const count = parseInt(document.getElementById('imageCount').value);
    const container = document.getElementById('imageContainer');
    
    container.innerHTML = '';
    document.getElementById('inputContainer').style.display = 'none';

    for (let i = 0; i < count; i++) {
        const imageItem = document.createElement('div');
        imageItem.className = 'image-item';

        const checkbox = document.createElement('input');
        checkbox.type = 'checkbox';

        const img = document.createElement('img');
        img.src = './image.png';
        img.alt = 'Image ' + (i + 1);

        checkbox.addEventListener('change', function() {
            if (checkbox.checked) {
                img.src = './q.png';
            } else {
                img.src = './image.png';
            }
        });

        imageItem.appendChild(checkbox);
        imageItem.appendChild(img);
        
        container.appendChild(imageItem);
    }
});