// Content Loader - 动态加载和渲染页面内容
// 作者: Gaoxiang Jin
// 用途: 将数据与展示分离,便于内容维护

class ContentLoader {
  constructor() {
    this.data = null;
  }

  // 加载 JSON 数据
  async loadData() {
    try {
      const response = await fetch('./data/content.json');
      this.data = await response.json();
      return this.data;
    } catch (error) {
      console.error('加载数据失败:', error);
      return null;
    }
  }

  // 渲染工作经历
  renderEmployment() {
    const container = document.querySelector('#employment-list');
    if (!container || !this.data.employment) return;

    container.innerHTML = this.data.employment.map(job => `
      <li class="timeline-item">
        <h4 class="h4 timeline-item-title">${job.institution}</h4>
        <span>${job.period} &emsp;&emsp; ${job.location}</span>
        <p class="timeline-text">
          ${job.position}
          ${job.department ? `<br>${job.department}` : ''}
        </p>
      </li>
    `).join('');
  }

  // 渲染教育经历
  renderEducation() {
    const container = document.querySelector('#education-list');
    if (!container || !this.data.education) return;

    container.innerHTML = this.data.education.map(edu => `
      <li class="timeline-item">
        <h4 class="h4 timeline-item-title">${edu.institution}</h4>
        <span>${edu.period} &emsp;&emsp; ${edu.location}</span>
        <p class="timeline-text">
          ${edu.degree}
          ${edu.thesis ? `<br>${edu.thesis}` : ''}
        </p>
      </li>
    `).join('');
  }

  // 渲染论文列表
  renderPublications() {
    const container = document.querySelector('#publication-list');
    if (!container || !this.data.publications) return;

    container.innerHTML = this.data.publications.map(pub => `
      <li class="timeline-item">
        <h4 class="h4 timeline-item-title">${pub.title}</h4>
        <span>
          <strong>${pub.year}</strong>&ensp;&ensp; <em>${pub.journal}</em>&ensp;&ensp;&ensp;
          ${pub.arxiv ? `
            <a href="${pub.arxiv}" class="contact-link">arXiv link</a>
          ` : ''}
        </span>
        <p class="timeline-text">${pub.authors}</p>
      </li>
    `).join('');
  }

  // 渲染望远镜时间
  renderTelescopes() {
    const container = document.querySelector('.testimonials-list');
    if (!container || !this.data.telescopes) return;

    container.innerHTML = this.data.telescopes.map(tel => `
      <li class="testimonials-item">
        <div class="content-card" data-testimonials-item>
          <figure class="testimonials-avatar-box">
            <img src="${tel.image}" alt="${tel.name}" width="60" loading="lazy" data-testimonials-avatar>
          </figure>
          <h4 class="h4 testimonials-item-title" data-testimonials-title>${tel.name}</h4>
          <div class="testimonials-text" data-testimonials-text>
            <p>
              ${tel.role}, ${tel.time}, ${tel.year}, ${tel.type}<br>
              Instrument: ${tel.instrument}
            </p>
          </div>
        </div>
      </li>
    `).join('');
  }

  // 渲染会议列表
  renderConferences() {
    const container = document.querySelector('#conference-list');
    if (!container || !this.data.conferences) return;

    container.innerHTML = this.data.conferences.map(conf => `
      <li class="timeline-item">
        <h4 class="h4 timeline-item-title">${conf.title}</h4>
        <span>${conf.date} &emsp; ${conf.location}</span>
      </li>
    `).join('');
  }

  // 渲染编程技能
  renderProgramming() {
    const container = document.querySelector('.clients-list');
    if (!container || !this.data.programming) return;

    container.innerHTML = this.data.programming.map(prog => `
      <li class="clients-item">
        <a href="${prog.url}">
          <img src="${prog.logo}" alt="${prog.alt}" ${prog.class ? `class="${prog.class}"` : ''} loading="lazy">
        </a>
      </li>
    `).join('');
  }

  // 渲染研究项目
  renderResearch() {
    const container = document.querySelector('.blog-posts-list');
    if (!container || !this.data.research) return;

    container.innerHTML = this.data.research.map(research => `
      <li class="blog-post-item">
        <div class="blog-item-wrapper">
          <figure class="blog-banner-box">
            <img src="${research.image}" alt="${research.title}" loading="lazy">
          </figure>
          <div class="blog-content">
            <div class="blog-meta">
              <p class="blog-category">${research.category}</p>
              <span class="dot"></span>
              <time datetime="${research.date}">${research.date.replace(/[AB]$/, '')}</time>
            </div>
            <h3 class="h3 blog-item-title">${research.title}</h3>
            <p class="blog-text">${research.description}</p>
          </div>
        </div>
      </li>
    `).join('');
  }

  // 渲染图库
  renderGallery() {
    const container = document.querySelector('.project-list');
    if (!container || !this.data.gallery) return;

    container.innerHTML = this.data.gallery.map(item => {
      // 缩略图路径，优先用 item.thumb，否则自动替换路径
      const thumb = item.thumb || item.image.replace('/gallery/', '/gallery_thumbs/');
      return `
        <li class="project-item active" data-filter-item data-category="${item.category}">
          <a href="#" data-fullsrc="${item.image}">
            <figure class="project-img">
              <img src="${thumb}" alt="${item.title}" loading="lazy">
            </figure>
            <h3 class="project-title">${item.title}</h3>
            <p class="project-category">${item.category.charAt(0).toUpperCase() + item.category.slice(1)}</p>
          </a>
        </li>
      `;
    }).join('');
    
    // 重新初始化过滤器功能
    this.reinitializeFilters();
    // 重新初始化图片查看器（改为点击时加载原图）
    setTimeout(() => {
      const galleryItems = document.querySelectorAll('.project-item a');
      galleryItems.forEach(link => {
        link.addEventListener('click', function(e) {
          e.preventDefault();
          e.stopPropagation();
          const fullSrc = link.getAttribute('data-fullsrc');
          const modal = document.getElementById('imageViewerModal');
          const modalImg = document.getElementById('imageViewerImg');
          const modalCaption = document.getElementById('imageViewerCaption');
          if (modal && modalImg && modalCaption) {
            modal.style.display = 'block';
            modalCaption.textContent = link.querySelector('.project-title')?.textContent || '';
            modalImg.src = '';
            modalImg.src = fullSrc;
            document.body.style.overflow = 'hidden';
          }
        });
      });
    }, 0);
  }

  // 重新初始化过滤器
  reinitializeFilters() {
    // 确保在下一个事件循环中执行，让DOM更新完成
    setTimeout(() => {
      // 触发一次"all"过滤，确保所有项目可见
      const filterItems = document.querySelectorAll('[data-filter-item]');
      filterItems.forEach(item => {
        item.classList.add('active');
      });
    }, 0);
  }

  // 初始化所有内容
  async init() {
    await this.loadData();
    if (!this.data) {
      console.error('无法加载内容数据');
      return;
    }

    this.renderEmployment();
    this.renderEducation();
    this.renderPublications();
    this.renderTelescopes();
    this.renderConferences();
    this.renderProgramming();
    this.renderResearch();
    this.renderGallery();

    console.log('✅ 内容加载完成');
  }
}

// 页面加载完成后初始化
document.addEventListener('DOMContentLoaded', async () => {
  const loader = new ContentLoader();
  await loader.init();
  
  // 确保原有的 script.js 功能在内容加载后正常工作
  // 触发自定义事件,通知内容已加载
  window.dispatchEvent(new Event('contentLoaded'));
});
