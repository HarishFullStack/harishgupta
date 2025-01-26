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
  {
    id: 4,
    title: 'Angular Custom Events with @Output Decorator',
    post: '<h1>@Output Decorator in Angular: Enabling Child-to-Parent Communication</h1>\n<p>While the <code>@Input</code> decorator allows parent components to pass data to child components, the <code>@Output</code> decorator enables child components to send data or events back to the parent.</p>\n<p>By using <code>@Output</code>, you can ensure that actions taken within a child component, like button clicks or form submissions, can trigger events in the parent component.</p>\n<p>This allows for a two-way communication flow between components, making applications more interactive and responsive.</p>\n\n<h2>Example</h2>\n<p>Imagine you have a <code>ProductListComponent</code> that displays a list of products, and each product is managed by a <code>ProductCardComponent</code>.</p>\n<p>Using <code>@Output</code>, the <code>ProductCardComponent</code> can emit an event when a product is selected, allowing the <code>ProductListComponent</code> to update the UI or trigger further actions based on the user’s selection.</p>\n\n<p><code>@Output</code> enables components to communicate effectively, ensuring that user interactions within a child component can impact the overall application behavior.</p>',
    highlight:
      '@Output Decorator in Angular: Enabling Child-to-Parent Communication. While the <code>@Input</code> decorator allows parent components...',
    date: '2025-01-26',
    img: 'angular-custom-events-with-output-decorator.png',
    url: 'angular-custom-events-with-output-decorator',
  },
  {
    id: 5,
    title: 'What are Angular Built-In Directives?',
    post: '<h1>Angular Built-in Directives: Simplify Your DOM Management</h1>\n<p>Angular built-in directives are special instructions in the form of <strong>attributes</strong> that you can add to elements in your HTML templates.</p>\n<p>These directives help modify the structure, behavior, or appearance of elements without writing additional logic in your components.</p>\n<p>There are 2 main types of built-in directives in Angular:</p>\n\n<h2>1. Structural Directives</h2>\n<p>Structural directives alter the DOM layout by adding or removing elements.</p>\n<ul>\n  <li><strong>ngIf:</strong> Use <code>*ngIf</code> to display or hide elements dynamically.</li>\n</ul>\n<pre><code>&lt;div *ngIf=&quot;isLoggedIn&quot;&gt;Welcome, User!&lt;/div&gt;\n</code></pre>\n<hr>\n<ul>\n  <li><strong>ngFor:</strong> Use <code>*ngFor</code> to generate lists or repeat elements based on your data.</li>\n</ul>\n<pre><code>&lt;ul&gt;\n  &lt;li *ngFor=&quot;let item of items&quot;&gt;{{ item.name }}&lt;/li&gt;\n&lt;/ul&gt;\n</code></pre>\n<hr>\n<ul>\n  <li><strong>ngSwitch:</strong> Use <code>[ngSwitch]</code> to render different templates based on a single condition.</li>\n</ul>\n<pre><code>&lt;div [ngSwitch]=&quot;user.role&quot;&gt;\n  &lt;p *ngSwitchCase=&quot;"admin"&quot;&gt;Admin Dashboard&lt;/p&gt;\n  &lt;p *ngSwitchCase=&quot;"user"&quot;&gt;User Dashboard&lt;/p&gt;\n  &lt;p *ngSwitchDefault&gt;Guest Dashboard&lt;/p&gt;\n&lt;/div&gt;\n</code></pre>\n<hr>\n\n<h2>2. Attribute Directives</h2>\n<p>Attribute directives change the appearance or behavior of an element, component, or another directive.</p>\n<ul>\n  <li><strong>ngClass:</strong> The <code>[ngClass]</code> directive dynamically adds or removes CSS classes based on component data.</li>\n</ul>\n<pre><code>&lt;button [ngClass]=&quot;{ &quot;active&quot;: isActive, &quot;disabled&quot;: isDisabled }&quot;&gt;Click Me&lt;/button&gt;\n</code></pre>\n<hr>\n<ul>\n  <li><strong>ngStyle:</strong> The <code>[ngStyle]</code> directive allows you to apply inline styles to elements based on dynamic conditions.</li>\n</ul>\n<pre><code>&lt;div [ngStyle]=&quot;{ &quot;color&quot;: textColor, &quot;font-size&quot;: fontSize + &quot;px&quot; }&quot;&gt;Styled Text&lt;/div&gt;\n</code></pre>\n<p>Directives allow you to control the DOM structure and style with minimal code, making your codebase more manageable.</p>',
    highlight:
      'Angular built-in directives are special instructions in the form of <strong>attributes</strong> that you can add to elements in your HTML templates...',
    date: '2025-01-27',
    img: 'what-are-angular-built-in-directives.png',
    url: 'what-are-angular-built-in-directives',
  },
  {
    id: 6,
    title: 'What is ng-container in Angular?',
    post: '<h1>What is <code>ng-container</code> in Angular?</h1>\n<p><strong>ng-container</strong> is a special Angular directive used for grouping content in templates without rendering additional elements in the DOM.</p>\n<p>Unlike <code>div</code> or <code>span</code>, <strong>ng-container</strong> doesn’t create any new elements; it simply serves as a structural directive to apply logic, such as <code>*ngIf</code> or <code>*ngFor</code>.</p>\n\n<h2>Why use <code>ng-container</code>?</h2>\n\n<h3>1. Cleaner DOM Structure</h3>\n<p>It allows you to apply conditional rendering (<code>*ngIf</code>) or loops (<code>*ngFor</code>) without cluttering your DOM with unnecessary <code>div</code> or <code>span</code> elements. This helps keep your HTML clean and improves performance by reducing unnecessary elements.</p>\n<pre><code>&lt;ng-container *ngIf=&quot;isLoggedIn&quot;&gt;\n  &lt;p&gt;Welcome, user!&lt;/p&gt;\n  &lt;button&gt;Logout&lt;/button&gt;\n&lt;/ng-container&gt;\n</code></pre>\n\n<h3>2. Combining Multiple Structural Directives</h3>\n<p>When you want to apply multiple structural directives like <code>*ngIf</code> and <code>*ngFor</code> in the same section of code, <strong>ng-container</strong> comes in handy to avoid conflicting directives on the same element.</p>\n<pre><code>&lt;ng-container *ngFor=&quot;let item of items&quot;&gt;\n  &lt;ng-container *ngIf=&quot;item.isVisible&quot;&gt;\n    &lt;p&gt;{{ item.name }}&lt;/p&gt;\n  &lt;/ng-container&gt;\n&lt;/ng-container&gt;\n</code></pre>\n\n<p><strong>ng-container</strong> might seem like a simple feature but it plays an important role in keeping your Angular application’s DOM lightweight, code more readable, and enhances performance.</p>',
    highlight:
      '<strong>ng-container</strong> is a special Angular directive used for grouping content in templates without rendering additional elements in the DOM.</p><p>Unlike...',
    date: '2025-01-28',
    img: 'what-is-ng-container-in-angular.png',
    url: 'what-is-ng-container-in-angular',
  },
];
