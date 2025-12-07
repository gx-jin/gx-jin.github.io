'use strict';



// element toggle function
const elementToggleFunc = function (elem) { elem.classList.toggle("active"); }



// sidebar variables
const sidebar = document.querySelector("[data-sidebar]");
const sidebarBtn = document.querySelector("[data-sidebar-btn]");

// sidebar toggle functionality for mobile
sidebarBtn.addEventListener("click", function () { elementToggleFunc(sidebar); });



// testimonials variables
const testimonialsItem = document.querySelectorAll("[data-testimonials-item]");
const modalContainer = document.querySelector("[data-modal-container]");
const modalCloseBtn = document.querySelector("[data-modal-close-btn]");
const overlay = document.querySelector("[data-overlay]");

// modal variable
const modalImg = document.querySelector("[data-modal-img]");
const modalTitle = document.querySelector("[data-modal-title]");
const modalText = document.querySelector("[data-modal-text]");

// modal toggle function
const testimonialsModalFunc = function () {
  modalContainer.classList.toggle("active");
  overlay.classList.toggle("active");
}

// add click event to all modal items
for (let i = 0; i < testimonialsItem.length; i++) {

  testimonialsItem[i].addEventListener("click", function () {

    modalImg.src = this.querySelector("[data-testimonials-avatar]").src;
    modalImg.alt = this.querySelector("[data-testimonials-avatar]").alt;
    modalTitle.innerHTML = this.querySelector("[data-testimonials-title]").innerHTML;
    modalText.innerHTML = this.querySelector("[data-testimonials-text]").innerHTML;

    testimonialsModalFunc();

  });

}

// add click event to modal close button
// modalCloseBtn.addEventListener("click", testimonialsModalFunc);
// overlay.addEventListener("click", testimonialsModalFunc);



// custom select variables
const select = document.querySelector("[data-select]");
const selectItems = document.querySelectorAll("[data-select-item]");
const selectValue = document.querySelector("[data-selecct-value]");
const filterBtn = document.querySelectorAll("[data-filter-btn]");

select.addEventListener("click", function () { elementToggleFunc(this); });

// add event in all select items
for (let i = 0; i < selectItems.length; i++) {
  selectItems[i].addEventListener("click", function () {

    let selectedValue = this.innerText.toLowerCase();
    selectValue.innerText = this.innerText;
    elementToggleFunc(select);
    filterFunc(selectedValue);
    
    // 保存筛选状态到URL
    updateFilterURL(selectedValue);

  });
}

// filter variables
// 注意: filterItems 现在在函数内部动态获取,因为内容是异步加载的

const filterFunc = function (selectedValue) {
  // 每次都重新获取最新的filter items,因为它们是动态加载的
  const filterItems = document.querySelectorAll("[data-filter-item]");

  for (let i = 0; i < filterItems.length; i++) {

    if (selectedValue === "all") {
      filterItems[i].classList.add("active");
    } else if (selectedValue === filterItems[i].dataset.category) {
      filterItems[i].classList.add("active");
    } else {
      filterItems[i].classList.remove("active");
    }

  }

}

// 更新URL中的筛选参数
function updateFilterURL(filter) {
  const url = new URL(window.location);
  if (filter === "all") {
    url.searchParams.delete('filter');
  } else {
    url.searchParams.set('filter', filter);
  }
  window.history.replaceState({}, '', url);
}

// add event in all filter button items for large screen
let lastClickedBtn = filterBtn[0];

for (let i = 0; i < filterBtn.length; i++) {

  filterBtn[i].addEventListener("click", function () {

    let selectedValue = this.innerText.toLowerCase();
    selectValue.innerText = this.innerText;
    filterFunc(selectedValue);

    lastClickedBtn.classList.remove("active");
    this.classList.add("active");
    lastClickedBtn = this;
    
    // 保存筛选状态到URL
    updateFilterURL(selectedValue);

  });

}



// contact form variables
const form = document.querySelector("[data-form]");
const formInputs = document.querySelectorAll("[data-form-input]");
const formBtn = document.querySelector("[data-form-btn]");

// add event to all form input field
for (let i = 0; i < formInputs.length; i++) {
  formInputs[i].addEventListener("input", function () {

    // check form validation
    if (form.checkValidity()) {
      formBtn.removeAttribute("disabled");
    } else {
      formBtn.setAttribute("disabled", "");
    }

  });
}



// page navigation variables
const navigationLinks = document.querySelectorAll("[data-nav-link]");
const pages = document.querySelectorAll("[data-page]");

// 导航到指定页面的函数
function navigateToPage(pageName) {
  const pageNameLower = pageName.toLowerCase();

  for (let j = 0; j < pages.length; j++) {
    if (pageNameLower === pages[j].dataset.page) {
      pages[j].classList.add("active");
    } else {
      pages[j].classList.remove("active");
    }
  }

  for (let k = 0; k < navigationLinks.length; k++) {
    const linkText = navigationLinks[k].innerHTML.toLowerCase();
    if (linkText === pageNameLower) {
      navigationLinks[k].classList.add("active");
    } else {
      navigationLinks[k].classList.remove("active");
    }
  }

  // 如果导航到 Gallery 页面，重置筛选为 "All"
  if (pageNameLower === "gallery") {
    resetGalleryFilter();
  }

  window.scrollTo(0, 0);
}

// 重置 Gallery 筛选为 All 的函数
function resetGalleryFilter() {
  // 应用 "all" 筛选
  filterFunc("all");
  
  // 更新下拉选择框文本
  selectValue.innerText = "All";
  
  // 激活第一个筛选按钮（All）
  for (let i = 0; i < filterBtn.length; i++) {
    if (i === 0) {
      filterBtn[i].classList.add("active");
      lastClickedBtn = filterBtn[i];
    } else {
      filterBtn[i].classList.remove("active");
    }
  }
  
  // 清除URL中的筛选参数
  updateFilterURL("all");
}

// add event to all nav link
for (let i = 0; i < navigationLinks.length; i++) {
  navigationLinks[i].addEventListener("click", function (e) {
    e.preventDefault();
    const clickedLinkText = this.innerHTML.toLowerCase();
    
    // 更新URL hash
    window.location.hash = clickedLinkText;
    
    navigateToPage(clickedLinkText);
  });
}

// 页面加载时根据URL hash导航到对应页面
window.addEventListener("DOMContentLoaded", function() {
  const hash = window.location.hash.slice(1); // 移除 # 符号
  
  if (hash) {
    navigateToPage(hash);
  } else {
    // 默认显示 resume 页面
    navigateToPage("resume");
  }
  
  // 恢复筛选状态
  const urlParams = new URLSearchParams(window.location.search);
  const savedFilter = urlParams.get('filter');
  if (savedFilter) {
    // 应用筛选
    filterFunc(savedFilter);
    selectValue.innerText = savedFilter.charAt(0).toUpperCase() + savedFilter.slice(1);
    
    // 激活对应的筛选按钮
    for (let i = 0; i < filterBtn.length; i++) {
      if (filterBtn[i].innerText.toLowerCase() === savedFilter) {
        lastClickedBtn.classList.remove("active");
        filterBtn[i].classList.add("active");
        lastClickedBtn = filterBtn[i];
        break;
      }
    }
  }
  
  // 初始化图片查看器
  initImageViewer();
});

// 监听浏览器前进/后退按钮
window.addEventListener("hashchange", function() {
  const hash = window.location.hash.slice(1);
  
  if (hash) {
    navigateToPage(hash);
  } else {
    navigateToPage("resume");
  }
});



// 图片查看器功能
function initImageViewer() {
  const imageViewerModal = document.getElementById("imageViewerModal");
  const imageViewerImg = document.getElementById("imageViewerImg");
  const imageViewerCaption = document.getElementById("imageViewerCaption");
  const imageViewerClose = document.getElementById("imageViewerClose");

  if (!imageViewerModal || !imageViewerImg || !imageViewerCaption || !imageViewerClose) {
    return;
  }

  // 获取所有gallery项目
  const galleryItems = document.querySelectorAll(".project-item");

  // 为每个gallery项目添加点击事件
  galleryItems.forEach(function(item) {
    const link = item.querySelector("a");
    const img = item.querySelector("img");
    const title = item.querySelector(".project-title");
    
    if (link && img) {
      link.style.cursor = "pointer";
      
      // 保存原图地址到data属性
      if (!img.dataset.fullSrc) {
        img.dataset.fullSrc = img.src;
      }
      
      link.addEventListener("click", function(e) {
        e.preventDefault();
        e.stopPropagation();
        
        // 显示模态框
        imageViewerModal.style.display = "block";
        
        // 先显示加载提示
        imageViewerCaption.textContent = "加载中...";
        imageViewerImg.src = "";
        
        // 创建新图片对象预加载原图
        const fullImg = new Image();
        fullImg.onload = function() {
          imageViewerImg.src = fullImg.src;
          imageViewerCaption.textContent = title ? title.textContent : img.alt;
        };
        fullImg.onerror = function() {
          imageViewerCaption.textContent = "图片加载失败";
        };
        // 加载原图
        fullImg.src = img.dataset.fullSrc;
        
        // 阻止body滚动
        document.body.style.overflow = "hidden";
      });
    }
  });



  // 关闭按钮
  imageViewerClose.addEventListener("click", function() {
    imageViewerModal.style.display = "none";
    document.body.style.overflow = "auto";
  });

  // 点击模态框外部关闭
  imageViewerModal.addEventListener("click", function(e) {
    if (e.target === imageViewerModal) {
      imageViewerModal.style.display = "none";
      document.body.style.overflow = "auto";
    }
  });

  // ESC键关闭
  document.addEventListener("keydown", function(e) {
    if (e.key === "Escape" && imageViewerModal.style.display === "block") {
      imageViewerModal.style.display = "none";
      document.body.style.overflow = "auto";
    }
  });
}