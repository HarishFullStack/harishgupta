export const blogPosts = [
  {
    id: 1,
    title: 'Why Angular Stands Out as a Frontend Development Framework?',
    post: '<h1>Why Angular Stands Out as a Frontend Development Framework?</h1><p>Angular, developed and maintained by Google, has established itself as a powerhouse in the frontend ecosystem.</p><h2>What makes Angular so unique?</h2><p>Angular is a full-fledged framework that offers a complete solution for frontend development.</p><p>From a robust data binding mechanism to comprehensive dependency injection, and even built-in support for testing, Angular provides everything.</p><h3>Major Features</h3><ul><li><strong>Two-Way Data Binding:</strong> Angular’s two-way data binding automatically synchronizes data between the model and the view, reducing the amount of repetitive code developers have to write.</li><li><strong>Dependency Injection:</strong> Angular’s DI system allows developers to manage service instances easily, making the code more modular, testable, and maintainable.</li><li><strong>Component-Based Architecture:</strong> Angular’s architecture is built around reusable components, which promotes modular development and ensures that applications are easy to maintain and scale.</li><li><strong>Ahead-of-Time (AOT) Compilation:</strong> Angular’s AOT compilation converts your code into efficient JavaScript during the build process, resulting in faster load times and better performance.</li></ul><h3>Big Projects Using Angular</h3><ul><li>Gmail</li><li>Microsoft</li><li>Netflix TV</li><li>Upwork</li></ul><p>Strong community support, and ongoing improvements makes Angular a go-to framework for frontend development.</p>',
    highlight:
      'Angular, developed and maintained by Google, has established itself as a powerhouse in the frontend...',
    date: '2025-01-18',
    img: 'why-angular-stands-out-as-a-frontend-development-framework',
    url: 'why-angular-stands-out-as-a-frontend-development-framework',
  },
  {
    id: 2,
    title: 'Components: The Building Blocks in Angular Applications',
    post: '<h1>Components: The Building Blocks in Angular Applications</h1><p>Angular components are what makes Angular such a powerful and flexible framework for web applications.</p><p>Each component encapsulates a piece of the UI, along with its associated logic and styling, making it reusable and modular.</p><p>By breaking down the application into smaller, self-contained units (components) it enhances code maintainability, scalability, and testing.</p><h2>𝐇𝐨𝐰 𝐀𝐧𝐠𝐮𝐥𝐚𝐫 𝐂𝐨𝐦𝐩𝐨𝐧𝐞𝐧𝐭𝐬 𝐖𝐨𝐫𝐤?</h2><p>Each Angular component is composed of 3 key parts:</p><ul><li><strong>Template (HTML):</strong> This defines the structure of the component’s UI. It’s where you lay out the visual elements, bind data, and handle user interactions.</li><li><strong>Class (TypeScript):</strong> The class handles the logic behind the component. It includes properties and methods that control the behavior of the UI.</li><li><strong>Styles (CSS/SCSS):</strong> Styles define the appearance of the component.</li></ul><p>Components in Angular can interact with each other through @Input, @Output, and Services.</p><p>This interaction allows for the creation of complex UIs where data flows between components, and user actions in one component can affect the behavior of others.</p><p>Components are the fundamental part of how Angular applications are structured and maintained.</p>',
    highlight:
      'Angular components are what makes Angular such a powerful and flexible framework for web applications...',
    date: '2025-01-19',
    img: 'components-the-building-blocks-in-angular-aapplications.png',
    url: 'components-the-building-blocks-in-angular-aapplications',
  },
  {
    id: 3,
    title: 'Angular Component Inputs with @Input Decorator',
    post: '<h1>Angular Component Inputs with @Input Decorator</h1><p>In Angular, components are the foundation of your application&#39;s user interface, and a feature they offer is the ability to communicate with each other.</p><p>The <code>@Input</code> decorator is a built-in Angular feature that allows a parent component to pass data to a child component.</p><p>By allowing components to receive data from their parents, you can create a more organized and scalable application structure.</p><h2>𝐄𝐱𝐚𝐦𝐩𝐥𝐞</h2><p>Imagine you have a <code>ProductListComponent</code> that displays a list of products.</p><p>Each product is represented by a <code>ProductCardComponent</code>.</p><p>By using <code>@Input</code>, you can pass individual product details from the <code>ProductListComponent</code> to each <code>ProductCardComponent</code>, making your code more modular and easier to maintain.</p><p>Understanding and using the <code>@Input</code> allows you to create interactive applications by enabling data flow between components.</p>',
    highlight:
      'In Angular, components are the foundation of your application&#39;s user interface, and a feature they offer is...',
    date: '2025-01-20',
    img: 'angular-component-inputs-with-input-decorator.png',
    url: 'angular-component-inputs-with-input-decorator',
  },
];
