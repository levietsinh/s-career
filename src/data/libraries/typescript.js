export const data = {
  name: "TypeScript",
  references: [
    {
      id: 1,
      name: "Github - JS Interview Questions & Answers",
      link: "https://github.com/sudheerj/javascript-interview-questions",
    },
  ],
  library: [
    {
      id: 1,
      question: "Types vs. interfaces?",
      answer: `
        <h3 style="font-weight: bold; color: #222; font-size: 20px">English</h3>
        <div style="padding: 0 12px; font-size: 14px;">
          <p>The difference between types and interfaces in TypeScript used to be more clear, but with the latest versions of TypeScript, they’re becoming more similar.</p>
          <p style="padding-left: 12px">Interfaces are basically a way to describe data shapes, for example, an object.</p>
          <p style="padding-left: 12px">Type is a definition of a type of data, for example, a union, primitive, intersection, tuple, or any other type.</p>
          <ul>
            <li>
              <h3 style="font-weight: bold; color: #222; font-size: 18px">1. Declaration Merging</h3>
              <p>One thing that’s possible to do with interfaces but are not with types is declaration merging. Declaration merging happens when the TypeScript compiler merges two or more interfaces that share the same name into only one declaration.
              </p>
              <div style="background-color: #eee; margin: 12px 0;">
                <pre class="prettyprinted hljs cs">
                  <span class="kwd"><span class="hljs-keyword">interface</span></span><span class="pln"> </span><span class="typ"><span class="hljs-title">Song</span></span><span class="pln"> </span><span class="pun">{</span><span class="pln">
                  artistName</span><span class="pun">:</span><span class="pln"> </span><span class="kwd"><span class="hljs-keyword">string</span></span><span class="pun">;</span><span class="pln">
                  </span><span class="pun">};</span><span class="pln">
                  
                  </span><span class="kwd"><span class="hljs-keyword">interface</span></span><span class="pln"> </span><span class="typ"><span class="hljs-title">Song</span></span><span class="pln"> </span><span class="pun">{</span><span class="pln">
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
              <pre class="prettyprinted hljs nginx code-space">
                <span class="typ"><span class="hljs-attribute font-red">Duplicate</span></span><span class="pln"> identifier </span><span class="typ font-green">Song</span><span class="pun">.</span>
              </pre>
            </li>
            <li>
              <h3 style="font-weight: bold; color: #222; font-size: 20px">English</h3>
            </li>
            <li>
              <h3 style="font-weight: bold; color: #222; font-size: 20px">English</h3>
            </li>
          </ul>
        </div>
      `,
    },
    {
      id: 2,
      question: "What's your name?",
      answer:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam odio et deserunt dolores quisquam, tempore culpa dicta natus blanditiis labore recusandae vitae, repellat vero. Nulla veritatis eligendi non ab. Vel?",
    },
    {
      id: 3,
      question: "What's your name?",
      answer:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam odio et deserunt dolores quisquam, tempore culpa dicta natus blanditiis labore recusandae vitae, repellat vero. Nulla veritatis eligendi non ab. Vel?",
    },
  ],
};
