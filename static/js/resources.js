//Para agregar o remover recursos, Tabs[] y ResourceLists[]

const heads = [
  "#",
  "Title",
  "Description",
  "Link"
];

const tabs = [
  "Python",
  "Flask",
  "Django",
  "Html",
  "Css",
  "UI",
  "Js",
  "React",
  "SQL",
  "Git",
  "Hosting",
  "CSharp",
  "Selenium",
  "Courses",
];

const resourcesList = [{
    id: "Python",
    resources: [{
        title: "Pypi",
        description: "Paquetes de Python",
        url: "https://pypi.org/",
      },
      {
        title: "Excecisms Python Track",
        description: "Ofrece diversos ejercicios de Python",
        url: "https://exercism.org/tracks/python",
      },
      {
        title: "Python Principles Challenges",
        description: "Un set de desafios para practicar Python, con pistas y soluciones",
        url: "https://pythonprinciples.com/challenges/",
      },
      {
        title: "Real Python",
        description: "Variedad de articulos y cursos desde nivel basico hasta avanzado",
        url: "https://realpython.com/",
      },
      {
        title: "Python Crash Course",
        description: "Un libro muy popular con un alcance para crear proyectos en Python",
        url: "https://bedford-computing.co.uk/learning/wp-content/uploads/2015/10/No.Starch.Python.Oct_.2015.ISBN_.1593276036.pdf",
      },
      {
        title: "Talk Python to me",
        description: "Un podcast acerca Python",
        url: "https://talkpython.fm/",
      },
      {
        title: "PyBites",
        description: "Para mejorar las habilidades en python usando problemas de Bites",
        url: "https://codechalleng.es/",
      },
      {
        title: "Pypi",
        description: "Paquetes de Python",
        url: "https://pypi.org/",
      },
      {
        title: "W3C Python",
        description: "EL curso y guia de W3C para Python",
        url: "https://www.w3schools.com/python/",
      }
    ]
  },
  {
    id: "Flask",
    resources: [{
        title: "Blueprints",
        description: "Blueprints de Flask, documentacion importante para crear rutas",
        url: "https://realpython.com/flask-blueprint/#what-a-flask-application-looks-like",
      },
      {
        title: "Werkzeug",
        description: "Documentacion de Werkzeug, paquete para el OAuth",
        url: "https://werkzeug.palletsprojects.com/en/1.0.x/tutorial/",
      },
      {
        title: "Jinja",
        description: "Documentacion de Jinja, paquete para crear esqueletos con herencia, funciones varias con Jinja tambien",
        url: "https://jinja.palletsprojects.com/en/2.11.x/templates/",
      },
      {
        title: "Contact form & E-mail",
        description: "Video donde conecta un form de 'contact me' con STMP de gmail",
        url: "https://www.youtube.com/watch?v=6VGu1CwCN2Y&ab_channel=Ahnaf",
      },
      {
        title: "Contact form & E-mail 2",
        description: "Documentacion para enviar mail con paquetes email y message y variables de entorno",
        url: "https://www.twilio.com/blog/2018/03/send-email-programmatically-with-gmail-python-and-flask.html",
      },
    ]
  },
  {
    id: "Django",
    resources: [{
        // title: "Test1",
        // description: "Test1",
        // url: "url1",
      },
    ]
  },
  {
    id: "Html",
    resources: [
      {
        title: "HTML Cheatsheet",
        description: "Manual HTML",
        url: "https://htmlcheatsheet.com/",
      },
    ]
  },
  {
    id: "Css",
    resources: [{
        title: "CSS Batle",
        description: "Challenges de CSS para copiar elementos y buscar el clonado exacto, esta bueno para practicar pero nada que no haga el BTS",
        url: "https://cssbattle.dev/",
      },
      {
        title: "Selectores",
        description: "Selectores de elementos",
        url: "https://code.tutsplus.com/es/tutorials/the-30-css-selectors-you-must-memorize--net-16048",
      },
      {
        title: "Responsive buttons",
        description: "Botones que responden a acciones, varios de distintos colores, vienen bien",
        url: "https://codepen.io/dlekovic/pen/eDlkC",
      },
      {
        title: "Tabla de propiedades y valores",
        description: "Resumen de propiedades y valores para css, importante",
        url: "https://lucidar.me/en/web-dev-class/lesson-2-09-most-used-css-properties/",
      },
      {
        title: "Gradients",
        description: "Colores degrade con ejemplos, segun se use queda bien o muy mal, a fijarse mas ejemplos que crear propios",
        url: "https://coolors.co/gradients",
      },
      {
        title: "Media queries",
        description: "Media queries para poder re-escalar pagina correctamente",
        url: "https://desarrolloweb.com/articulos/css-media-queries.html",
      },
      {
        title: "KeyFrames",
        description: "Video tutorial de como animar un elemento y despues como crear animaciones mas faciles y agregarlas al CSS, la extension de Chrome, una vez visto lo primero, es lo mas util",
        url: "https://www.youtube.com/watch?v=zHUpx90NerM&ab_channel=TraversyMedia",
      },
      {
        title: "KeyFrames2",
        description: "Same",
        url: "https://www.youtube.com/watch?v=H598jXvQhLw&ab_channel=DesignCourse",
      },
      {
        title: "Text Shadow Generator",
        description: "Generador de Text Shadow en tiempo real, bastante clave. El mejor color es el negro",
        url: "https://css3gen.com/text-shadow/",
      },
    ]
  },
  {
    id: "UI",
    resources: [{
        title: "Refactoring UI",
        description: "Pagina que suplanta bootstrap para crear cosas de diseño sin necesidad de bts",
        url: "https://refactoringui.com/",
      },
      {
        title: "PNG Transparent",
        description: "Para sacar una imagen de google tipo PNG, ponerla transparente y usarla como icono, rebuscado pero funciona",
        url: "https://onlinepngtools.com/create-transparent-png",
      },
      {
        title: "Footer positioning",
        description: "Como colocar el Footer 100% abajo en la pagina, infalibe y mas que util",
        url: "https://css-tricks.com/couple-takes-sticky-footer/",
      },
      {
        title: "Font Awesome",
        description: "Iconos de font awesome, gratuitos pero a veces recomiendo armar propios con proximo elemento",
        url: "https://fontawesome.com/icons?d=gallery",
      },
      {
        title: "Google Fonts",
        description: "Fonts sacadas desde google para elegir tipo de letra y agregar al :root",
        url: "https://fonts.google.com/",
      },
      {
        title: "Scroll animations",
        description: "Scroll animations tipo fade-in/out para secciones, facil de usar!",
        url: "https://michalsnik.github.io/aos/",
      },
      {
        title: "Color palletes",
        description: "Paleta de colores para crear pagina web y no delirar, conveniente para agregar al :root y no flashear",
        url: "https://brandcolors.net/",
      },
      {
        title: "Color palletes2",
        description: "Same",
        url: "https://coolors.co/",
      },
    ]
  },
  {
    id: "Js",
    resources: [{
        title: "Javascript 30",
        description: "Challenges de JS para hacer en vivo, source code incluido, ta piola",
        url: "https://github.com/wesbos/JavaScript30",
      },
      {
        title: "HTML DOM",
        description: "Funciones para manejar HTML",
        url: "https://www.w3schools.com/jsref/dom_obj_document.asp",
      },
      {
        title: "Programacion Funcional",
        description: "Manera de escribir funciones de una manera mucho mas escalable y legible",
        url: "https://codewords.recurse.com/issues/one/an-introduction-to-functional-programming",
      },
      {
        title: "JS Challenges",
        description: "Desafios de JS para practicar, como el #1",
        url: "https://www.codewars.com/",
      },
      {
        title: "Arrow Functions",
        description: "Video para entender la escritura de funciones con flechas, no es dificil pero se necesita darle bola",
        url: "https://www.youtube.com/watch?v=h33Srr5J9nY&ab_channel=WebDevSimplified",
      },
      {
        title: "Debug Javascript with Live Server",
        description: "Debugear codigo con funcions JS sin necesidad de instalar Node",
        url: "https://stackoverflow.com/questions/46945784/how-to-debug-javascript-in-visual-studio-code-with-live-server-running",
      },
    ]
  },
  {
    id: "React",
    resources: [
      {
        title: "Create-React-App",
        description: "Github con proyecto base",
        url: "https://github.com/facebook/create-react-app",
      },
      {
        title: "Tutorial de React no mediocre",
        description: "Un tuto de React que viene bien",
        url: "https://www.youtube.com/watch?v=dGcsHMXbSOA&ab_channel=DevEd",
      },
      {
        title: "Creacion de To do's app con REACT",
        description: "Creacion de proyecto con React",
        url: "https://www.youtube.com/watch?v=pCA4qpQDZD8&ab_channel=DevEd",
      },
    ]
  },
  {
    id: "SQL",
    resources: [{
        title: "name1",
        description: "awdawdawdawdawd",
        url: "url",
      },
    ]
  },
  {
    id: "Git",
    resources: [{
        title: "Contact Form Static Page",
        description: "Para poder enviarse mails desde una pagina sin necesidad de un backend, funciona bien para GitHub Pages",
        url: "https://dev.to/charalambosioannou/create-a-static-webpage-with-a-contact-form-on-github-pages-3532",
      },
      {
        title: "Comandos utiles de GIT",
        description: '"git add .", "git commit -m texto-commit", "git push origin develop", crear el pr despues, etc',
        url: "https://confluence.atlassian.com/bitbucketserver/basic-git-commands-776639767.html",
      },
      {
        title: "Setup de GIT, entender las ramas de master/main y develop, junto con su merge, etc",
        description: 'Setupear GIT de manera facil, igual recomiendo entrar por GITHUB',
        url: "https://www.theodinproject.com/courses/web-development-101/lessons/setting-up-git?ref=lnav",
      },
    ]
  },
  {
    id: "Hosting",
    resources: [{
        title: "Netlify",
        description: "Hosteo gratis, utilizamos Netlify para agregar Flask, agrego source code y tutorial",
        url: "https://app.netlify.com/teams/brunoleonpuca/overview",
      },
      {
        title: "Tutorial Netlify",
        description: "Tutorial Netlify con Python Flask",
        url: "https://medium.com/@francescaguiducci/how-to-build-a-simple-personal-website-with-python-flask-and-netlify-d800c97c283d",
      },
      {
        title: "Github.pages.io",
        description: "Tutorial sencillo para poder arrancar con el hosting de GIT pages, no es dificil",
        url: "https://guides.github.com/features/pages/",
      },
    ]
  },
  {
    id: "CSharp",
    resources: [{
        title: "That C# guy",
        description: "Guia completa para C#",
        url: "https://thatcsharpguy.com/posts/patrones-de-diseno/",
      },
    ]
  },
  {
    id: "Selenium",
    resources: [{
        title: "Selenium Playground",
        description: "Pagina con HTML simple para automatizar sus pasos",
        url: "http://timvroom.com/selenium/playground/",
      },
      {
        title: "Execute Automation",
        description: "Curso de automation",
        url: "http://www.executeautomation.com/site/",
      },
      {
        title: "Nahual",
        description: "Pagina de Nahual con proyectos para automarizar, mas de practica que otra cosa",
        url: "https://nahual.github.io/",
      },
    ]
  },
  {
    id: "Courses",
    resources: [{
        title: "FreeCodeCamp",
        description: "Cursos y blogs de programacion, mil cursos gratuitos y de muy alta calidad",
        url: "https://www.youtube.com/c/Freecodecamp/videos?view=0&sort=p&flow=grid",
      },
      {
        title: "r/udemyFreebies",
        description: "Subreddit de cursos gratuitos de Udemy para obtener en oferta",
        url: "https://www.reddit.com/r/udemyfreebies/new/",
      },
    ]
  },
]

function setAttributes(el, attrs) {
  for (var key in attrs) {
    el.setAttribute(key, attrs[key]);
  }
}

function setResource(container, res) {
  var table = document.createElement("table");
  table.setAttribute("class", "table table-hover");

  var thead = document.createElement("thead");
  var tbody = document.createElement("tbody");
  var tr = document.createElement("tr");

  container.appendChild(table);
  table.appendChild(thead);
  thead.appendChild(tr);
  table.appendChild(tbody);

  for (let index = 0; index < heads.length; index++) {
    var th = document.createElement("th");
    th.innerText = heads[index];
    tr.appendChild(th);
    th.setAttribute("scope", "col");
  }

  // console.log(res);
  for (let rows = 0; rows < res.resources.length; rows++) {
    var element = res.resources[rows];
    var tr = document.createElement("tr");
    var th = document.createElement("th");
    th.setAttribute("scope", "row");
    tr.appendChild(th);
    th.innerText = rows + 1;

    var tdtitle = document.createElement("td");
    var tddesc = document.createElement("td");
    var tdlink = document.createElement("td");
    var a = document.createElement("a");
    a.setAttribute("href", element.url);
    a.setAttribute("target", "_blank")
    a.innerHTML = "&#187;";
    tdtitle.innerText = element.title;
    tddesc.innerText = element.description;
    tdlink.appendChild(a);
    tr.appendChild(tdtitle);
    tr.appendChild(tddesc);
    tr.appendChild(tdlink);

    // console.log(rows + 1)
    // console.log(element.title);
    // console.log(element.description);
    // console.log(element.url);

    tbody.appendChild(tr);
  }
}

//CREATE TABS
var nav = document.getElementById("pills-tab");
// console.log(nav);
for (let index = 0; index < tabs.length; index++) {
  var tag = document.createElement("a");
  tag.innerText = tabs[index];
  if (index == 0) {
    //First
    setAttributes(tag, {
      class: "nav-link active",
      id: "pills-" + tabs[index] + "-tab",
      "data-bs-toggle": "pill",
      href: "#pills-" + tabs[index],
      role: "tablist",
      "aria-controls": "pills-" + tabs[index],
      "aria-selected": "true",
    });

    nav.appendChild(tag);
  } else {
    setAttributes(tag, {
      class: "nav-link",
      id: "pills-" + tabs[index] + "-tab",
      "data-bs-toggle": "pill",
      href: "#pills-" + tabs[index],
      role: "tablist",
      "aria-controls": "pills-" + tabs[index],
      "aria-selected": "false",
    });
    nav.appendChild(tag);
  }
}

//CREAT TABLES AND SET RESOURCES
var table = document.getElementById("pills-tabContent");
for (let index = 0; index < tabs.length; index++) {
  var tab = document.createElement("div");
  //   tab.innerText = tabs[index];
  if (index == 0) {
    setAttributes(tab, {
      class: "tab-pane fade show active",
      id: "pills-" + tabs[index],
      role: "tabpanel",
      "aria-labelledby": "pills-" + tabs[index] + "-tab",
    });

    table.appendChild(tab);
    var tabElem = document.getElementById("pills-" + tabs[index]);
    setResource(tabElem, resourcesList[index]);
  } else {
    setAttributes(tab, {
      class: "tab-pane fade",
      id: "pills-" + tabs[index],
      role: "tabpanel",
      "aria-labelledby": "pills-" + tabs[index] + "-tab",
    });

    table.appendChild(tab);
    var tabElem = document.getElementById("pills-" + tabs[index]);
    setResource(tabElem, resourcesList[index]);
  }
}