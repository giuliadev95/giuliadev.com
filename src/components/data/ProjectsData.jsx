export const projectsData = [
    {
        title: "CRM",
        body: "CRM intuitivo e responsive per gestire clienti e progetti in modo efficace.",
        imgSource:"./mock-up.png",
        alt:"Crm web app",
        stack:["Node.js","Express", "PostgreSQL", "React", "Tailwind", "Bootstrap"],
        github:"https://github.com/giuliadev95/CRM/tree/bootstrap",
        demo: "https://www.youtube.com/watch?v=ojn4gWtEFRM",
        // details:"/crm"
        description: [
            `
                In questo progetto ho sviluppato 
                una <strong>web app CRM</strong>.
                
            `,   
            `   
                Ho iniziato con la creazione del <strong>database PostgreSQL</strong>, definendo tabelle e relazioni.
                
            `,   `
                Ho realizzato il back-end con <strong>Node.js ed Express</strong>.
            ` , 
              `
                Ho implementato <strong>API RESTful</strong> per eseguire operazioni CRUD sui dati e 
                le ho testate con Postman. 
            ` , 
                `
                Ho sviluppato il front-end come <strong> Single Page Application </strong> con <strong> React </strong>.
                `, 
            `
                La web app ha un’architettura scalabile. 
            
            `      
        ]
    },
    {
        title: "Landing page",
        body: "Portfolio minimalista da una pagina, dal look moderno ed elegante.",
        imgSource:"./mock-up-minimalist-portfolio.png",
        alt: "minimalist portfolio website",
        stack:["HTML", "CSS", "JavaScript"],
        github:"https://github.com/giuliadev95/minimalist-portfolio-website",
        demo:"https://minimalist-static-portfolio.netlify.app/",
        // details:"/portfolio"
        description: [
            `
                Questo progetto è un portfolio statico realizzato con <strong>HTML, CSS e JavaScript</strong>.
                
            `,
            `
                Si tratta di una challenge del programma Frontend Mentor.
            `
            ,   `
                    Ho riprodotto il layout da un file Figma contenente il mock-up.
            `
            ,   `
                    Ho utlizzzato un approccio <strong>mobile-first<storng>.
            `
            ,   `
                    Ho utilizzato CSS <strong>Flexbox e Grid</strong> per creare un <strong>layout responsivo</strong>.
            `
            ,   `
                    Ho assicurato una navigazione fluida e adattato le immagini a tutti gli schermi. 
            `
        ]
    }
]