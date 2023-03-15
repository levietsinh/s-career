export const data = {
  name: "TypeScript",
  references: [
    {
      name: "Github - JS Interview Questions & Answers",
      link: "https://github.com/sudheerj/javascript-interview-questions",
    },
  ],
  library: [
    {
      question: "Types vs Interfaces?",
      answer: `
        <div style="padding: 0 12px; font-size: 14px;">
          <p>The difference between types and interfaces in TypeScript used to be more clear, but with the latest versions of TypeScript, they’re becoming more similar.</p>
          <p style="padding-left: 12px">- Interfaces are basically a way to describe data shapes, for example, an object.</p>
          <p style="padding-left: 12px">- Type is a definition of a type of data, for example, a union, primitive, intersection, tuple, or any other type.</p>
          <ul>
            <li class="mb-2">
              <h3 style="font-weight: bold; color: #222; font-size: 18px">1. Declaration Merging</h3>
              <p>One thing that’s possible to do with interfaces but are not with types is declaration merging. Declaration merging happens when the TypeScript compiler merges two or more interfaces that share the same name into only one declaration.
              </p>
              <div style="background-color: #eee; margin: 12px 0;">
                <pre class="prettyprinted hljs cs code-space">
                  <span class="kwd"><span class="hljs-keyword">interface</span></span><span class="pln"> </span><span class="typ"><span class="hljs-title">Song</span></span><span class="pln"> </span><span class="pun">{</span><span class="pln">
                  artistName</span><span class="pun">:</span><span class="pln"> </span><span class="kwd"><span class="hljs-keyword">string</span></span><span class="pun">;</span><span class="pln">
                  </span><span class="pun">};</span><span class="pln">
                  
                  </span><span class="kwd"><span class="hljs-keyword">interface</span></span><span class="pln"> </span><span class="typ"><span class="hljs-title ">Song</span></span><span class="pln"> </span><span class="pun">{</span><span class="pln">
                    songName</span><span class="pun">:</span><span class="pln"> </span><span class="kwd"><span class="hljs-keyword">string</span></span><span class="pun">;</span><span class="pln">
                  </span><span class="pun">};</span><span class="pln">
                  
                  </span><span class="kwd"><span class="hljs-keyword">const</span></span><span class="pln"> song</span><span class="pun">:</span><span class="pln"> </span><span class="typ">Song</span><span class="pln"> </span><span class="pun">=</span><span class="pln"> </span><span class="pun">{</span><span class="pln">
                    artistName</span><span class="pun">:</span><span class="pln"> </span><span class="str"><span class="hljs-string">"Freddie"</span></span><span class="pun">,</span><span class="pln">
                    songName</span><span class="pun">:</span><span class="pln"> </span><span class="str"><span class="hljs-string">"The Chain"</span></span><span class="pln">
                  </span><span class="pun">};</span>
                </pre>
              </div>
              <p>TypeScript will automatically merge both interfaces declarations into one, so when we use this<span>&nbsp;</span><code class=" prettyprinted"><span class="typ" style="color: green; background-color: #eee;">Song</span></code><span>&nbsp;</span>interface, we&rsquo;ll have both properties.</p>
              <p>Declaration merging does not work with types. If we try to create two types with the same names, but with different properties, TypeScript would still throw us an error.</p>
              <pre class="prettyprinted hljs nginx code-space d-flex align-center p-1 my-1">
                <span class="typ"><span class="hljs-attribute ">Duplicate</span></span><span class="pln"> identifier </span><span class="typ  ">Song</span><span class="pun">.</span>
              </pre>
            </li>
            <li class="mb-2">
              <h3 style="font-weight: bold; color: #222; font-size: 20px" class="mb-2">2. Extends and implements
              </h3>
              <p>In TypeScript, we can easily extend and implement interfaces. This is not possible with types though.</p>
              <p>Interfaces in TypeScript can extend classes, this is a very awesome concept that helps a lot in a more object-oriented way of programming. We can also create classes implementing interfaces.</p>
              <p>For example, let&rsquo;s imagine that we have a class called<span>&nbsp;</span><code class=" prettyprinted"><span class="typ">Car</span></code><span>&nbsp;</span>and an interface called<span>&nbsp;</span><code class=" prettyprinted"><span class="typ  ">NewCar</span></code>, we can easily extend this class using an interface:</p>
              <pre class="prettyprinted hljs coffeescript code-space "><span class="kwd"><span class="hljs-class"><span class="hljs-keyword">class</span></span></span><span class="pln"><span class="hljs-class"> </span></span><span style="color: #ff0000;"><span class="typ"><span class="hljs-class"><span class="hljs-title">Car</span></span></span><span class="pln"><span class="hljs-class"> </span></span></span><span class="pun"><span class="hljs-class">{</span></span><span style="color: #0000ff;"><span class="pln">
              <span class="hljs-function">  <span class="hljs-title">printCar</span> </span></span></span><span class="pun"><span class="hljs-function">=</span></span><span class="pln"><span class="hljs-function"> </span></span><span class="pun"><span class="hljs-function"><span class="hljs-params">()</span></span></span><span class="pln"><span class="hljs-function"> </span></span><span class="pun"><span class="hljs-function">=&gt;</span></span><span class="pln"> </span><span class="pun">{</span><span class="pln">
                  <span class="hljs-built_in">console</span></span><span class="pun">.</span><span class="pln">log</span><span class="pun">(</span><span class="str"><span class="hljs-string">"this is my car"</span></span><span class="pun">)</span><span class="pln">
                </span><span class="pun">}</span><span class="pln">
              </span><span class="pun">};</span><span class="pln">
              </span><span class="kwd">interface</span><span class="pln"> </span><span class="typ  ">NewCar</span><span class="pln"> </span><span class="kwd">extends</span><span class="pln"> </span><span style="color: #ff0000;"><span class="typ">Car</span><span class="pln"> </span></span><span class="pun">{</span><span class="pln">
                name</span><span class="pun">:</span><span class="pln"> </span><span class="kwd">string</span><span class="pun">;</span><span class="pln">
              </span><span class="pun">};</span><span class="pln">
              </span><span class="kwd"><span class="hljs-class"><span class="hljs-keyword">class</span></span></span><span class="pln"><span class="hljs-class"> </span></span><span class="typ"><span class="hljs-class"><span class="hljs-title">NewestCar</span></span></span><span class="pln"><span class="hljs-class"> </span></span><span class="kwd"><span class="hljs-class"><span class="hljs-title">implements</span></span></span><span class="pln"><span class="hljs-class"> </span></span><span class="typ"><span class="hljs-class"><span class="hljs-title  ">NewCar</span></span></span><span class="pln"><span class="hljs-class"> </span></span><span class="pun"><span class="hljs-class">{</span></span><span class="pln">
                name</span><span class="pun">:</span><span class="pln"> </span><span class="str"><span class="hljs-string">"Car"</span></span><span class="pun">;</span><span class="pln">
                </span><span class="kwd">constructor</span><span class="pun">(</span><span class="pln">engine</span><span class="pun">:</span><span class="kwd">string</span><span class="pun">)</span><span class="pln"> </span><span class="pun">{</span><span class="pln">
                  </span><span class="kwd"><span class="hljs-keyword">this</span></span><span class="pun">.</span><span class="pln">name </span><span class="pun">=</span><span class="pln"> name
                </span><span class="pun">}</span><span style="color: #0000ff;"><span class="pln">
              <span class="hljs-function">  <span class="hljs-title">printCar</span> </span></span></span><span class="pun"><span class="hljs-function">=</span></span><span class="pln"><span class="hljs-function"> </span></span><span class="pun"><span class="hljs-function"><span class="hljs-params">()</span></span></span><span class="pln"><span class="hljs-function"> </span></span><span class="pun"><span class="hljs-function">=&gt;</span></span><span class="pln"> </span><span class="pun">{</span><span class="pln">
                  <span class="hljs-built_in">console</span></span><span class="pun">.</span><span class="pln">log</span><span class="pun">(</span><span class="str"><span class="hljs-string">"this is my car"</span></span><span class="pun">)</span><span class="pln">
                </span><span class="pun">}</span><span class="pln">
              </span><span class="pun">};</span></pre>
              </li>
            <li class="mb-2">
              <h3 style="font-weight: bold; color: #222; font-size: 20px">3. Intersection</h3>
              <p>Intersection allows us to combine multiple types into a single one type. To create an intersection type, we have to use the<span>&nbsp;</span><code class=" prettyprinted"><span class="pun">&amp;</span></code><span>&nbsp;</span>keyword:</p>
<pre class="prettyprinted hljs bash"><span class="pln"><span class="hljs-built_in">type</span> </span><span class="typ ">Name</span><span class="pln"> </span><span class="pun">=</span><span class="pln"> </span><span class="pun">{</span><span class="pln">
  name</span><span class="pun">:</span><span class="pln"> </span><span class="pun">&ldquo;</span><span class="kwd">string</span><span class="pun">&rdquo;</span><span class="pln">
</span><span class="pun">};</span><span class="pln">

<span class="hljs-built_in">type</span> </span><span class="typ ">Age</span><span class="pln"> </span><span class="pun">=</span><span class="pln"> </span><span class="pun">{</span><span class="pln">
  age</span><span class="pun">:</span><span class="pln"> number
</span><span class="pun">};</span><span class="pln">

<span class="hljs-built_in">type</span> </span><span class="typ">Person</span><span class="pln"> </span><span class="pun">=</span><span class="pln"> </span><span class="typ ">Name</span><span class="pln"> </span><span class="pun">&amp;</span><span class="pln"> </span><span class="typ">Age</span><span class="pun">;</span></pre>
<p>The nice thing here is that we can create a new intersection type combining two interfaces, for example, but not the other way around. We cannot create an interface combining two types, because it doesn&rsquo;t work:</p>
<pre class="prettyprinted hljs cs"><span class="kwd"><span class="hljs-keyword">interface</span></span><span class="pln"> </span><span class="typ"><span class="hljs-title">Name</span></span><span class="pln"> </span><span class="pun">{</span><span class="pln">
  name</span><span class="pun">:</span><span class="pln"> </span><span class="pun">&ldquo;</span><span class="kwd"><span class="hljs-keyword">string</span></span><span class="pun">&rdquo;</span><span class="pln">
</span><span class="pun">};</span><span class="pln">

</span><span class="kwd"><span class="hljs-keyword">interface</span></span><span class="pln"> </span><span class="typ"><span class="hljs-title ">Age</span></span><span class="pln"> </span><span class="pun">{</span><span class="pln">
  age</span><span class="pun">:</span><span class="pln"> number
</span><span class="pun">};</span><span class="pln">

type </span><span class="typ">Person</span><span class="pln"> </span><span class="pun">=</span><span class="pln"> </span><span class="typ ">Name</span><span class="pln"> </span><span class="pun">&amp;</span><span class="pln"> </span><span class="typ ">Age</span><span class="pun">;</span></pre>
            </li>
            <li class="mb-2">
              <h3 style="font-weight: bold; color: #222; font-size: 20px">4. Unions</h3>
              <p>Union types allow us to create a new type that can have a value of one or a few more types. To create a union type, we have to use the<span>&nbsp;</span><code class=" prettyprinted"><span class="pun">|</span></code><span>&nbsp;</span>keyword.</p>
<pre class="prettyprinted hljs bash"><span class="pln"><span class="hljs-built_in">type</span> </span><span class="typ  ">Man</span><span class="pln"> </span><span class="pun">=</span><span class="pln"> </span><span class="pun">{</span><span class="pln">
  name</span><span class="pun">:</span><span class="pln"> </span><span class="pun">&ldquo;</span><span class="kwd">string</span><span class="pun">&rdquo;</span><span class="pln">
</span><span class="pun">};</span><span class="pln">

<span class="hljs-built_in">type</span> </span><span class="typ ">Woman</span><span class="pln"> </span><span class="pun">=</span><span class="pln"> </span><span class="pun">{</span><span class="pln">
  name</span><span class="pun">:</span><span class="pln"> </span><span class="pun">&ldquo;</span><span class="kwd">string</span><span class="pun">&rdquo;</span><span class="pln">
</span><span class="pun">};</span><span class="pln">

<span class="hljs-built_in">type</span> </span><span class="typ">Person</span><span class="pln"> </span><span class="pun">=</span><span class="pln"> </span><span class="typ  ">Man</span><span class="pln"> </span><span class="pun">|</span><span class="pln"> </span><span class="typ ">Woman</span><span class="pun">;</span></pre>
<p>Similar to intersections, we can create a new union type combining two interfaces, for example, but not the other way around:</p>
<pre class="prettyprinted hljs cs"><span class="kwd"><span class="hljs-keyword">interface</span></span><span class="pln"> </span><span class="typ"><span class="hljs-title  ">Man</span></span><span class="pln"> </span><span class="pun">{</span><span class="pln">
  name</span><span class="pun">:</span><span class="pln"> </span><span class="str"><span class="hljs-string">"string"</span></span><span class="pln">
</span><span class="pun">};</span><span class="pln">

</span><span class="kwd"><span class="hljs-keyword">interface</span></span><span class="pln"> </span><span class="typ"><span class="hljs-title ">Woman</span></span><span class="pln"> </span><span class="pun">{</span><span class="pln">
  name</span><span class="pun">:</span><span class="pln"> </span><span class="str"><span class="hljs-string">"string"</span></span><span class="pln">
</span><span class="pun">};</span><span class="pln">

type </span><span class="typ">Person</span><span class="pln"> </span><span class="pun">=</span><span class="pln"> </span><span class="typ  ">Man</span><span class="pln"> </span><span class="pun">|</span><span class="pln"> </span><span class="typ ">Woman</span><span class="pun">;</span></pre>
            </li>
            <li>
            <h3 style="font-weight: bold; color: #222; font-size: 20px">5. Tuples</h3>
            <p><a href="https://www.typescriptlang.org/docs/handbook/basic-types.html#tuple" target="_blank" rel="noopener noreferrer" class="d-inline">Tuples</a><span>&nbsp;</span>are a very helpful concept in TypeScript, it brought to us this new data type that includes two sets of values of different data types.</p>
<pre class="prettyprinted hljs apache"><span class="pln"><span class="hljs-attribute">type</span> </span><span class="typ  ">Response</span><span class="pln"> </span><span class="pun">=</span><span class="pln"><span class="hljs-meta"> </span></span><span class="pun"><span class="hljs-meta">[</span></span><span class="kwd"><span class="hljs-meta">string</span></span><span class="pun"><span class="hljs-meta">,</span></span><span class="pln"><span class="hljs-meta "> number</span></span><span class="pun"><span class="hljs-meta">]</span></span></pre>
<p>But, in TypeScript, we can only declare tuples using types and not interfaces. There&rsquo;s no way we can declare a tuple in TypeScript using an interface, but you still are able to use a tuple inside an interface, like this:</p>
<pre class="prettyprinted hljs cs"><span class="kwd"><span class="hljs-keyword">interface</span></span><span class="pln"> </span><span class="typ"><span class="hljs-title  ">Response</span></span><span class="pln"> </span><span class="pun">{</span><span class="pln">
  </span><span class="kwd"><span class="hljs-keyword">value</span></span><span class="pun">:</span><span class="pln"> </span><span class="pun">[</span><span class="kwd"><span class="hljs-keyword">string</span></span><span class="pun">,</span><span class="pln "> number</span><span class="pun">]</span><span class="pln">
</span><span class="pun">}</span></pre>
            </li>
          </ul>
        </div>
      `,
    },
    {
      question: "What should we use Interfaces or Types?",
      answer:
        `
        <a style="font-weight: bold; margin-bottom: 12px; display: block;" href="https://wicki.io/posts/2022-01-quick-comparison-interface-vs-type-alias/">Interface vs Type Alias in TypeScript—Quick Comparison</a>
        <p>This question is really tricky, and the answer to it, you might guess, depends on what you&rsquo;re building and what you&rsquo;re working on.</p>
<p>Interfaces are better when you need to define a new object or method of an object. For example, in React applications, when you need to define the props that a specific component is going to receive, it&rsquo;s ideal to use interface over types:</p>
<pre class="prettyprinted hljs cs"><span class="kwd"><span class="hljs-keyword">interface</span></span><span class="pln"> </span><span class="typ"><span class="hljs-title font-blue">TodoProps</span></span><span class="pln"> </span><span class="pun">{</span><span class="pln">
  name</span><span class="pun">:</span><span class="pln"> </span><span class="kwd"><span class="hljs-keyword">string</span></span><span class="pun">;</span><span class="pln">
  isCompleted</span><span class="pun">:</span><span class="pln"> </span><span class="kwd">boolean</span><span class="pln">
</span><span class="pun">};</span><span class="pln">

</span><span class="kwd"><span class="hljs-keyword">const</span></span><span class="pln"> </span><span class="typ">Todo</span><span class="pun">:</span><span class="pln"> </span><span class="typ">React</span><span class="pun">.</span><span class="pln">FC</span><span class="pun">&lt;</span><span class="typ font-blue">TodoProps</span><span class="pun">&gt;</span><span class="pln"> </span><span class="pun">=</span><span class="pln"> </span><span class="pun">({</span><span class="pln"> name</span><span class="pun">,</span><span class="pln"> isCompleted </span><span class="pun">})</span><span class="pln"> </span><span class="pun">=&gt;</span><span class="pln"> </span><span class="pun">{</span><span class="pln">
  </span><span class="pun">...</span><span class="pln">
</span><span class="pun">};</span></pre>
<p>Types are better when you need to create functions, for example. Let&rsquo;s imagine that we have a function that&rsquo;s going to return an object called, type alias is more recommended for this approach:</p>
<pre class="prettyprinted hljs coffeescript"><span class="pln">type </span><span class="typ">Person</span><span class="pln"> </span><span class="pun">=</span><span class="pln"> </span><span class="pun">{</span><span class="pln">
  name</span><span class="pun">:</span><span class="pln"> </span><span class="kwd">string</span><span class="pun">,</span><span class="pln">
  age</span><span class="pun">:</span><span class="pln"> number
</span><span class="pun">};</span><span class="pln">

type </span><span class="typ">ReturnPerson</span><span class="pln"> </span><span class="pun">=</span><span class="pln"> </span><span class="pun">(</span><span class="pln">
  person</span><span class="pun">:</span><span class="pln"> </span><span class="typ">Person</span><span class="pln">
</span><span class="pun">)</span><span class="pln"> </span><span class="pun">=&gt;</span><span class="pln"> </span><span class="typ">Person</span><span class="pun">;</span><span class="pln">

</span><span class="kwd">const</span><span class="pln"> returnPerson</span><span class="pun">:</span><span class="pln"> </span><span class="typ">ReturnPerson</span><span class="pln"> </span><span class="pun">=</span><span class="pln"> </span><span class="pun"><span class="hljs-function"><span class="hljs-params">(</span></span></span><span class="pln"><span class="hljs-function"><span class="hljs-params">person</span></span></span><span class="pun"><span class="hljs-function"><span class="hljs-params">)</span></span></span><span class="pln"><span class="hljs-function"> </span></span><span class="pun"><span class="hljs-function">=&gt;</span></span><span class="pln"> </span><span class="pun">{</span><span class="pln">
  </span><span class="kwd"><span class="hljs-keyword">return</span></span><span class="pln"> person</span><span class="pun">;</span><span class="pln">
</span><span class="pun">};</span></pre>
<p>At the end of the day, to decide if you should use a type alias or an interface, you should carefully think and analyze the situation &mdash; what you&rsquo;re working on, the specific code, etc.</p>
<p>Interface work better with objects and method objects, and types are better to work with functions, complex types, etc.</p>
<p>You should not start to use one and delete the other. Instead of doing that, start to refactor slowly, thinking of what makes more sense to that specific situation.</p>
<p>Remember that you can use both together and they will work fine. The idea here is just to clarify the differences between types and interfaces, and the best use cases for both.</p>
        `
    },
    {
      question: "What's your name?",
      answer:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam odio et deserunt dolores quisquam, tempore culpa dicta natus blanditiis labore recusandae vitae, repellat vero. Nulla veritatis eligendi non ab. Vel?",
    },
    {
      question: "What is the question?",
      answer: "Updating..."
    },
    {
      question: "What is the question?",
      answer: "Updating..."
    },
    {
      question: "What is the question?",
      answer: "Updating..."
    },
  ],
};
