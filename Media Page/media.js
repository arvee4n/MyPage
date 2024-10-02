        function openPopup(imageUrl) {
            document.getElementById('popup-image').src = imageUrl;
            document.getElementById('popup-image').style.display = 'block';
            document.getElementById('popup-video').style.display = 'none';
            document.getElementById('popup').style.display = 'flex';
        }

        function openVideoPopup(videoUrl) {
            document.getElementById('popup-video').src = videoUrl;
            document.getElementById('popup-video').style.display = 'block';
            document.getElementById('popup-image').style.display = 'none';
            document.getElementById('popup').style.display = 'flex';
        }

        function closePopup() {
            document.getElementById('popup').style.display = 'none';
            document.getElementById('popup-image').src = '';
            document.getElementById('popup-video').src = '';
        }