let currentImageIndex = 1;

// 圖片陣列
const images = [
    'JPG/03_工作區域 1_工作區域 1_工作區域 1.jpg',
    'JPG/福春POST_工作區域 1.jpg',
    'JPG/福春POST0_工作區域 1.jpg',
    'JPG/01POST_工作區域 1_工作區域 1.jpg',
    'JPG/福春POST_工作區域 1.jpg',
    'JPG/IG_工作區域 1.jpg',
    'JPG/IG2_工作區域 1.jpg',
    'JPG/無良道長196_工作區域 1.jpg',
    'JPG/流光幻視2_工作區域 1.jpg',
    'JPG/IG頭像_工作區域 1.jpg'
];

// 開啟 Lightbox
function openLightbox(imageSrc) {
    const lightbox = document.getElementById("lightbox");
    const lightboxImg = document.getElementById("lightbox-img");

    currentImageIndex = images.indexOf(imageSrc);
    if (currentImageIndex === -1) return;

    // 設定初始縮小狀態
    lightboxImg.style.opacity = "0";
    lightboxImg.style.transform = "scale(0.8)";

    lightbox.style.display = "flex";
    
    setTimeout(() => {
        lightboxImg.src = imageSrc;
        lightboxImg.style.opacity = "1";
        lightboxImg.style.transform = "scale(1)";
    }, 50);
}

// 關閉 Lightbox
function closeLightbox(event) {
    const lightbox = document.getElementById("lightbox");
    if (!event || event.target.id === "lightbox") {
        lightbox.style.display = "none";
    }
}

// 變更圖片 (前進/後退)
function changeImage(direction) {
    const lightboxImg = document.getElementById("lightbox-img");

    // 先縮小圖片並淡出
    lightboxImg.style.opacity = "0";
    lightboxImg.style.transform = "scale(0.8)";
    
    setTimeout(() => {
        if (direction === 'prev') {
            currentImageIndex = (currentImageIndex - 1 + images.length) % images.length;
        } else if (direction === 'next') {
            currentImageIndex = (currentImageIndex + 1) % images.length;
        }
        lightboxImg.src = images[currentImageIndex];
        
        // 顯示並放大
        lightboxImg.style.opacity = "1";
        lightboxImg.style.transform = "scale(1)";
    }, 200);
}

// 綁定事件
const lightbox = document.getElementById('lightbox');
const prevButton = document.getElementById('prev');
const nextButton = document.getElementById('next');

if (lightbox) lightbox.addEventListener('click', closeLightbox);
if (prevButton) prevButton.addEventListener('click', (e) => {
    e.stopPropagation();
    changeImage('prev');
});
if (nextButton) nextButton.addEventListener('click', (e) => {
    e.stopPropagation();
    changeImage('next');
});

// 綁定 Gallery 圖片點擊事件
document.querySelectorAll('.gallery-item img').forEach((img) => {
    img.addEventListener('click', () => openLightbox(img.getAttribute('src')));
});
