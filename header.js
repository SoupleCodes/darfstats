    const pageHeading = document.querySelector('header');
    if (pageHeading) {
    pageHeading.innerHTML = `
        <div class="page-header">
        <div>
        <a href="/">
          <img src="darfstats.svg" alt="logo" width="128px">
        </a>
      </div>
      <div>
        <nav class="nav-elements">
          <ul>
            <li><a href="./" class="nav-link">HOME</a></li>
            <li><a href="statistics" class="nav-link">STATISTICS</a></li>
            <li><a href="about" class="nav-link">ABOUT</a></li>
          </ul>
        </nav>
        <div class="hamburber-menu">
          <span class="fa-solid fa-bars icon hamburger"></span>
        <menu class="hamburber-elements hidden">
            <li><a href="./" class="nav-link">HOME</a></li>
            <li><a href="statistics.html" class="nav-link">STATISTICS</a></li>
            <li><a href="about.html" class="nav-link">ABOUT</a></li>
        </menu>
      </div>
      </div>
      </div>
    `;

    const hamburgerMenu = document.querySelector('.hamburger');
    const hamburgerElements = document.querySelector('.hamburber-elements');

    if (hamburgerMenu && hamburgerElements) {
      hamburgerMenu.addEventListener('click', () => {
        hamburgerElements.classList.toggle('hidden');
      });
    }
    }