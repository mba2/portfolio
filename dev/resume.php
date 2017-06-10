<!DOCTYPE html>
<html lang="pt-br">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0, user-scalable=no">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <link rel="stylesheet" href="css/app.css">


  <title>Mario Brusarosco</title>
</head>
<body>

  <div class="l-wrapper-main">
    <header id="js_header" class="l-header">
        <button id="js_headerMenuBtn" class="btn btn-menu mobileElem">
          <span class="hambLine hambLine-top"></span>
          <span class="hambLine hambLine-center"></span>
          <span class="hambLine hambLine-bottom"></span>
          <div id="js_headerMenuBtnText" class="btn-menuText">
            <span id="js_menuTextClosed" class="btn-textContent btn-textContent--menu">menu</span>
            <span id="js_menuTextOpened" class="btn-textContent btn-textContent--close">close</span>
          </div>
        </button>
        <a id="js_headerLogo" class="logo logo-header" href="/">Mario Brusarosco</a>

        <nav id="js_headerNav" class="nav nav-header">
          <menu id="js_headerMenu" class="menu menu-header">
            <ul id="js_menuList" class="menu-list">
              <li class="menu-listItem">
                <a id="" class="link link-menu" href="/resumee">resume</a>
              </li>
              <li class="menu-listItem has-drop">
                <a id="" class="link link-menu" href="/snippets">snippets</a>
                <ul class="dropdown dropdown-header">
                  <li class="dropdown-item">
                    <a class="dropdown-link" href="#">link 1</a>
                  </li>
                  <li class="dropdown-item">
                    <a class="dropdown-link" href="#">link 2</a>
                  </li>
                  <li class="dropdown-item">
                    <a class="dropdown-link" href="#">link 3</a>
                  </li>
                  <li class="dropdown-item">
                    <a class="dropdown-link" href="#">link 4</a>
                  </li>
                  <li class="dropdown-item">
                    <a class="dropdown-link" href="#">link 5</a>
                  </li>
                  <li class="dropdown-item">
                    <a class="dropdown-link" href="#">see all (15)</a>
                  </li>
                </ul>
              </li>
              <li class="menu-listItem has-drop">
                <a id="" class="link link-menu" href="/desk-apps">desktop apps</a>
                <ul class="dropdown dropdown-header">
                  <li class="dropdown-item">
                    <a href="#" class="dropdown-link">syntax guide</a>
                  </li>
                  <li class="dropdown-item">
                    <a href="#" class="dropdown-link">code editor</a>
                  </li>
                </ul>
              </li>
              <li class="menu-listItem">
                <a id="" class="link link-menu" href="#">contact</a>
              </li>
            </ul>
          </menu>
        </nav>

      <div id="js_headerProgBar" class="progBar progBar-header"></div>
    </header>

    <main class="l-mainContent">
      <div class="configPanel">
        <button class="configPanel-icon">
          <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
          	 viewBox="0 0 426.667 426.667" style="enable-background:new 0 0 426.667 426.667;" xml:space="preserve">
             <path style="fill:#35404F;" d="M425.318,237.116c0.866-7.817,1.348-15.74,1.348-23.782s-0.482-15.966-1.348-23.774
          	c-19.255,0.427-37.321-11.682-43.584-30.942c-6.255-19.26,1.242-39.676,17.071-50.641c-7.893-13.867-17.254-26.782-27.942-38.485
          	c-15.326,11.665-37.069,12.493-53.453,0.593c-16.388-11.908-22.315-32.832-15.949-51.017c-14.31-6.498-29.431-11.524-45.218-14.75
          	c-5.53,18.483-22.639,31.949-42.91,31.949c-20.275,0-37.38-13.466-42.91-31.949c-15.787,3.226-30.908,8.252-45.218,14.75
          	c6.357,18.185,0.431,39.108-15.953,51.017C92.86,81.993,71.125,81.161,55.804,69.491C45.111,81.19,35.755,94.11,27.861,107.977
          	c15.825,10.974,23.326,31.381,17.067,50.641c-6.259,19.268-24.324,31.369-43.575,30.942C0.486,197.367,0,205.291,0,213.333
          	s0.486,15.966,1.353,23.782c19.251-0.427,37.316,11.674,43.575,30.933c6.259,19.268-1.242,39.676-17.067,50.641
          	c7.893,13.867,17.25,26.782,27.942,38.485c15.326-11.657,37.069-12.493,53.449-0.585c16.388,11.9,22.31,32.823,15.949,51.008
          	c14.31,6.498,29.431,11.524,45.222,14.75c5.53-18.475,22.639-31.94,42.91-31.94s37.38,13.466,42.906,31.94
          	c15.787-3.226,30.908-8.243,45.218-14.741c-6.357-18.185-0.427-39.117,15.957-51.025c16.388-11.9,38.123-11.076,53.449,0.593
          	c10.688-11.691,20.045-24.61,27.942-38.477c-15.825-10.974-23.326-31.39-17.071-50.65
          	C387.998,248.794,406.063,236.685,425.318,237.116z M213.333,288c-41.233,0-74.667-33.434-74.667-74.667
          	s33.434-74.667,74.667-74.667c41.237,0,74.667,33.434,74.667,74.667S254.571,288,213.333,288z"/>
          </svg>
        </button>
      </div>
      <section class="breadcrumb">
        <ul class="breadcrumb-list">
          <li class="breadcrumb-path breadcrumb-home">
              <a href="/">
                <img src="img/home-breadcrumb-icon.svg" alt="">
              </a>
          </li>
          <li class="breadcrumb-path"><a>resume</a></li>
          <li class="breadcrumb-path"><a>resume</a></li>
        </ul>
      </section>

      <section class="personalData">
        <h1 class="personalData-name"><b>mario</b> brusarosco de almeida</h1>
        <article class="personalData-info">
          <div class="personalData-group personalData-group--info">
            <p class="personalData-line personalData-age">30 years</p>
            <p class="personalData-line personalData-birthPlace">brazilian</p>
          </div>
        </article>

        <article class="personalData-contact">

          <div class="personalData-line personalData-tel">
            <i class="icon icon--tel">
              <svg class="icon-svg icon-svg--tel" xmlns="http://www.w3.org/2000/svg" xml:space="preserve" width="18px" height="31px" version="1.1" style="shape-rendering:geometricPrecision; text-rendering:geometricPrecision; image-rendering:optimizeQuality; fill-rule:evenodd; clip-rule:evenodd"
              viewBox="0 0 18 31"
               xmlns:xlink="http://www.w3.org/1999/xlink">
                <path class="fill fill--phone" d="M16 0l-14 0c-1,0 -2,1 -2,2l0 27c0,1 1,2 2,2l14 0c1,0 2,-1 2,-2l0 -27c0,-1 -1,-2 -2,-2zm-9 2l4 0c0,0 0,0 0,0 0,0 0,0 0,0l-4 0c0,0 0,0 0,0 0,0 0,0 0,0zm2 28c-1,0 -1,-1 -1,-1 0,-1 0,-1 1,-1 1,0 1,0 1,1 0,0 0,1 -1,1zm8 -3l-16 0 0 -24 16 0 0 24z"/>
              </svg>
            </i>
            <p class="personalData-text">9 9630 - 3693</p>
          </div>

          <div class="personalData-line personalData-email">
            <i class="icon icon--email">
              <svg class="icon-svg icon-svg--email" xmlns="http://www.w3.org/2000/svg" xml:space="preserve" width="20px" height="14px" version="1.1" style="shape-rendering:geometricPrecision; text-rendering:geometricPrecision; image-rendering:optimizeQuality; fill-rule:evenodd; clip-rule:evenodd"
              viewBox="0 0 20 15"
               xmlns:xlink="http://www.w3.org/1999/xlink">
               <path class="fill fill--email" d="M10 10l-2 -2 -8 6c1,1 1,1 1,1l18 0c0,0 1,0 1,-1l-7 -6 -3 2z"/>
               <path class="fill fill--email" d="M20 0c0,0 -1,0 -1,0l-18 0c0,0 0,0 -1,0l10 9 10 -9z"/>
               <polygon class="fill fill--email" points="0,1 0,14 7,8 "/>
               <polygon class="fill fill--email" points="13,8 20,14 20,1 "/>
              </svg>
            </i>
            <p class="personalData-text">mariobrusarosco@gmail.com</p>
          </div>

          <div class="personalData-line personalData-git">
            <i class="icon icon--git">
              <svg class="icon-svg icon-svg--git" xmlns="http://www.w3.org/2000/svg" xml:space="preserve" width="25px" height="24px" version="1.1" style="shape-rendering:geometricPrecision; text-rendering:geometricPrecision; image-rendering:optimizeQuality; fill-rule:evenodd; clip-rule:evenodd"
              viewBox="0 0 25 24"
               xmlns:xlink="http://www.w3.org/1999/xlink">
                  <path class="fill fill-git" d="M23 6c-1,-2 -2,-3 -4,-4 -2,-1 -4,-2 -7,-2 -2,0 -4,1 -6,2 -2,1 -3,2 -4,4 -1,2 -2,4 -2,6 0,3 1,6 2,8 2,2 4,4 7,4 0,0 0,0 0,0 0,0 0,0 0,0 0,0 0,-1 0,-1 0,-1 0,-1 0,-2l0 0c0,1 -1,1 -1,1 0,0 -1,0 -1,-1 0,0 -1,0 -1,0 0,0 -1,-1 -1,-1l0 0c0,-1 0,-1 0,-1 -1,-1 -1,-1 -1,-1l0 0c0,0 0,0 -1,0 0,0 0,0 0,0 0,0 0,-1 0,-1 0,0 1,0 1,0l0 0c0,0 1,1 1,1 0,0 1,0 1,1 0,0 0,0 1,1 0,0 0,0 1,0 0,0 0,0 1,0 0,0 0,0 0,0 1,-1 1,-2 1,-2 0,0 -1,0 -1,0 -1,0 -1,-1 -2,-1 -1,0 -1,-1 -1,-1 -1,0 -1,-1 -1,-2 0,0 0,-1 0,-2 0,-1 0,-3 1,-4 -1,0 -1,-2 0,-3 0,0 1,0 1,0 1,1 1,1 2,1 0,0 0,0 0,0 1,0 2,0 3,0 2,0 3,0 4,0l0 0c1,0 1,0 2,-1 0,0 1,0 1,0 1,1 1,3 0,3 1,1 1,3 1,4 0,1 0,2 0,2 0,1 0,2 -1,2 0,0 -1,1 -1,1 -1,0 -1,1 -2,1 0,0 -1,0 -1,0 0,1 1,1 1,2l0 4c0,0 0,0 0,0 0,0 0,0 0,0 3,0 5,-2 7,-4 1,-2 2,-5 2,-8 0,-2 -1,-4 -2,-6z"/>
              </svg>
            </i>
            <p class="personalData-text">mariobrusarosco</p>
          </div>
        </article>

        <article class="personalData-goal">
          <h1 class="personalData-title personalData-title--goal">goal</h1>
          <h2 class="personalData-subtitle personalData-subtitle--goal"><span>front end developer<span></h2>
        </article>

        <article class="personalData-education">
            <h1 class="personalData-title personalData-title--education">education</h1>
            <div class="personalData-group personalData-group--education">
              <h2 class="personalData-subtitle personalData-subtitle--education"><span>análise de sistemas<span></h2>
              <h2 class="personalData-subtitle personalData-subtitle--education"><span>faculdade eniac - (2014 - 2016)</span></h2>
            </div>
        </article>

      </section>

      <section class="developerData">
        <div class="tabs">
          <nav class="tabs-nav">
            <div class="tabs-tab tabs-tab--skills">
              <span class-"tabs-title tabs-title--skills">skills</span>
              <i class="tabs-arrow"></i>
            </div>
            <div class="tabs-tab tabs-tab--xp">
              <span class-"tabs-title tabs-title--xp">experience</span>
              <i class="tabs-arrow"></i>
            </div>
            <div class="tabs-tab tabs-tab--courses">
              <span class-"tabs-title tabs-title--courses">courses</span>
              <i class="tabs-arrow"></i>
            </div>
          </nav>
          <div class="tabs-mainContent">
            <article class="tabs-content tabs-content--skills">
              <h1 class="tabs-title tabs-title--content">skills</h1>
              <h2 class="tabs-contentHeading tabs-contentHeading--html5"><strong>html 5 - </strong>semantic mark up</h2>
              <h2 class="tabs-contentHeading tabs-contentHeading--css3"><strong>css3 - </strong>responsive design using media query or bootstrap grid</h2>
              <h2 class="tabs-contentHeading tabs-contentHeading--bem"><strong>BEM - </strong>naming convention</h2>
              <h2 class="tabs-contentHeading tabs-contentHeading--smass"><strong>SMACSS - </strong>folder structure and naming convention</h2>
              <h2 class="tabs-contentHeading tabs-contentHeading--sass"><strong>SASS (SCSS) - </strong>mixins, placeholders,  variables, @if/else, @each & partials</h2>
              <h2 class="tabs-contentHeading tabs-contentHeading--json"><strong>JSON - </strong>creation of objects and retrieving them with AJAX</h2>
              <h2 class="tabs-contentHeading tabs-contentHeading--git"><strong>Git - </strong>"branch", "fetch & rebase", "interactive rebase", "merge", "reset", "revert" and config via SSH keys</h2>
              <h2 class="tabs-contentHeading tabs-contentHeading--photoshop"><strong>Photoshop - </strong>retrieving images</h2>
              <h2 class="tabs-contentHeading tabs-contentHeading--sql"><strong>SQL - </strong>MySQL - "INSERT", "UPDATE", "DELETE", "CREATE", "INNER JOIN" & "LEFT JOIN"</h2>
              <h2 class="tabs-contentHeading tabs-contentHeading--OOP"><strong>OOP - </strong>initial concepts applied on PHP</h2>
              <h2 class="tabs-contentHeading tabs-contentHeading--misc"><strong>MISC - </strong>basic FTP flow, basic linux commands</h2>
              <h2 class="tabs-contentHeading tabs-contentHeading--english"><strong>english - </strong>fluent</h2>
            </article>
            
            <article class="tabs-content tabs-content--xp">
              <h1 class="tabs-title tabs-title--content">experience</h1>
              <h2 class="tabs-contentHeading tabs-contentHeading--html5"><strong>html 5 - </strong>semantic mark up</h2>
              <h2 class="tabs-contentHeading tabs-contentHeading--css3"><strong>css3 - </strong>responsive design using media query or bootstrap grid</h2>
              <h2 class="tabs-contentHeading tabs-contentHeading--bem"><strong>BEM - </strong>naming convention</h2>
              <h2 class="tabs-contentHeading tabs-contentHeading--smass"><strong>SMACSS - </strong>folder structure and naming convention</h2>
              <h2 class="tabs-contentHeading tabs-contentHeading--sass"><strong>SASS (SCSS) - </strong>mixins, placeholders,  variables, @if/else, @each & partials</h2>
              <h2 class="tabs-contentHeading tabs-contentHeading--json"><strong>JSON - </strong>creation of objects and retrieving them with AJAX</h2>
              <h2 class="tabs-contentHeading tabs-contentHeading--git"><strong>Git - </strong>"branch", "fetch & rebase", "interactive rebase", "merge", "reset", "revert" and config via SSH keys</h2>
              <h2 class="tabs-contentHeading tabs-contentHeading--photoshop"><strong>Photoshop - </strong>retrieving images</h2>
              <h2 class="tabs-contentHeading tabs-contentHeading--sql"><strong>SQL - </strong>MySQL - "INSERT", "UPDATE", "DELETE", "CREATE", "INNER JOIN" & "LEFT JOIN"</h2>
              <h2 class="tabs-contentHeading tabs-contentHeading--OOP"><strong>OOP - </strong>initial concepts applied on PHP</h2>
              <h2 class="tabs-contentHeading tabs-contentHeading--misc"><strong>MISC - </strong>basic FTP flow, basic linux commands</h2>
              <h2 class="tabs-contentHeading tabs-contentHeading--english"><strong>english - </strong>fluent</h2>
            </article>

            <article class="tabs-content tabs-content--courses">
              <h1 class="tabs-title tabs-title--content">courses</h1>
              <h2 class="tabs-contentHeading tabs-contentHeading--html5"><strong>html 5 - </strong>semantic mark up</h2>
              <h2 class="tabs-contentHeading tabs-contentHeading--css3"><strong>css3 - </strong>responsive design using media query or bootstrap grid</h2>
              <h2 class="tabs-contentHeading tabs-contentHeading--bem"><strong>BEM - </strong>naming convention</h2>
              <h2 class="tabs-contentHeading tabs-contentHeading--smass"><strong>SMACSS - </strong>folder structure and naming convention</h2>
              <h2 class="tabs-contentHeading tabs-contentHeading--sass"><strong>SASS (SCSS) - </strong>mixins, placeholders,  variables, @if/else, @each & partials</h2>
              <h2 class="tabs-contentHeading tabs-contentHeading--json"><strong>JSON - </strong>creation of objects and retrieving them with AJAX</h2>
              <h2 class="tabs-contentHeading tabs-contentHeading--git"><strong>Git - </strong>"branch", "fetch & rebase", "interactive rebase", "merge", "reset", "revert" and config via SSH keys</h2>
              <h2 class="tabs-contentHeading tabs-contentHeading--photoshop"><strong>Photoshop - </strong>retrieving images</h2>
              <h2 class="tabs-contentHeading tabs-contentHeading--sql"><strong>SQL - </strong>MySQL - "INSERT", "UPDATE", "DELETE", "CREATE", "INNER JOIN" & "LEFT JOIN"</h2>
              <h2 class="tabs-contentHeading tabs-contentHeading--OOP"><strong>OOP - </strong>initial concepts applied on PHP</h2>
              <h2 class="tabs-contentHeading tabs-contentHeading--misc"><strong>MISC - </strong>basic FTP flow, basic linux commands</h2>
              <h2 class="tabs-contentHeading tabs-contentHeading--english"><strong>english - </strong>fluent</h2>
            </article>
          </div>
        </div>
      </section>
    </main>

    <button id="js_back-to-top" class="btn btn-back-to-top">
      <svg xmlns="http://www.w3.org/2000/svg" xml:space="preserve" width="40px" height="40px" version="1.1" style="shape-rendering:geometricPrecision; text-rendering:geometricPrecision; image-rendering:optimizeQuality; fill-rule:evenodd; clip-rule:evenodd"
      viewBox="0 0 40 40" xmlns:xlink="http://www.w3.org/1999/xlink">
       <defs>
        <style type="text/css">
         <![CDATA[
          .str0 {stroke:#E45F56;stroke-width:1.99991}
          .fil1 {fill:none}
          .fil0 {fill:white}
         ]]>
        </style>
       </defs>
       <g id="Camada_x0020_1">
        <metadata id="CorelCorpID_0Corel-Layer"/>
        <circle class="fil0 str0" cx="20" cy="20" r="18"/>
        <polyline class="fil1 str0" points="12,26 20,14 28,26 "/>
       </g>
      </svg>
    </button>
    <footer id="js_footer" class="l-footer">
      <div id="js_footerWrapper" class="wrapper">
        <ul id="js_footerMenu" class="menu menu-footer">
          <li id="js_footerEmail" class="link link-menu link-footer link-email">
            <a href="#">mariobrusarosco@gmail.com</a>
          </li>
          <div id="" class="link-socials">
            <li id="js_footerGithub" class="link link-menu link-footer link-github">
              <a href="https://github.com/mariobrusarosco">github
                <svg class="icon" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
                	 width="512px" height="512px" viewBox="0 0 512 512" style="enable-background:new 0 0 512 512;" xml:space="preserve">
                  <g>
                	  <path d="M256,0C114.615,0,0,114.615,0,256s114.615,256,256,256s256-114.615,256-256S397.385,0,256,0z M408.027,408.027
                		c-19.76,19.759-42.756,35.267-68.354,46.094c-6.502,2.75-13.105,5.164-19.801,7.246V423c0-20.167-6.916-35-20.75-44.5
                		c8.668-0.833,16.625-2,23.875-3.5s14.918-3.667,23-6.5c8.084-2.833,15.334-6.208,21.75-10.125c6.418-3.917,12.584-9,18.5-15.25
                		c5.918-6.25,10.875-13.333,14.875-21.25s7.168-17.417,9.5-28.5c2.334-11.083,3.5-23.292,3.5-36.625c0-25.833-8.416-47.833-25.25-66
                		c7.668-20,6.834-41.75-2.5-65.25l-6.25-0.75c-4.332-0.5-12.125,1.333-23.375,5.5s-23.875,11-37.875,20.5
                		c-19.832-5.5-40.416-8.25-61.749-8.25c-21.5,0-42,2.75-61.5,8.25c-8.833-6-17.208-10.958-25.125-14.875s-14.25-6.583-19-8
                		s-9.167-2.292-13.25-2.625s-6.708-0.417-7.875-0.25s-2,0.333-2.5,0.5c-9.333,23.667-10.167,45.417-2.5,65.25
                		c-16.833,18.167-25.25,40.167-25.25,66c0,13.333,1.167,25.542,3.5,36.625s5.5,20.583,9.5,28.5s8.958,15,14.875,21.25
                		s12.083,11.333,18.5,15.25s13.667,7.292,21.75,10.125s15.75,5,23,6.5s15.208,2.667,23.875,3.5c-13.667,9.333-20.5,24.167-20.5,44.5
                		v39.115c-7.549-2.247-14.99-4.902-22.3-7.994c-25.597-10.827-48.594-26.335-68.353-46.094
                		c-19.758-19.758-35.267-42.756-46.093-68.354C46.679,313.195,41,285.043,41,256s5.679-57.195,16.879-83.675
                		c10.827-25.597,26.335-48.594,46.093-68.353c19.758-19.759,42.756-35.267,68.353-46.093C198.805,46.679,226.957,41,256,41
                		s57.195,5.679,83.676,16.879c25.598,10.827,48.594,26.335,68.354,46.093c19.758,19.758,35.266,42.756,46.092,68.353
                		C465.32,198.805,471,226.957,471,256s-5.68,57.195-16.879,83.675C443.295,365.271,427.785,388.27,408.027,408.027z"/>
                  </g>
                </svg>
              </a>
            </li>
            <li id="js_footerTwitter" class="link link-menu link-footer link-twitter">
              <a href="https://twitter.com/mariobrusarosco">twitter
                <svg class="icon" version="1.1" id="SVG-Twitter" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
                	 viewBox="0 0 612 612" style="enable-background:new 0 0 612 612;" xml:space="preserve">
                  <g>
                  	<g>
                  		<path d="M612,116.258c-22.525,9.981-46.694,16.75-72.088,19.772c25.929-15.527,45.777-40.155,55.184-69.411
                  			c-24.322,14.379-51.169,24.82-79.775,30.48c-22.907-24.437-55.49-39.658-91.63-39.658c-69.334,0-125.551,56.217-125.551,125.513
                  			c0,9.828,1.109,19.427,3.251,28.606C197.065,206.32,104.556,156.337,42.641,80.386c-10.823,18.51-16.98,40.078-16.98,63.101
                  			c0,43.559,22.181,81.993,55.835,104.479c-20.575-0.688-39.926-6.348-56.867-15.756v1.568c0,60.806,43.291,111.554,100.693,123.104
                  			c-10.517,2.83-21.607,4.398-33.08,4.398c-8.107,0-15.947-0.803-23.634-2.333c15.985,49.907,62.336,86.199,117.253,87.194
                  			c-42.947,33.654-97.099,53.655-155.916,53.655c-10.134,0-20.116-0.612-29.944-1.721c55.567,35.681,121.536,56.485,192.438,56.485
                  			c230.948,0,357.188-191.291,357.188-357.188l-0.421-16.253C573.872,163.526,595.211,141.422,612,116.258z"/>
                  	</g>
                  </g>
                </svg>
              </a>
            </li>
            <li id="js_footerLinked" class="link link-menu link-footer link-linkedin">
              <a href="https://www.linkedin.com/in/mariobrusarosco/">linkedin
                <svg class="icon" version="1.1" id="SVG-Linkedin" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 430.117 430.118" style="enable-background:new 0 0 430.117 430.118;"
                	 xml:space="preserve">
                  <g>
                  	<path id="LinkedIn__x28_alt_x29_" d="M398.355,0H31.782C14.229,0,0.002,13.793,0.002,30.817v368.471
                  		c0,17.025,14.232,30.83,31.78,30.83h366.573c17.549,0,31.76-13.814,31.76-30.83V30.817C430.115,13.798,415.904,0,398.355,0z
                  		 M130.4,360.038H65.413V165.845H130.4V360.038z M97.913,139.315h-0.437c-21.793,0-35.92-14.904-35.92-33.563
                  		c0-19.035,14.542-33.535,36.767-33.535c22.227,0,35.899,14.496,36.331,33.535C134.654,124.415,120.555,139.315,97.913,139.315z
                  		 M364.659,360.038h-64.966V256.138c0-26.107-9.413-43.921-32.907-43.921c-17.973,0-28.642,12.018-33.327,23.621
                  		c-1.736,4.144-2.166,9.94-2.166,15.728v108.468h-64.954c0,0,0.85-175.979,0-194.192h64.964v27.531
                  		c8.624-13.229,24.035-32.1,58.534-32.1c42.76,0,74.822,27.739,74.822,87.414V360.038z M230.883,193.99
                  		c0.111-0.182,0.266-0.401,0.42-0.614v0.614H230.883z"/>
                  </g>
                </svg>
              </a>
            </li>
          </div>
        </ul>
      </div>
    </footer>
  </div>

  <script src="js/app.js"></script>
</body>
</html>
